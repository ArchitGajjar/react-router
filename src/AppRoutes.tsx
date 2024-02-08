import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";
import Bye from "./Bye";
import { Routes, Route } from "react-router-dom";

const AppRoutes = (): any => {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/bye" element={<Bye />} />
    </Routes>
  )
}

export default AppRoutes;