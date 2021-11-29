import React from "react";
import "./link.scss";

export default function Link({ title, onClick }) {
  return (
    <p className="link" onClick={onClick}>
      {title}
    </p>
  );
}
