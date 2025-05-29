
import { Bot, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AIAgent = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <CardContent className="p-4">
            <p className="text-gray-700 mb-4">
              Привет! Я AI помощник British Times. Могу ответить на вопросы о курсах английского языка и помочь записаться на бесплатный урок.
            </p>
            <div className="space-y-2">
              <Button 
                className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                size="sm"
              >
                Записаться на урок
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-purple-300 text-purple-600 hover:bg-purple-50"
                size="sm"
              >
                Узнать цены
              </Button>
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
