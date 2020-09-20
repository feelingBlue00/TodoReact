import React from "react";

export default (props) => (
  <div>
    <p>{props.text}</p>
    <p>{props.myFunc(10, 12)}</p>
  </div>
);

export const Message = () => (
  <div>
    <div>Hello, you!</div>
  </div>
);
