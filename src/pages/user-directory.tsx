import { MapPin, Building2, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUsers } from "@/hooks/useUsers";
import InputSearch from "@/components/input-search";
import SelectFilter from "@/components/select-filter";
import CardProfile from "@/components/card-item";
import LoadingSpinner from "@/components/loading-spinner";
import ErrorMessage from "@/components/error-message";
import PageHeader from "@/components/page-header";

export default function Index() {
  const {
    loading,
    error,
    users,
    filters,
    cities,
    companies,
    filteredUsers,
    hasActiveFilters,
    updateFilter,
    clearAllFilters,
  } = useUsers();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="px-16 py-20 flex flex-col gap-8 max-lg:px-8 max-md:py-16">
        {/* Header */}
        <PageHeader
          title="User Directory"
          subHeader="Browse and search through our user database"
        />

        <div className="bg-white rounded-xl shadow-md p-10 flex flex-col gap-6 max-md:p-6">
          {/* Filters Section */}
          <div className="flex justify-between items-center gap-2 max-lg:flex-col max-md:justify-center max-lg:gap-6">
            <div className="flex items-end gap-6 w-6/12 max-lg:w-full max-lg:order-2 max-md:flex-col">
              {/* City Filter */}
              <div className="w-full">
                <SelectFilter
                  value={filters.selectedCity}
                  onChange={(value) => updateFilter("selectedCity", value)}
                  options={cities}
                  label="Filter by city"
                  placeholder="All Cities"
                  icon={<MapPin className="h-4 w-4 text-muted-foreground" />}
                />
              </div>

              {/* Company Filter */}
              <div className="w-full">
                <SelectFilter
                  value={filters.selectedCompany}
                  onChange={(value) => updateFilter("selectedCompany", value)}
                  options={companies}
                  label="Filter by company"
                  placeholder="All Companies"
                  icon={<Building2 className="h-4 w-4 text-muted-foreground" />}
                />
              </div>

              {/* Clear Filters Button */}
              <div className="w-full">
                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    onClick={clearAllFilters}
                    className="flex items-center px-4 py-2 text-sm font-medium text-[#284D8E] bg-blue-50 border rounded-2xl border-blue-200 hover:opacity-60 transition duration-300 cursor-pointer"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear All Filters
                  </Button>
                )}
              </div>
            </div>

            {/* Search Input */}
            <div className="w-4/12 max-lg:w-full max-lg:order-1">
              <InputSearch
                value={filters.searchTerm}
                onChange={(value) => updateFilter("searchTerm", value)}
                placeholder="Type to search users..."
                label="Search by name"
              />
            </div>
          </div>

          {/* Results Summary */}
          <div>
            <p className="text-gray-600">
              Showing {filteredUsers.length} of {users.length} users
              {hasActiveFilters && (
                <span className="text-[#284D8E] font-medium"> (filtered)</span>
              )}
            </p>
          </div>

          {/* Users Grid */}
          {filteredUsers.length === 0 ? (
            <div className="py-12 flex flex-col justify-center items-center gap-4">
              <Users className="h-16 w-16 text-gray-300" />
              <h3 className="text-xl font-medium text-gray-900">
                No users found
              </h3>
              <p className="text-gray-600">
                {hasActiveFilters
                  ? "Try adjusting your filters to see more results."
                  : "No users available at the moment."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUsers.map((user) => (
                <CardProfile
                  key={user.id}
                  name={user.name}
                  id={user.id}
                  email={user.email}
                  city={user.address.city}
                  company={user.company.name}
                  phone={user.phone}
                  website={user.website}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
