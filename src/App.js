import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CustomLayout } from "./modules/CustomLayout";
// import SinglePost from "../SinglePost/index.js";
// import Users from "../Users/index.js";
// import Posts from "../Posts/index.js";
// import Comments from "../Comments/index.js";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CustomLayout />} />
        {/* <Route exact path="/posts/:id" component={SinglePost} />
        <Route path="/posts" component={Posts} />
        <Route exact path="/comments" component={Comments} /> */}
      </Routes>
    </Router>
  );
};
