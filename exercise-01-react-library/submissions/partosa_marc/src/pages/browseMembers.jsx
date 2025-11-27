import React, { useState } from "react";
import { MemberCard } from "../components/card";
import MemberModal from "../components/MemberHistory";
import SearchBar from "../components/searchBar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/tabs";
import fetchMembers from "../services/fetchMembers";
import fetchBooks from "../services/fetchBooks";
import fetchTransactions from "../services/fetchTransactions";

const BrowseMembers = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Fetch data
  const membersData = fetchMembers() || [];
  const transactionsData = fetchTransactions() || [];
  const booksData = fetchBooks() || [];

  // Get members with active borrows
  const getMembersWithActiveBookings = () => {
    const activeTransactions = transactionsData.filter(
      (transaction) => transaction.status === "borrowed"
    );
    const activeBorrowerIds = new Set(
      activeTransactions.map((transaction) => transaction.memberId)
    );
    return activeBorrowerIds;
  };

  const activeBorrowerIds = getMembersWithActiveBookings();

  // Filter members based on search term and tab selection
  const filteredMembers = membersData.filter((member) => {
    const matchesSearch = member.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const isActiveBorrower = activeBorrowerIds.has(member.id);

    if (activeTab === "active") {
      return matchesSearch && isActiveBorrower;
    }
    return matchesSearch;
  });

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar
          onSearch={handleSearch}
          onClear={handleClear}
          placeholder="Search members by name..."
          hideDropdown={true}
        />

        {/* Member Categories */}
        <div className="mb-6 w-full overflow-x-auto scrollbar-hide">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="flex w-max mx-auto gap-2 px-4">
              <TabsTrigger value="all">All Members</TabsTrigger>
              <TabsTrigger value="active">Active Borrowers</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-600">
            {activeTab === "active"
              ? `${filteredMembers.length} active borrowers`
              : `${filteredMembers.length} members`}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              onClick={handleMemberClick}
            />
          ))}
        </div>
      </div>

      <MemberModal
        selectedMember={selectedMember}
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
        transactions={transactionsData}
        books={booksData}
      />
    </div>
  );
};

export default BrowseMembers;
