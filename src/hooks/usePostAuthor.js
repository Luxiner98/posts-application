import { useEffect, useState } from "react";

export const usePostAuthor = ({ userId }) => {
  const [dataUser, setDataUser] = useState([]);
  const [isUserDataFetched, setIsUserDataFetched] = useState(false);

  useEffect(() => {
    const fetchAllPosts = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setDataUser(data);
          setIsUserDataFetched(true);
        });
    };
    fetchAllPosts();
  }, [userId]);

  return { dataUser, isUserDataFetched };
};
