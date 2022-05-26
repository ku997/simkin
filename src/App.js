import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { LABWORKS_CONTENT, LECTURE_CONTENT } from "./constants";
import { ContentContainer } from "./modules/ContentContainer";
import { MainPage } from "./modules/MainPage";
import NotFoundPage from "./modules/NotFoundPage";

export const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<MainPage />} />
        <Route
          exact
          path={`/${LECTURE_CONTENT}/:id`}
          element={<ContentContainer contentType={LECTURE_CONTENT} />}
        />
        <Route
          exact
          path={`/${LABWORKS_CONTENT}/:id`}
          element={<ContentContainer contentType={LABWORKS_CONTENT} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
