import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "300px" }}>
      <h1>Oops! This page is not found</h1>
      <button onClick={() => navigate("/Home")}>Return to HomePage</button>
    </div>
  );
};

export default PageNotFound;
