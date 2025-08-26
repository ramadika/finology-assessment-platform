import { Users } from "lucide-react";
import type { PageHeaderProps } from "@/types/user.types";

export default function Index({ title, subHeader }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-start gap-4">
        <Users className="h-10 w-10 text-[#284D8E]" />
        <h1 className="text-4xl font-bold text-[#284D8E]">{title}</h1>
      </div>
      <p className="text-lg text-gray-500">{subHeader}</p>
    </div>
  );
}
