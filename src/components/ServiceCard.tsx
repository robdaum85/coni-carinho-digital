
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="icon-circle">
        <Icon size={24} className="text-coni-pink" />
      </div>
      <h3 className="text-xl font-playfair font-medium mb-3 text-coni-text-primary">{title}</h3>
      <p className="text-coni-text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
