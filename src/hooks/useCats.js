import { useEffect, useState } from "react";
import axios from "axios";

const featuredCats = [
  { name: "Whiskers", age: "2" },
  { name: "Mittens", age: "2" },
  { name: "Shadow", age: "1" },
];

const useCats = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    let cancel;
    setLoading(true);
    setError(false);

    // api request
    axios({
      method: "GET",
      url: "https://api.thecatapi.com/v1/images/search",
      params: { limit: featuredCats.length },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })

    // api data
    .then((res) => {
      const catsWithImages = featuredCats.map((cat, i) => ({
        ...cat, image: res.data[i].url,
      }));
      setCats((prev) => [...prev, ...catsWithImages]);
      setLoading(false);
    })

    // api error
    .catch((error) => {
      if (axios.isCancel(error)) {
        console.error("Request cancelled!"); return;
      } else {
        console.error("Error fetching cat images:", error);
      }
      setError(true);
    });

    return () => cancel();
  }, []);

  return { loading, error, cats };
};

export default useCats;
