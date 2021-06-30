import { useEffect } from "react";

import axios from "axios";
import { useState } from "react";

interface VolumeInfoProps {
  title: string;
  authors: Array<string>;
  imageLinks: {
    thumbnail: string;
  };
}

interface DataProps {
  volumeInfo: VolumeInfoProps;
}

export function useFetch(param?: string) {
  const [data, setData] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${param}`)
      .then((res) => {
        setLoading(false);

        res.data.items && setData(res.data.items);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  }, [param]);

  return {
    data,
    error,
    loading,
  };
}
