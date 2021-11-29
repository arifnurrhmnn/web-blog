import React from "react";
import "./upload.scss";

export default function Upload({ img, ...rest }) {
  return (
    <div className="upload">
      {img && <img className="preview" src={img} alt="preview" />}
      <input type="file" {...rest} />
    </div>
  );
}
