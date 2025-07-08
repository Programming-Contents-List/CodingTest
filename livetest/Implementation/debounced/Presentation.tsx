import { useEffect, useState } from "react";

// MessageList.tsx (파일 제공됨)
type Message = {
  id: string;
  text: string;
};

interface Props {
  messages: Message[];
}

export default function MessageList({ messages }: Props) {
  return (
    <ul>
      {messages.map((msg) => (
        <li key={msg.id}>{msg.text}</li>
      ))}
    </ul>
  );
}
