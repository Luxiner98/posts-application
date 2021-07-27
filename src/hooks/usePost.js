import { useEffect, useState } from "react";

export const usePost = ({ postId }) => {
  const [dataSinglePost, setDataSinglePost] = useState([]);
  const [isPostFetched, setIsPostFetched] = useState(false);

  useEffect(() => {
    const fetchSinglePost = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json())
        .then((data) => {
          setDataSinglePost(data);
          setIsPostFetched(true);
        });
    };
    fetchSinglePost();
  }, [postId]);

  return { dataSinglePost, isPostFetched };
};
