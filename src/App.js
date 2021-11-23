import React from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { LECTURE_CONTENT } from "./constants";
import { ContentContainer } from "./modules/ContentContainer";
import NotFoundPage from "./modules/NotFoundPage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/chapter/1" />} />
        <Route exact path="/chapter/:id" element={<ContentContainer contentType={LECTURE_CONTENT} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
