import React from "react";

export default (props) => {
  return (
    <>
      <div>
        <span className="user">{props.author}:</span>
        <span className="text">{props.text}</span>
      </div>
    </>
  );
};
