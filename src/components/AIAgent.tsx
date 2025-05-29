
import { Bot, MessageCircle, X, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Привет! Я AI помощник British Times. Могу ответить на вопросы о курсах английского языка и помочь записаться на бесплатный урок.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Симуляция ответа AI с задержкой
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("цена") || input.includes("стоимость") || input.includes("абонемент")) {
      return "У нас есть 3 абонемента: 3 месяца - 89,250 тенге, 6 месяцев - 156,000 тенге, 9 месяцев - 207,000 тенге. Все абонементы включают 6 часов в неделю, speaking club и интерактивы.";
    } else if (input.includes("пробный") || input.includes("бесплатн")) {
      return "Да, у нас есть бесплатный пробный урок! Хотите записаться? Просто оставьте свои контакты.";
    } else if (input.includes("ielts") || input.includes("айлтс")) {
      return "Мы гарантируем результат IELTS 7.5 баллов! Наша программа специально разработана для достижения высоких результатов.";
    } else if (input.includes("онлайн") || input.includes("оффлайн") || input.includes("формат")) {
      return "У нас есть как онлайн, так и оффлайн формат обучения. Вы можете выбрать наиболее удобный для вас способ изучения английского.";
    } else if (input.includes("speaking") || input.includes("разговор")) {
      return "У нас есть Speaking Club по выходным! Это отличная возможность практиковать разговорный английский в неформальной обстановке.";
    } else {
      return "Спасибо за ваш вопрос! Наши консультанты свяжутся с вами для подробной информации. А пока предлагаю записаться на бесплатный пробный урок.";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="w-80 mb-4 bg-white shadow-2xl border-2 border-purple-200 animate-scale-in">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bot className="mr-2" size={20} />
                <CardTitle className="text-lg">AI Помощник</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X size={16} />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {/* Chat Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Chat Input */}
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Задайте ваш вопрос..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-purple-500 hover:bg-purple-600"
                >
                  <Send size={16} />
                </Button>
              </div>
              
              {/* Quick Action Buttons */}
              <div className="mt-3 space-y-2">
                <Button 
                  onClick={() => setInputValue("Хочу записаться на бесплатный урок")}
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                  size="sm"
                >
                  Записаться на урок
                </Button>
                <Button 
                  onClick={() => setInputValue("Расскажите о ценах на курсы")}
                  variant="outline" 
                  className="w-full border-purple-300 text-purple-600 hover:bg-purple-50"
                  size="sm"
                >
                  Узнать цены
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <div className="relative">
            <Bot size={24} className="text-white" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        )}
      </Button>
    </div>
  );
};

export default AIAgent;
