
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-3 mb-4 bg-coni-light-pink text-coni-pink rounded-full">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-medium mb-3 text-center">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
