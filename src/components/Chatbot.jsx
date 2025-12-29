import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, Send, Sparkles } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState('');
  
  // 1. Reset initial state: No more localStorage.getItem
  const [messages, setMessages] = useState([
    { 
      text: "Hi! Welcome to Sculptor-Tech. I'm your AI assistant. How can I help you?", 
      sender: "bot", 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }
  ]);
  
  const messagesEndRef = useRef(null);

  // 2. Simplified useEffect: No more localStorage.setItem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (textOverride) => {
    const messageText = textOverride || input;
    if (!messageText.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { text: messageText, sender: "user", time }]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, { 
        text: data.reply, 
        sender: "bot", 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: "I'm having trouble connecting. Is the server running?", 
        sender: "bot", 
        time 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)} className="chatbot-btn">
          <MessageCircle size={28} />
        </button>
      ) : (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-avatar"><Sparkles size={20} color="#00aeef" /></div>
              <div className="chatbot-info">
                <h3>Sculptor AI</h3>
                <p>Online now</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="chatbot-close"><X size={20} /></button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                <div className="message-content">
                  {msg.text}
                  <span className="message-time" style={{ fontSize: '10px', display: 'block', opacity: 0.5 }}>{msg.time}</span>
                </div>
              </div>
            ))}
            {isTyping && (
                <div className="message bot-message">
                    <div className="message-content">AI is thinking...</div>
                </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="chatbot-input"
            />
            <button onClick={() => handleSend()} className="chatbot-send-btn"><Send size={18} /></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;