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

  useEffect(() => {
    if (
      messages[messages.length - 1].author !== "Робот" &&
      messages.length > 0
    ) {
      setTimeout(
        () =>
          setMessages([
            ...messages,
            {
              author: "Робот",
              text: "Не приставай ко мне, я робот!",
            },
          ]),
        1000
      );
    }
  }, [messages]);

  const inputText = "";
  const [text, setInputText] = useState(inputText);

  const handleInput = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault;
    setMessages([
      ...messages,
      {
        author: "Я",
        text: text,
      },
    ]);
    setInputText("");
  };

  return (
    <div>
      {messages.map((message, index) => (
        <Message key={index} author={message.author} text={message.text} />
      ))}
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleInput} />
        <button type="submit">Отправить сообщение</button>
      </form>
    </div>
  );
};

export default MessageField;
