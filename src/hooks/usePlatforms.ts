import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchPlatformsResponse {
  count: number;
  results: Platform[];
}

const usePlatforms = (requestConfig?: AxiosRequestConfig) => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);

  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchPlatformsResponse>("/platforms/lists/parents", {
        signal: controller.signal,
      })
      .then((res) => {
        setPlatforms(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { platforms, error, isLoading };
};

export default usePlatforms;
