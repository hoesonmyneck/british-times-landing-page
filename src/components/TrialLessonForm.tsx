
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const TrialLessonForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredTime: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Имитация отправки формы
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для записи на пробный урок.",
    });

    // Сброс формы
    setFormData({
      name: "",
      phone: "",
      email: "",
      preferredTime: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center text-purple-600">
          Записаться на бесплатный урок
        </DialogTitle>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Имя</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (___) ___-__-__"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="preferredTime">Предпочтительное время</Label>
          <Input
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            placeholder="Например: утром, вечером, выходные"
          />
        </div>
        
        <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600">
          Записаться на урок
        </Button>
      </form>
    </DialogContent>
  );
};

export default TrialLessonForm;
