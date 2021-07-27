import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { useGreetUserInConsole } from "../../context/greetUserInConsole";
import "./Header.scss";

export const Header = ({ pageTitle, message }) => {
  const greetUser = useGreetUserInConsole();
  const componentName = "Header component";

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`${greetUser} ${componentName}`);
    // eslint-disable-next-line no-console
    console.log(`${message} ${componentName}`);
  }, [greetUser, message]);

  return <h1 className="header">{pageTitle}</h1>;
};

Header.propTypes = {
  pageTitle: PropTypes.string,
  message: PropTypes.string,
};
