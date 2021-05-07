import React, { useState, useEffect } from "react";
import Message from "./Message.jsx";

const MessageField = (props) => {
  const inititalMessages = [
    {
      author: "Я",
      text: "Привет",
    },
    {
      author: "Я",
      text: "Как дела?",
    },
    {
      author: "Ваш собеседник",
      text: "Нормально",
    },
  ];

  const [messages, setMessages] = useState(inititalMessages);

  const handleAddMessage = () => {
    setMessages([
      ...messages,
      {
        text: "Сообщение отправлено",
      },
    ]);

    useEffect();
  };

  return (
    <div>
      {messages.map((message, index) => (
        <Message key={index} author={message.author} text={message.text} />
      ))}
      <button onClick={handleAddMessage}>Отправить сообщение</button>
    </div>
  );
};

export default MessageField;
