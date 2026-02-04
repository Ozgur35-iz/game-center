import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = (
  gameQuery: GameQuery,
  requestConfig?: AxiosRequestConfig,
  deps: any[] = [],
) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchGamesResponse>("/games", {
        signal: controller.signal,
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page,
          page_size: 20,
        },
        ...requestConfig,
      })
      .then((res) => {
        setGames((prev) =>
          page === 1 ? res.data.results : [...prev, ...res.data.results],
        );
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [
    page,
    gameQuery.genre?.id,
    gameQuery.platform?.id,
    gameQuery.sortOrder,
    gameQuery.searchText,
    ...deps,
  ]);

  useEffect(() => {
    setGames([]);
    setPage(1);
  }, [
    gameQuery.genre?.id,
    gameQuery.platform?.id,
    gameQuery.sortOrder,
    gameQuery.searchText,
  ]);

  return { games, error, isLoading, setPage };
};

export default useGames;
