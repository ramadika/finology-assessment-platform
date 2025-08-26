import { Search } from "lucide-react";
import type { SearchInputProps } from "../types/search.types";

export default function Index({
  value,
  onChange,
  placeholder = "Type to search...",
  label = "Search",
}: SearchInputProps) {
  return (
    <div className="w-full">
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          id="search"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#284D8E] focus:border-transparent"
        />
      </div>
    </div>
  );
}
