import { useState, useEffect } from "react";
import axios from "axios";
import type { Promotion } from "../types/types";

const usePromotions = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.extrazone.com/promotions/list?Channel=PWA", {
        headers: {
          "Content-Type": "application/json",
          "X-Language-Id": "TR",
          "X-Country-Id": "TR",
        },
      });
      setPromotions(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError('Error when fetching tags. ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { loading, error, promotions };
};

export default usePromotions;
