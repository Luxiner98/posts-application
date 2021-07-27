import { useEffect, useState } from "react";

export const useComments = ({ postId }) => {
  const [dataComments, setDataComments] = useState([]);
  const [areCommentsFetched, setAreCommentsFetched] = useState(false);

  useEffect(() => {
    const fetchSinglePost = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => response.json())
        .then((data) => {
          setDataComments(data);
          setAreCommentsFetched(true);
        });
    };
    fetchSinglePost();
  }, [postId]);

  return { dataComments, areCommentsFetched };
};
