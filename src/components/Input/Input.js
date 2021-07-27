import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { useGreetUserInConsole } from "../../context/greetUserInConsole";
import "./Input.scss";

export const Input = ({ onChange, message }) => {
  const componentName = "Input component";
  const greetUser = useGreetUserInConsole();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`${greetUser} ${componentName}`);
    // eslint-disable-next-line no-console
    console.log(`${message} ${componentName}`);
  }, [greetUser, message]);

  return (
    <div className="input">
      <input onChange={onChange} placeholder="Search posts" />
    </div>
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  message: PropTypes.string,
};
