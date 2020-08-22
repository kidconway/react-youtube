import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = defaultQuery => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultQuery);
  }, [defaultQuery]);

  const search = async query => {
    const res = await youtube.get(`/search`, {
      params: {
        q: query
      }
    });
    setVideos(res.data.items);
  };

  return [videos, search];
};

export default useVideos;
