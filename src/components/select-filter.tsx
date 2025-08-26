import type { FilterProps } from "../types/filter.types";

export default function Index({
  value,
  options,
  label,
  placeholder,
  icon,
  id,
  onChange,
}: FilterProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {icon}
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#284D8E] focus:border-transparent appearance-none bg-white"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
