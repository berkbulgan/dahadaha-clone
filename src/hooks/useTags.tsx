import { useState, useEffect } from "react";
import axios from "axios";
import type { TagType } from "../types/types";

const useTags = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [tags, setTags] = useState<TagType[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.extrazone.com/tags/list", {
        headers: {
          "Content-Type": "application/json",
          "X-Language-Id": "TR",
          "X-Country-Id": "TR",
        },
      });
      setTags(response.data);
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
  return { loading, error, tags };
};

export default useTags;
