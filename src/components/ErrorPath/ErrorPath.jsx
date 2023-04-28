import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Navigate home
const ErrorPath = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);
  return <div></div>;
};

export default ErrorPath;
