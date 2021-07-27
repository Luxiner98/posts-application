import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { PostSingle } from "./pages/PostSingle";
import { Posts } from "./pages/Posts";

export const App = () => {
  const greetUserAgain = "Hello again from";
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/posts"]}>
            <Posts message={greetUserAgain} />
          </Route>
          <Route exact path={`/posts/:id`}>
            <PostSingle message={greetUserAgain} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
