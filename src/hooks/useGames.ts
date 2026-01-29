import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";
import { Genre } from "./useGenres";
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

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchGamesResponse>("/games", {
        signal: controller.signal,
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
        },
        ...requestConfig,
      })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [gameQuery.genre?.id, gameQuery.platform?.id, ...deps]);

  return { games, error, isLoading };
};

export default useGames;
