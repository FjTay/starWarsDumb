import React from "react";
import { Link, useParams } from "react-router-dom";

export default function CrossIcon() {
  return (
    <Link to={`/`}>
      <div className="cross">
        <div className="cross-bar" />
        <div className="cross-bar" />
      </div>
    </Link>
  );
}