import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h2 className="error__title">404</h2>
      <p className="error__info">Səhifə tapılmadı</p>
      <div className="cake-baku__info-btn">
        <Link className="error__back" to="/">
          Ana səhifəyə get
        </Link>
      </div>
    </div>
  );
};
//.cake-baku__info-btn

export default Error;
