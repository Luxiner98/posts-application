module.exports = {
  parser: "babel-eslint",
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["."],
      },
    },
  },
  env: {
    node: true,
    browser: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended", "plugin:import/errors", "plugin:import/warnings"],
  rules: {
    "import/no-default-export": "error",
    "no-console": process.env.NODE_ENV === "production" || process.env.CI === true || process.env.CI === "true" ? "error" : "warn",
    "no-unused-vars": process.env.NODE_ENV === "production" || process.env.CI === true || process.env.CI === "true" ? "error" : "warn",
    "react/prop-types": "warn",
  },
};
