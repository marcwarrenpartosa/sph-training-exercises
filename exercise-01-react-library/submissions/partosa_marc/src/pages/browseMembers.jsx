import React, { useState, useEffect } from "react";
import fetchMembers from "../services/fetchMembers.js";
import SearchBar from "../components/searchBar.jsx";
import Avatar from "../components/avatar.jsx";

const BrowseMembers = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const membersData = fetchMembers();
    setMembers(membersData);
  }, []);

  // Filter members by search term
  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <SearchBar
            onSearch={handleSearch}
            onClear={handleClear}
            placeholder="Search for members..."
            hideDropdown={true}
          />

          {/* Search Results Indicator */}
          {searchTerm && (
            <div className="text-center mb-6">
              <p className="text-gray-600 text-sm">
                Displaying search results for "{searchTerm}"
              </p>
            </div>
          )}

          {/* Members Grid */}
          {filteredMembers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No members found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200"
                >
                  <Avatar name={member.name} className="mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                    {member.name}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex justify-between">
                      <span className="font-medium">Member ID:</span>
                      <span className="text-blue-600 font-mono">
                        {member.id}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium">Joined:</span>
                      <span>
                        {new Date(member.membershipDate).toLocaleDateString()}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseMembers;
