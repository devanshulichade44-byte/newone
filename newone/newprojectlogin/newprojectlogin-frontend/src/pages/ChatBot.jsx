import React, { useState, useEffect, useRef } from "react";
import "./chatbot.css";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi 👋 I'm StyleGlanz AI — Your Fashion & Skincare Expert! Ask me anything stylish ✨" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages(prev => [...prev, userMessage]);

    try {
      const res = await fetch("http://localhost:5000/api/fashion-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input })
      });

      const data = await res.json();
      setMessages(prev => [...prev, { from: "ai", text: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { from: "ai", text: "⚠️ AI not responding, try again." }]);
    }

    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <button className="chatbot-btn" onClick={toggleChat}>💬</button>

      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            StyleGlanz AI
            <button onClick={toggleChat} className="close-btn">✖</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask fashion & skincare..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
