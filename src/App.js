import React from "react";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { LABWORKS_CONTENT, LECTURE_CONTENT } from "./constants";
import { ContentContainer } from "./modules/ContentContainer";
import NotFoundPage from "./modules/NotFoundPage";

export const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Navigate to="/lecture/0" />} />
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
