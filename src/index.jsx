import React, { useState } from "react";
import ReactDOM from "react-dom";

const initialMessages = ["Привет", "Как дела?"];

const App = () => {
  const [messages, setMessages] = useState(initialMessages);

  const handleAddMessage = () => {
    setMessages([...messages, prompt("Ваше сообщение")]);
  };

  return (
    <div>
      <h1>Hot reload is working!</h1>
      {messages.map((message) => (
        <div>{message}</div>
      ))}
      <button onClick={handleAddMessage}>Напишите что-нибудь</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
