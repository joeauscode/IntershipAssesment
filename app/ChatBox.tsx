"use client";
import React, { useState, useEffect } from 'react';
import { BsChatDotsFill } from "react-icons/bs";



export default function ChatBox() {
  const [displayChat, setDisplayChat] = useState(false);
  // const [messages, setMessages] = useState<Message[]>([]);
  const [messages, setMessages] = useState([
  { sender: "admin", text: "Hi 👋, how can I help?" },
]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://68b78d3373b3ec66cec4e5a4.mockapi.io/message/messages")
      .then((res) => res.json())
      .then((data) => setMessages([{sender: "admin", text: "Hi 👋, how can I help?"}, ...data]))
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);


  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = { sender: "you", text: input };

  
    await fetch("https://68b78d3373b3ec66cec4e5a4.mockapi.io/message/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMsg),
    });

   
    setMessages([...messages, newMsg]);
    setInput("");
  };


  
  const openchat = () => {
    setDisplayChat(prev => !prev)
  }


  return (
    <>
      {/* Floating Button */}
   
      <div className="chatbox fixed bottom-10 right-4 w-[300px] p-1.5"  onClick={openchat}>
       <span className='flex justify-end text-6xl text-[#22C55E] cursor-pointer'><BsChatDotsFill /></span>
      </div>

{displayChat && (
        <div className="chatbox fixed bottom-5 right-0 w-[300px] p-1.5">
          <div className="bg-white p-3 flex flex-col rounded shadow">
            <h1 className="text-xl mb-2">Chat</h1>

            {/* Messages */}
            <div className="flex flex-col gap-2 mb-3 max-h-[200px] overflow-y-auto">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.sender === "you"
                      ? "bg-[#04AA6D] text-white ml-auto"
                      : "bg-gray-200 text-black mr-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={sendMessage} className="flex flex-col">
              <label className="text-md mb-1">
                <b>Message</b>
              </label>
              <textarea
                placeholder="Type message.."
                name="msg"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
                className="bg-[#f1f1f1] resize-none h-[40px] border-0 w-full p-1 mb-[10px]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#04AA6D] text-white p-2 border-0 cursor-pointer w-full mb-3 opacity-70"
              >
                Send
              </button>
              <button
                onClick={() => setDisplayChat(false)}
                type="button"
                className="bg-[red] text-white p-2 border-0 cursor-pointer w-full opacity-70"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

    </>
  );
}
