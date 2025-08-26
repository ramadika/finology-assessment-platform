import { useState, useEffect, useMemo } from "react";
import type { User } from "@/types/user.types";
import type { FilterState } from "@/types/filter.types";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: "",
    selectedCity: "",
    selectedCompany: "",
  });

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData: User[] = await response.json();
        setUsers(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Get unique cities and companies for filter dropdowns
  const { cities, companies } = useMemo(() => {
    const uniqueCities = [
      ...new Set(users.map((user) => user.address.city)),
    ].sort();
    const uniqueCompanies = [
      ...new Set(users.map((user) => user.company.name)),
    ].sort();

    return {
      cities: uniqueCities,
      companies: uniqueCompanies,
    };
  }, [users]);

  // Filter users based on current filters
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch = user.name
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase());
      const matchesCity =
        !filters.selectedCity || user.address.city === filters.selectedCity;
      const matchesCompany =
        !filters.selectedCompany ||
        user.company.name === filters.selectedCompany;

      return matchesSearch && matchesCity && matchesCompany;
    });
  }, [users, filters]);

  // Update filter state
  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      searchTerm: "",
      selectedCity: "",
      selectedCompany: "",
    });
  };

  // Check if any filters are active
  const hasActiveFilters =
    filters.searchTerm || filters.selectedCity || filters.selectedCompany;

  return {
    loading,
    error,
    filters,
    users,
    cities,
    companies,
    filteredUsers,
    hasActiveFilters,
    updateFilter,
    clearAllFilters,
  };
}
