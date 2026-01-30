import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface ESRBRating {
  id: number;
  name: string;
  slug: string;
}

export interface GameDetail {
  id: number;
  name: string;
  description_raw: string;
  background_image: string;
  metacritic: number;
  released: string;
  esrb_rating: ESRBRating | null;
  rating: number;
}

const useGameDetails = (id?: number) => {
  const [detail, setDetail] = useState<GameDetail | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get(`/games/${id}`, { signal: controller.signal })
      .then((res) => {
        setDetail(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [id]);

  return { detail, isLoading, error };
};

export default useGameDetails;
