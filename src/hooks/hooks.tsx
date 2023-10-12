import { useState, useEffect } from "react";

interface FetchResult {
  data: any;
  loading: boolean;
  error: any;
}

export const useFetch = (url: string): FetchResult => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          let error = new Error("Ha ocurrido un error en la petición");
          throw { error, status: res.status, text: res.statusText };
        }
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, loading, error };
};
