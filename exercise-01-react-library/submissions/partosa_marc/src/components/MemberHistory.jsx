import React from "react";
import Badge from "./badge";
import Avatar from "./avatar";

const MemberModal = ({
  selectedMember,
  isModalOpen,
  onClose,
  transactions,
  books,
  onMarkAsReturned,
}) => {
  if (!selectedMember) return null;

  const memberTransactions = transactions.filter(
    (transaction) => transaction.memberId === selectedMember.id
  );

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full max-h-[85vh] overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Avatar name={selectedMember.name} size="md" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {selectedMember.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Member ID: {selectedMember.id}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Member since:{" "}
                      {new Date(
                        selectedMember.membershipDate
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors p-1"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-4 overflow-y-auto max-h-[calc(85vh-140px)]">
              <h3 className="font-medium text-gray-900 mb-4">
                Transaction History
              </h3>
              {memberTransactions.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No transactions found</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {memberTransactions.map((transaction) => {
                    const book = books.find((b) => b.id === transaction.bookId);
                    const isOverdue =
                      transaction.status === "borrowed" &&
                      new Date(transaction.expectedReturnDate) < new Date();

                    return (
                      <div
                        key={transaction.id}
                        className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex gap-4">
                          {/* Book Image */}
                          <div className="shrink-0 ">
                            <img
                              src={
                                book?.image
                                  ? new URL(book.image, import.meta.url).href
                                  : "https://via.placeholder.com/64x80/e5e7eb/9ca3af?text=Book"
                              }
                              alt={book?.title || "Book cover"}
                              className="w-16 h-20 object-cover rounded-md shadow-sm border"
                              onError={(e) => {
                                e.target.src =
                                  "https://via.placeholder.com/64x80/e5e7eb/9ca3af?text=Book";
                              }}
                            />
                          </div>

                          {/* Book Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="font-medium text-gray-900 leading-tight">
                                {book?.title || "Unknown Book"}
                              </h4>
                              <Badge
                                status={transaction.status}
                                isOverdue={isOverdue}
                              />
                            </div>
                            <div className="space-y-2 text-sm text-gray-600">
                              <div className="flex justify-between">
                                <span className="text-gray-500">Book ID:</span>
                                <span className="font-medium">
                                  {transaction.bookId}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">Borrowed:</span>
                                <span className="font-medium">
                                  {new Date(
                                    transaction.borrowDate
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">
                                  Expected Return:
                                </span>
                                <span
                                  className={`font-medium ${
                                    isOverdue ? "text-red-600" : ""
                                  }`}
                                >
                                  {new Date(
                                    transaction.expectedReturnDate
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                              {transaction.returnDate && (
                                <div className="flex justify-between">
                                  <span className="text-gray-500">
                                    Returned:
                                  </span>
                                  <span className="font-medium text-gray-600">
                                    {new Date(
                                      transaction.returnDate
                                    ).toLocaleDateString()}
                                  </span>
                                </div>
                              )}
                            </div>
                            {/* Mark as Returned Button */}
                            {(transaction.status === "borrowed" || isOverdue) &&
                              onMarkAsReturned && (
                                <div className="mt-3 pt-3 border-t border-gray-200">
                                  <button
                                    onClick={() =>
                                      onMarkAsReturned(transaction.id)
                                    }
                                    className="w-full px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                                  >
                                    Mark as Returned
                                  </button>
                                </div>
                              )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MemberModal;
