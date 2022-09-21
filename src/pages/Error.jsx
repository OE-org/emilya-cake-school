import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h2 className="error__title">404</h2>
      <p className="error__info">Səhifə tapılmadı</p>
      <button className="error__back">
        <Link to="/">Ana səhifəyə get</Link>
      </button>
    </div>
  );
};
//.cake-baku__info-btn

export default Error;
