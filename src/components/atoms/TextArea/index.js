import React from "react";
import "./textArea.scss";

export default function TextArea({ ...rest }) {
  return (
    <div>
      <textarea className="text-area" {...rest}></textarea>
    </div>
  );
}
