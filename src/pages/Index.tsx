import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Check, Globe, Target, Users, Calendar, Play, Star, Clock, MessageCircle, BookOpen, Trophy, Coffee } from "lucide-react";
import AIAgent from "@/components/AIAgent";
import TrialLessonForm from "@/components/TrialLessonForm";
import SubscriptionForm from "@/components/SubscriptionForm";

const Index = () => {
  const [trialDialogOpen, setTrialDialogOpen] = useState(false);
  const [subscriptionDialogOpen, setSubscriptionDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({
    duration: "",
    price: "",
    color: ""
  });

  const subscriptionPlans = [
    {
      duration: "3 МЕСЯЦА",
      price: "89250 ₸",
      color: "#eab308", // yellow-500
      originalPrice: "35000 ₸×3=105000"
    },
    {
      duration: "6 МЕСЯЦЕВ",
      price: "156000 ₸",
      color: "#a855f7", // purple-500
      originalPrice: "35000 ₸×6=210000"
    },
    {
      duration: "9 МЕСЯЦЕВ",
      price: "207000 ₸",
      color: "#3b82f6", // blue-500
      originalPrice: "35000 ₸×9=315000"
    }
  ];

  const handlePlanSelect = (plan: typeof subscriptionPlans[0]) => {
    setSelectedPlan({
      duration: plan.duration,
      price: plan.price,
      color: plan.color
    });
    setSubscriptionDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-purple-600 to-blue-600 relative overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-white mb-10 lg:mb-0">
            <div className="flex items-center mb-4">
              <MessageCircle className="mr-3 text-white" size={40} />
              <MessageCircle className="mr-3 text-white opacity-70" size={30} />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
              British Times
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Изучай английский с гарантией результата
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Badge className="bg-yellow-400 text-black font-semibold px-4 py-2 text-lg">
                IELTS 7.5 баллов
              </Badge>
              <Badge className="bg-white text-purple-600 font-semibold px-4 py-2 text-lg">
                Бесплатный урок
              </Badge>
            </div>
            <Dialog open={trialDialogOpen} onOpenChange={setTrialDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-xl px-8 py-4">
                  Записаться на пробный урок
                </Button>
              </DialogTrigger>
              <TrialLessonForm />
            </Dialog>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-60 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-64 h-44 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <BookOpen size={80} className="text-white" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-12 bg-pink-400 rounded-xl flex items-center justify-center shadow-lg">
                <Play size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Почему выбирают British Times?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/20 backdrop-blur-sm border-white/30 hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <Globe className="mx-auto mb-4 text-white" size={48} />
                <CardTitle className="text-white">Онлайн и Оффлайн</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-center">
                  Выбирайте удобный формат обучения или комбинируйте их
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/20 backdrop-blur-sm border-white/30 hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <Target className="mx-auto mb-4 text-yellow-300" size={48} />
                <CardTitle className="text-white">Гарантия IELTS 7.5</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-center">
                  Гарантируем достижение 7.5 баллов на экзамене IELTS
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/20 backdrop-blur-sm border-white/30 hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <Coffee className="mx-auto mb-4 text-orange-300" size={48} />
                <CardTitle className="text-white">Speaking Club</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-center">
                  Практикуйте разговорный английский каждые выходные
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/20 backdrop-blur-sm border-white/30 hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <Users className="mx-auto mb-4 text-green-300" size={48} />
                <CardTitle className="text-white">Индивидуальный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-center">
                  Персональная программа для каждого студента
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/20 backdrop-blur-sm border-white/30 hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <Star className="mx-auto mb-4 text-yellow-300" size={48} />
                <CardTitle className="text-white">Бесплатный урок</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-center">
                  Попробуйте наши методы обучения абсолютно бесплатно
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/20 backdrop-blur-sm border-white/30 hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <Clock className="mx-auto mb-4 text-blue-300" size={48} />
                <CardTitle className="text-white">6 часов в неделю</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-center">
                  Интенсивное изучение языка с максимальным результатом
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Абонементы
          </h2>
          <p className="text-xl text-center text-white/80 mb-16">
            Выберите подходящий план обучения
          </p>
          
          <Dialog open={subscriptionDialogOpen} onOpenChange={setSubscriptionDialogOpen}>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {subscriptionPlans.map((plan, index) => (
                <Card key={index} className={`bg-white/15 backdrop-blur-sm border-white/30 hover:scale-105 transition-all duration-300 relative overflow-hidden ${index === 1 ? 'border-2 border-purple-400' : ''}`}>
                  <div className="absolute top-0 left-0 w-full h-2" style={{ background: `linear-gradient(to right, ${plan.color}, ${plan.color}90)` }}></div>
                  {index === 1 && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white font-bold px-4 py-1">
                      ПОПУЛЯРНЫЙ
                    </Badge>
                  )}
                  <CardHeader className={`text-center pb-4 ${index === 1 ? 'pt-8' : ''}`}>
                    <Badge className="font-bold text-lg px-4 py-2 mx-auto mb-4" style={{ backgroundColor: plan.color, color: 'white' }}>
                      {plan.duration}
                    </Badge>
                    <div className="text-white">
                      <div className="text-3xl font-bold line-through opacity-60">{plan.originalPrice}</div>
                      <div className="text-5xl font-bold" style={{ color: plan.color }}>{plan.price}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="text-white space-y-3">
                    {[
                      "6 часов в неделю",
                      "Каждую субботу интерактивы",
                      "Дискуссии",
                      "Игры",
                      "Праздничные вечеринки",
                      "Просмотр фильмов",
                      "Speaking Club"
                    ].map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="mr-3 text-green-400" size={20} />
                        <span>{feature}</span>
                      </div>
                    ))}
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full mt-6 font-semibold" 
                        style={{ backgroundColor: plan.color, color: 'white' }}
                        onClick={() => handlePlanSelect(plan)}
                      >
                        Выбрать план
                      </Button>
                    </DialogTrigger>
                  </CardContent>
                </Card>
              ))}
            </div>
            <SubscriptionForm plan={selectedPlan} />
          </Dialog>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы начать изучение английского?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Запишитесь на бесплатный пробный урок и убедитесь в эффективности наших методов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={trialDialogOpen} onOpenChange={setTrialDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 text-xl px-8 py-4">
                  Бесплатный пробный урок
                </Button>
              </DialogTrigger>
              <TrialLessonForm />
            </Dialog>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-xl px-8 py-4">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <MessageCircle className="mr-3 text-white" size={40} />
            <h3 className="text-3xl font-bold text-white">British Times</h3>
          </div>
          <p className="text-white/60 mb-4">
            Образовательный центр английского языка
          </p>
          <p className="text-white/40 text-sm">
            © 2024 British Times. Все права защищены.
          </p>
        </div>
      </footer>

      {/* AI Agent Component */}
      <AIAgent />
    </div>
  );
};

export default Index;
