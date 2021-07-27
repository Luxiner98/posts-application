import PropTypes from "prop-types";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { Header, Loader } from "../components";
import { useComments, usePost } from "../hooks";
import "./Post.scss";

export const PostSingle = ({ message }) => {
  const match = useRouteMatch();
  const { dataSinglePost, isPostFetched } = usePost({ postId: match.params.id });
  const { dataComments, areCommentsFetched } = useComments({ postId: match.params.id });

  return (
    <>
      <Header pageTitle="Single post" message={message} />
      <div className="container u-d-flex u-flex-column u-align-center">
        {!isPostFetched && !areCommentsFetched ? (
          <Loader message={message} />
        ) : (
          <div className="post">
            <Link to="/posts" className="post__link">
              {"< Back to posts"}
            </Link>
            <div className="post__wrap">
              <h1 className="post__title">{dataSinglePost.title}</h1>
              <p className="post__body">{dataSinglePost.body}</p>
              <div className="post__comments">
                <h2>Comments</h2>
                {dataComments.map((comment) => (
                  <div key={comment.id} className="post__comment">
                    {comment.body}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

PostSingle.propTypes = {
  message: PropTypes.string,
};
