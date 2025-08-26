import type { InfoProps } from "@/types/user.types";

export default function Index({ icon, value }: InfoProps) {
  return (
    <div className="flex items-center text-gray-600">
      {icon}
      <span className="text-sm">{value}</span>
    </div>
  );
}
