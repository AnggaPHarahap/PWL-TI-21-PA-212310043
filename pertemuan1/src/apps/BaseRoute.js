import React from "react";
import { Routes, Route } from "react-router-dom";
import ChapterOne from "../Module/ChapterOne";

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<ChapterOne />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="message" element={<ChapterOne />} />
      </Routes>
    </React.Suspense>
  );
}

const Home = () => {
  return <h3>Ini home looo…</h3>;
};
const About = () => {
  return <h3>Ini about looo…</h3>;
};

