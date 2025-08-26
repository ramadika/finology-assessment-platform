import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { SearchInputProps } from "@/types/search.types";

export default function Index({
  value,
  onChange,
  placeholder = "Type to search...",
  label = "Search",
}: SearchInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="search">{label}</Label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          id="search"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10 rounded-2xl"
        />
      </div>
    </div>
  );
}
