
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center px-6 py-8 bg-white/70 rounded-2xl shadow-md border border-primary/20 hover:shadow-xl transition duration-300 backdrop-blur-sm">
      <div className="p-4 mb-4 bg-accent text-primary rounded-full shadow-sm">
        <Icon size={32} strokeWidth={2} />
      </div>
      <h3 className="text-xl font-dm-serif mb-3 text-center text-foreground">{title}</h3>
      <p className="text-center text-text-secondary text-base leading-relaxed font-light">{description}</p>
    </div>
  );
};

export default ServiceCard;
