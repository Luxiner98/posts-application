import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useGreetUserInConsole } from "../../context/greetUserInConsole";
import { useComments, usePostAuthor } from "../../hooks";
import "./List.scss";

export const List = ({ title, body, postItemId, postUserId, message }) => {
  const { dataComments } = useComments({ postId: postItemId });
  const { dataUser } = usePostAuthor({ userId: postUserId });

  const [openComments, setOpenComments] = useState([]);

  const componentName = "List component";
  const greetUser = useGreetUserInConsole();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`${greetUser} ${componentName}`);
    // eslint-disable-next-line no-console
    console.log(`${message} ${componentName}`);
  }, [greetUser, message]);

  const handleOpenComments = (itemId) => {
    const elements = document.querySelectorAll("[data-comments]");
    elements.forEach((item) => {
      const itemAtrribute = item.getAttribute("data-comments");
      if (Number(itemAtrribute) === itemId) {
        setOpenComments([...openComments, itemId]);
        item.style.height = item.scrollHeight + "px";
        if (openComments.includes(itemId)) {
          setOpenComments(openComments.filter((commensId) => commensId !== itemId));
          item.style.height = 0 + "px";
        }
      }
    });
  };

  return (
    <div className="post-item">
      <div className="post-item__title">
        <Link to={`posts/${postItemId}`}>
          <h1>{title}</h1>
        </Link>
      </div>
      <div className="post-item__body">
        <p>{body}</p>
      </div>
      <div>
        <div className="u-d-flex u-space-between">
          <div onClick={() => handleOpenComments(postItemId)} className="cursor-pointer post-item__text">
            Number of comments: {dataComments.length} {openComments.includes(postItemId) ? "(Click to hide comments)" : "(Click to show comments)"}
          </div>
          <div>Author: {dataUser.username}</div>
        </div>
        <div className="post-item__comments" data-comments={postItemId}>
          <h2>Comments</h2>
          {dataComments.map((comment) => (
            <div key={comment.id} className="post-item__comment">
              {comment.body}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  message: PropTypes.string,
  postItemId: PropTypes.number,
  postUserId: PropTypes.number,
};
