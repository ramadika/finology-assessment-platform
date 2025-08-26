export interface FilterState {
  searchTerm: string;
  selectedCity: string;
  selectedCompany: string;
}

export interface FilterProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  label: string;
  placeholder: string;
  icon: React.ReactNode;
}
