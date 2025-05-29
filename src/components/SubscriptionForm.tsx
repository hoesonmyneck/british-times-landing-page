
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface SubscriptionFormProps {
  plan: {
    duration: string;
    price: string;
    color: string;
  };
}

const SubscriptionForm = ({ plan }: SubscriptionFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    paymentMethod: "card"
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Заявка отправлена!",
      description: `Мы свяжемся с вами для оформления абонемента на ${plan.duration}.`,
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      paymentMethod: "card"
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center" style={{ color: plan.color }}>
          Покупка абонемента
        </DialogTitle>
        <div className="text-center">
          <p className="text-lg font-semibold">{plan.duration}</p>
          <p className="text-2xl font-bold" style={{ color: plan.color }}>{plan.price}</p>
        </div>
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
          <Label htmlFor="paymentMethod">Способ оплаты</Label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="card">Банковская карта</option>
            <option value="cash">Наличные</option>
            <option value="transfer">Банковский перевод</option>
          </select>
        </div>
        
        <Button type="submit" className="w-full" style={{ backgroundColor: plan.color }}>
          Оформить абонемент
        </Button>
      </form>
    </DialogContent>
  );
};

export default SubscriptionForm;
