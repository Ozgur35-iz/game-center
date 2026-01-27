import React from "react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Genre } from "./useGenres";
import { AxiosRequestConfig } from "axios";

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
  selectedGenre: Genre | null,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
) => {
  const [games, setGames] = useState<Game[]>([]);

  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);

      apiClient
        .get<FetchGamesResponse>("/games", {
          signal: controller.signal,
          params: { genres: selectedGenre?.id },
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
    },
    deps ? [...deps, selectedGenre] : [selectedGenre],
  );
  return { games, error, isLoading };
};

export default useGames;
