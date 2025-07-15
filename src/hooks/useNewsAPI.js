import { useState, useEffect } from "react";
import axios from "axios";

const { VITE_NEWS_ENDPOINT} = import.meta.env;

export default function useNewsAPI(custom) {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  
  const endpoint = custom || VITE_NEWS_ENDPOINT;


  useEffect(() => {
    // console.log("fetch data from-", endpoint);
    setLoading(true);
    setErr(null);

    axios.get(endpoint)
      .then((res) => {
        // console.log(res.data);
        setArticles(res.data.results || []);
      })
      .catch((err) => {
        setErr(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [endpoint]);

  return { articles, loading, err };
}
