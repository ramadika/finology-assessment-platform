import type { LinkProps } from "@/types/user.types";

export default function Index({ icon, value, name }: LinkProps) {
  return (
    <div className="flex items-center text-gray-600">
      {icon}
      <a
        href={value}
        className="text-sm hover:text-[#284D8E] transition-colors truncate"
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    </div>
  );
}
