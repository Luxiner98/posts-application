import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { useGreetUserInConsole } from "../../context/greetUserInConsole";
import "./Loader.scss";

export const Loader = ({ message }) => {
  const componentName = "Loader component";
  const greetUser = useGreetUserInConsole();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`${greetUser} ${componentName}`);

    // eslint-disable-next-line no-console
    console.log(`${message} ${componentName}`);
  }, [greetUser, message]);

  return <div className="loader"></div>;
};

Loader.propTypes = {
  message: PropTypes.string,
};
