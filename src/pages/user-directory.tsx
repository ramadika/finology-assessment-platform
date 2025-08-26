import { useEffect } from "react";
import {
  MapPin,
  Building2,
  Phone,
  Globe,
  Users,
  AlertCircle,
  Loader2,
  X,
} from "lucide-react";
import { useUsers } from "../hooks/useUsers";
import InputSearch from "../components/input-search";
import SelectFilter from "../components/select-filter";
import AOS from "aos";

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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-[#284D8E] mx-auto mb-4" />
          <p className="text-lg text-gray-600">Loading users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
          <div className="text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Error Loading Users
            </h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#284D8E] text-white px-4 py-2 rounded-md hover:opacity-60 transition duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="px-16 py-20 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-start gap-4">
            <Users className="h-10 w-10 text-[#284D8E]" />
            <h1 className="text-4xl font-bold text-[#284D8E]">
              User Directory
            </h1>
          </div>
          <p className="text-lg text-gray-500">
            Browse and search through our user database
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-6">
          {/* Filters Section */}
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-end gap-6 w-6/12">
              {/* City Filter */}
              <SelectFilter
                id="city"
                value={filters.selectedCity}
                onChange={(value) => updateFilter("selectedCity", value)}
                options={cities}
                label="Filter by city"
                placeholder="All Cities"
                icon={
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                }
              />

              {/* Company Filter */}
              <SelectFilter
                id="company"
                value={filters.selectedCompany}
                onChange={(value) => updateFilter("selectedCompany", value)}
                options={companies}
                label="Filter by company"
                placeholder="All Companies"
                icon={
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                }
              />

              {/* Clear Filters Button */}
              <div className="w-full">
                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="flex items-center px-4 py-2 text-sm font-medium text-[#284D8E] bg-blue-50 border rounded-2xl border-blue-200 hover:opacity-60 transition duration-300 cursor-pointer"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>

            {/* Search Input */}
            <div className="w-4/12">
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
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No users found
              </h3>
              <p className="text-gray-600 mb-4">
                {hasActiveFilters
                  ? "Try adjusting your filters to see more results."
                  : "No users available at the moment."}
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="bg-[#284D8E] text-white px-4 py-2 rounded-md hover:opacity-70 transition duration-300 cursor-pointer"
                >
                  Clear Filters
                </button>
              )}
            </div>
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 rounded-full p-3 mr-4">
                      <Users className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {user.name}
                      </h3>
                      <p className="text-sm text-gray-500">ID: {user.id}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Globe className="h-4 w-4 mr-3 flex-shrink-0" />
                      <a
                        href={`mailto:${user.email}`}
                        className="text-sm hover:text-indigo-600 transition-colors truncate"
                      >
                        {user.email}
                      </a>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                      <span className="text-sm">{user.address.city}</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <Building2 className="h-4 w-4 mr-3 flex-shrink-0" />
                      <span className="text-sm">{user.company.name}</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                      <a
                        href={`tel:${user.phone}`}
                        className="text-sm hover:text-indigo-600 transition-colors"
                      >
                        {user.phone}
                      </a>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <Globe className="h-4 w-4 mr-3 flex-shrink-0" />
                      <a
                        href={`https://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-indigo-600 transition-colors truncate"
                      >
                        {user.website}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
