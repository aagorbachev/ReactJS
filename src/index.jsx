import React from "react";
import ReactDOM from "react-dom";

let messages = ["Привет", "Как дела?"];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
  return props.messages.map((message) => <MessageComponent text={message} />);
};

const SendMessage = () => {};

ReactDOM.render(
  <MessageField messages={messages} />,
  document.getElementById("root")
);
