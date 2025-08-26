import { MapPin, Building2, Phone, Globe, Users } from "lucide-react";
import InfoItem from "@/components/info-item";
import LinkItem from "@/components/link-item";
import type { UserCardProps } from "@/types/user.types";

export default function Index({
  name,
  id,
  email,
  city,
  company,
  phone,
  website,
}: UserCardProps) {
  return (
    <div className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-200 max-md:p-6">
      <div className="flex items-center mb-4">
        <div className="bg-indigo-100 rounded-full p-3 mr-4">
          <Users className="h-6 w-6 text-[#284D8E]" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 max-md:text-lg">
            {name}
          </h3>
          <p className="text-sm text-gray-500">ID: {id}</p>
        </div>
      </div>

      <div className="space-y-3">
        <LinkItem
          icon={<Globe className="h-4 w-4 mr-3" />}
          value={`mailto:${email}`}
          name={email}
        />
        <InfoItem icon={<MapPin className="h-4 w-4 mr-3" />} value={city} />
        <InfoItem
          icon={<Building2 className="h-4 w-4 mr-3" />}
          value={company}
        />
        <LinkItem
          icon={<Phone className="h-4 w-4 mr-3" />}
          value={`tel:${phone}`}
          name={phone}
        />
        <LinkItem
          icon={<Globe className="h-4 w-4 mr-3 flex-shrink-0" />}
          value={`https://${website}`}
          name={website}
        />
      </div>
    </div>
  );
}
