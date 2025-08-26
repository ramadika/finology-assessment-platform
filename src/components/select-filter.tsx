import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import type { FilterProps } from "@/types/filter.types";

export default function Index({
  value,
  options,
  label,
  placeholder,
  icon,
  onChange,
}: FilterProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 pointer-events-none">
          {icon}
        </div>
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="pl-10 cursor-pointer w-full rounded-2xl">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={placeholder}>{placeholder}</SelectItem>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
