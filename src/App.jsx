import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Auth from "./Components/Auth/Auth";
import Home from "./Components/Home";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Auth />} />
          <Route path="api" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
