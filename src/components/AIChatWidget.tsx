
import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Dr. Kaleab's virtual assistant. I can tell you about Dr. Kaleab Nigusse's background, education, experience, and expertise. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Dr. Kaleab's background information
  const drKaleabInfo = {
    education: "Dr. Kaleab Nigusse is a Medical Doctor (MD) with specialized training in Health Informatics, combining clinical expertise with technology innovation.",
    experience: "He has extensive experience as both a practicing physician and a Senior Graphic Designer, uniquely bridging healthcare, technology, and creative design fields.",
    specialties: "His areas of expertise include clinical medicine, health informatics, medical technology, graphic design, and healthcare communication.",
    location: "Based in Dire Dawa, Ethiopia (Rue de France, Kezira), Dr. Kaleab serves both local and international clients.",
    vision: "Dr. Kaleab is passionate about modernizing healthcare through technology and improving medical communication through thoughtful design.",
    contact: "You can reach Dr. Kaleab at kalsonofzion@gmail.com, +251-91-023-7506, or visit his website at https://drkal.netlify.app/",
    linkedin: "Connect with him professionally on LinkedIn at linkedin.com/in/kaleab-nigusse-md-885084111",
    skills: "He excels in medical practice, health informatics systems, graphic design, web development, and healthcare technology integration.",
    mission: "His mission is to bridge the gap between traditional healthcare and modern technology, making medical services more accessible and effective."
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponseForQuery = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('education') || lowerQuery.includes('study') || lowerQuery.includes('degree')) {
      return drKaleabInfo.education;
    } else if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('career')) {
      return drKaleabInfo.experience;
    } else if (lowerQuery.includes('specialty') || lowerQuery.includes('expertise') || lowerQuery.includes('skill')) {
      return drKaleabInfo.specialties + " " + drKaleabInfo.skills;
    } else if (lowerQuery.includes('contact') || lowerQuery.includes('reach') || lowerQuery.includes('phone') || lowerQuery.includes('email')) {
      return drKaleabInfo.contact;
    } else if (lowerQuery.includes('location') || lowerQuery.includes('where') || lowerQuery.includes('address')) {
      return drKaleabInfo.location;
    } else if (lowerQuery.includes('linkedin') || lowerQuery.includes('social') || lowerQuery.includes('connect')) {
      return drKaleabInfo.linkedin;
    } else if (lowerQuery.includes('mission') || lowerQuery.includes('goal') || lowerQuery.includes('purpose')) {
      return drKaleabInfo.mission;
    } else if (lowerQuery.includes('vision') || lowerQuery.includes('passion') || lowerQuery.includes('about')) {
      return drKaleabInfo.vision;
    } else {
      return `Dr. Kaleab Nigusse is a Medical Doctor and Health Informatics Specialist with expertise in graphic design. ${drKaleabInfo.vision} Feel free to ask about his education, experience, specialties, contact information, or mission!`;
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const userQuery = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Generate response based on user query
    setTimeout(() => {
      const response = getResponseForQuery(userQuery);
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#16425B] hover:bg-[#3A7CA5] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 border-2 border-yellow-400"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-white rounded-lg shadow-2xl z-50 flex flex-col border-2 border-yellow-400 animate-fade-in">
          {/* Header */}
          <div className="bg-[#16425B] text-white p-4 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#81C3D7] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9M19 21H5V3H14V9H19Z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-sm text-white/80">About Dr. Kaleab Nigusse</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div className={`flex gap-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isUser ? 'bg-[#3A7CA5]' : 'bg-[#81C3D7]'
                  }`}>
                    {message.isUser ? (
                      <User size={16} className="text-white" />
                    ) : (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9M19 21H5V3H14V9H19Z"/>
                      </svg>
                    )}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.isUser 
                      ? 'bg-[#3A7CA5] text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="flex gap-2 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-[#81C3D7] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9M19 21H5V3H14V9H19Z"/>
                    </svg>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Dr. Kaleab..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A7CA5] focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-[#16425B] text-white p-2 rounded-lg hover:bg-[#3A7CA5] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatWidget;
