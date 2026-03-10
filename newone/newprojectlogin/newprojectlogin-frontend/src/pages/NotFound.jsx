import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div class="gl-404-container">
  <div class="glass-box">
    <h1>Sorry, we couldn't find that page.</h1>
    <p>The page you are looking for may have been moved or deleted.</p>
    <a class="gl-btn" href="/">Go to Homepage</a>
  </div>
</div>

  );
};

export default NotFound;
