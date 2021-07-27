import PropTypes from "prop-types";
import React, { createContext, useContext } from "react";

const GreetUserInConsoleContext = createContext({});

export const GreetUserInConsoleContextProvider = ({ children }) => {
  const greetUser = "Hello from";

  return <GreetUserInConsoleContext.Provider value={greetUser}>{children}</GreetUserInConsoleContext.Provider>;
};

export const useGreetUserInConsole = () => {
  const context = useContext(GreetUserInConsoleContext);
  return context;
};

GreetUserInConsoleContextProvider.propTypes = {
  children: PropTypes.element,
};
