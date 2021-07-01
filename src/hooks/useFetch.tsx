import React from "react";

import { useEffect } from "react";

import axios from "axios";
import { useState } from "react";

interface VolumeInfoProps {
  title: string;
  authors: any;
  imageLinks: {
    thumbnail: string;
  };
}

interface DataProps {
  volumeInfo: VolumeInfoProps;
}

export function useFetch(param?: string) {
  const [data, setData] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let source = axios.CancelToken.source();

    setTimeout(() => {
      const fetch = async () => {
        try {
          const res = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${param}`,
            { cancelToken: source.token }
          );
          setLoading(false);

          res.data.items && setData(res.data.items);

          setError(false);
        } catch (err) {
          console.log(err);
          setError(true);
        } finally {
          setLoading(false);
        }
      };

      fetch();
    }, 1000);

    return () => {
      source.cancel();
    };
  }, [param]);

  return {
    data,
    error,
    loading,
  };
}
