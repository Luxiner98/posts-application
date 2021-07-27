import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { useGreetUserInConsole } from "../../context/greetUserInConsole";
import "./Pagination.scss";

export const Pagination = ({ hasNextPage, currentPage, hasPreviousPage, setCurrentPage, message }) => {
  const componentName = "Pagination component";
  const greetUser = useGreetUserInConsole();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`${greetUser} ${componentName}`);
    // eslint-disable-next-line no-console
    console.log(`${message} ${componentName}`);
  }, [greetUser, message]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="pagination">
      {hasPreviousPage && <div onClick={handlePreviousPage}>Previous</div>}
      <div>{currentPage}</div>
      {hasNextPage && <div onClick={handleNextPage}>Next</div>}
    </div>
  );
};

Pagination.propTypes = {
  hasNextPage: PropTypes.bool,
  hasPreviousPage: PropTypes.bool,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  message: PropTypes.string,
};
