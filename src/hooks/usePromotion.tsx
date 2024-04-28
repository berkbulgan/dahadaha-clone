import { useState, useEffect } from "react";
import axios from "axios";
import type { PromotionDetails } from "../types/types";

const usePromotion = ({id}: {id: number}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [promotionDetail, setPromotionDetail] = useState<PromotionDetails>();

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.extrazone.com/promotions?Id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          "X-Language-Id": "TR",
          "X-Country-Id": "TR",
        },
      });
      setPromotionDetail(response.data);
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
  return { loading, error, promotionDetail };
};

export default usePromotion;
