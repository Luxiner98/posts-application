import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { List, Header, Input, Pagination, Loader } from "../components";
import { usePosts } from "../hooks";

export const Posts = ({ message }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputText, setInputText] = useState("");
  const { dataPosts, hasNextPage, hasPrevPage, arePostsFetched } = usePosts({ page: currentPage, searchText: inputText });

  useEffect(() => {
    if (inputText.length > 0) setCurrentPage(1);
  }, [inputText.length]);

  return (
    <>
      <Header pageTitle="Posts" message={message} />
      <div className="container">
        {!arePostsFetched ? (
          <div className="u-d-flex u-justify-center">
            <Loader message={message} />
          </div>
        ) : (
          <>
            <Input message={message} onChange={(event) => setInputText(event.target.value)} />

            {dataPosts.map((postItem) => (
              <List message={message} key={postItem.id} postItemId={postItem.id} title={postItem.title} body={postItem.body} postUserId={postItem.userId} />
            ))}

            <Pagination message={message} hasPreviousPage={hasPrevPage} hasNextPage={hasNextPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </>
        )}
      </div>
    </>
  );
};

Posts.propTypes = {
  message: PropTypes.string,
};
