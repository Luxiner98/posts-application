import { useEffect, useState } from "react";

export const usePosts = ({ page, searchText }) => {
  const [dataPosts, setDataPosts] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [arePostsFetched, setArePostsFetched] = useState(false);

  useEffect(() => {
    const fetchAllPosts = async () => {
      await fetch(
        searchText?.length > 0
          ? `https://jsonplaceholder.typicode.com/posts?q=${searchText}&_page=${page}&_limit=10`
          : `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      )
        .then((response) => {
          const linkHeader = response.headers.get("link");
          if (linkHeader.includes("next")) {
            setHasNextPage(true);
          } else {
            setHasNextPage(false);
          }
          if (linkHeader.includes("prev")) {
            setHasPrevPage(true);
          } else {
            setHasPrevPage(false);
          }
          setArePostsFetched(true);
          return response.json();
        })
        .then((data) => setDataPosts(data));
    };
    fetchAllPosts();
  }, [page, searchText]);

  return { dataPosts, hasNextPage, hasPrevPage, arePostsFetched };
};
