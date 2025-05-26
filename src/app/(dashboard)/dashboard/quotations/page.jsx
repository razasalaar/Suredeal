"use client";
import { useState } from "react";
import { MoreHorizontal, ChevronDown, Menu, X } from "lucide-react";
import NewQuotationForm from "../components/NewQuotationForm";

// Mock data to match the image
const mockQuotations = [
  {
    id: "QHA05656",
    name: "Quotation for 1000 Vehicles",
    status: "In Progress",
    expiringOn: "28 OCT 2024",
    progress: 52,
    amount: "$1000",
    statusColor: "orange",
  },
  {
    id: "QHA05656",
    name: "Quotation for 1000 Vehicles",
    status: "In Progress",
    expiringOn: "28 OCT 2024",
    progress: 52,
    amount: "$1000",
    statusColor: "orange",
  },
  {
    id: "QHA05656",
    name: "Quotation for 1000 Vehicles",
    status: "In Progress",
    expiringOn: "28 OCT 2024",
    progress: 52,
    amount: "$1000",
    statusColor: "orange",
  },
  {
    id: "QHA05656",
    name: "Quotation for 1000 Vehicles",
    status: "New",
    expiringOn: "28 OCT 2024",
    progress: 52,
    amount: "$1000",
    statusColor: "yellow",
  },
  {
    id: "QHA05656",
    name: "Quotation for 1000 Vehicles",
    status: "In Review",
    expiringOn: "28 OCT 2024",
    progress: 52,
    amount: "$1000",
    statusColor: "blue",
  },
];

export default function Quotations() {
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [quotations, setQuotations] = useState(mockQuotations);
  // const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [selectedQuotation, setSelectedQuotation] = useState(null);
  const [showNewQuotationForm, setShowNewQuotationForm] = useState(false);

  // Handle individual checkbox selection
  const handleItemSelect = (id) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
    setSelectAll(newSelected.size === quotations.length);
  };

  // Handle select all checkbox
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(quotations.map((_, index) => index)));
    }
    setSelectAll(!selectAll);
  };

  const getStatusStyles = (statusColor) => {
    switch (statusColor) {
      case "orange":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "yellow":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "blue":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "green":
        return "bg-green-100 text-green-700 border-green-200";
      case "red":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusIndicator = (statusColor) => {
    const baseClass = "w-2 h-2 rounded-full mr-2";
    switch (statusColor) {
      case "orange":
        return `${baseClass} bg-orange-500`;
      case "yellow":
        return `${baseClass} bg-yellow-500`;
      case "blue":
        return `${baseClass} bg-blue-500`;
      case "green":
        return `${baseClass} bg-green-500`;
      case "red":
        return `${baseClass} bg-red-500`;
      default:
        return `${baseClass} bg-gray-500`;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "green";
      case "In Progress":
        return "orange";
      case "In Review":
        return "blue";
      case "Closed":
        return "red";
      default:
        return "gray";
    }
  };

  const getDropdownItemStyles = (statusOption, currentStatus) => {
    let baseClasses = "flex items-center px-4 py-2 text-sm cursor-pointer";
    let textColorClass = "";
    let bgClass = "";

    // Set text color based on status
    switch (statusOption) {
      case "New":
        textColorClass = "text-green-700";
        break;
      case "In Progress":
        textColorClass = "text-orange-700";
        break;
      case "In Review":
        textColorClass = "text-blue-700";
        break;
      case "Closed":
        textColorClass = "text-red-700";
        break;
      default:
        textColorClass = "text-gray-700";
    }

    // Set background color - active status gets colored background, others get hover effect
    if (statusOption === currentStatus) {
      switch (statusOption) {
        case "New":
          bgClass = "bg-green-50";
          break;
        case "In Progress":
          bgClass = "bg-orange-50";
          break;
        case "In Review":
          bgClass = "bg-blue-50";
          break;
        case "Closed":
          bgClass = "bg-red-50";
          break;
        default:
          bgClass = "bg-gray-50";
      }
    } else {
      bgClass = "hover:bg-gray-100";
    }

    return `${baseClasses} ${textColorClass} ${bgClass}`;
  };

  const getDropdownIndicator = (status) => {
    const baseClass = "w-2 h-2 rounded-full mr-3";
    switch (status) {
      case "New":
        return `${baseClass} bg-green-500`;
      case "In Progress":
        return `${baseClass} bg-orange-500`;
      case "In Review":
        return `${baseClass} bg-blue-500`;
      case "Closed":
        return `${baseClass} bg-red-500`;
      default:
        return `${baseClass} bg-gray-500`;
    }
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedQuotations = [...quotations];
    updatedQuotations[index] = {
      ...updatedQuotations[index],
      status: newStatus,
      statusColor: getStatusColor(newStatus),
    };
    setQuotations(updatedQuotations);
    setOpenDropdownIndex(null);
  };

  const handleMobileQuotationClick = (quotation, index) => {
    setSelectedQuotation({ ...quotation, index });
  };

  const closeMobileModal = () => {
    setSelectedQuotation(null);
  };

  const handleNewQuotationClick = () => {
    setShowNewQuotationForm(true);
  };

  const handleCloseNewQuotationForm = () => {
    setShowNewQuotationForm(false);
  };

  return (
    <div className="w-full py-4  bg-[#FFFFFF] min-h-screen rounded-none md:rounded-2xl">
      {/* Header */}
      {!showNewQuotationForm && (
        <div className="flex px-4 lg:px-6 items-center justify-between">
          <div>
            <h1 className="font-bold text-[#173C36] text-lg lg:text-xl">
              Quotations
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="p-2 cursor-pointer px-3 lg:px-4 text-sm lg:text-[14px] bg-[#173C36] rounded-sm text-amber-50"
              onClick={handleNewQuotationClick}
            >
              New Quotation
            </button>
          </div>
        </div>
      )}

      {/* Mobile Filters Overlay */}
      {/* {showMobileFilters && (
        <div className="sm:hidden fixed inset-0 bg-black/90 bg-opacity-50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-lg animate-slide-up">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-[#173C36]">Filters</h2>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5 text-[#173C36]" />
              </button>
            </div>

            <div className="p-4 space-y-4"></div>
          </div>
        </div>
      )} */}

      {/* Desktop/Tablet Table Container */}
      {!showNewQuotationForm && (
        <div className="mt-4 lg:mt-6 px-4 lg:px-0 hidden sm:block">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {/* Desktop Table Header */}
            <div className="bg-[#F9F9F9] px-6 py-4 border-b border-gray-200">
              <div className="flex gap-2">
                {/* Select All Checkbox */}
                <div className="w-8 flex justify-center">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="form-checkbox mt-1 h-4 w-4 text-green-600 rounded border-gray-300"
                  />
                </div>

                {/* Quotation# */}
                <div className="w-32">
                  <span className="text-sm font-medium text-gray-600 mb-2 block">
                    Quotation#
                  </span>
                  <input
                    type="text"
                    className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 bg-white"
                  />
                </div>

                {/* Name */}
                <div className="w-54 max-md:w-45 ">
                  <span className="text-sm font-medium text-gray-600 mb-2 flex items-center">
                    Name
                    <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 bg-white"
                  />
                </div>

                {/* Status */}
                <div className="w-32 max-md:w-40 ">
                  <span className="text-sm font-medium text-gray-600 mb-2 flex items-center">
                    Status
                    <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 bg-white"
                  />
                </div>

                {/* Expiring on */}
                <div className="w-32">
                  <span className="text-sm font-medium text-gray-600 mb-2 whitespace-nowrap flex items-center">
                    Expiring on
                    <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 bg-white"
                  />
                </div>

                {/* Progress */}
                <div className="w-44">
                  <span className="text-sm font-medium text-gray-600 mb-2 block">
                    Progress
                  </span>
                  <input
                    type="text"
                    className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 bg-white"
                  />
                </div>

                {/* Amount */}
                <div className="w-30">
                  <span className="text-sm font-medium text-gray-600 mb-2 flex items-center">
                    Amount
                    <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 bg-white"
                  />
                </div>

                {/* More */}
                <div className="w-20 flex justify-end">
                  <span className="text-sm font-medium text-gray-600">
                    More
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Table Body */}
            <div className="divide-y divide-gray-200">
              {quotations.map((quotation, index) => (
                <div key={index} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    {/* Checkbox */}
                    <div className="w-8 max-md:w-5 flex justify-center">
                      <input
                        type="checkbox"
                        checked={selectedItems.has(index)}
                        onChange={() => handleItemSelect(index)}
                        className="form-checkbox h-4 w-4 text-green-600 rounded border-gray-300"
                      />
                    </div>

                    {/* Quotation # */}
                    <div className="w-32 max-md:w-28  text-sm text-gray-900 font-medium">
                      {quotation.id}
                    </div>

                    {/* Name */}
                    <div className="w-50 max-md:w-50 text-sm text-gray-700">
                      {quotation.name}
                    </div>

                    {/* Status */}
                    <div className="w-32 max-md:w-32 relative">
                      <div
                        className={`inline-flex whitespace-nowrap items-center px-2 py-1 rounded-full text-xs font-medium border cursor-pointer ${getStatusStyles(
                          quotation.statusColor
                        )}`}
                        onClick={() =>
                          setOpenDropdownIndex(
                            openDropdownIndex === index ? null : index
                          )
                        }
                      >
                        <div
                          className={getStatusIndicator(quotation.statusColor)}
                        ></div>
                        {quotation.status}
                        <ChevronDown className="w-3 max-md:w-1  h-3 ml-1 text-gray-600" />
                      </div>
                      {openDropdownIndex === index && (
                        <div
                          className={`absolute z-10 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
                            index >= quotations.length - 2
                              ? "bottom-full mb-2"
                              : "top-full mt-2"
                          }`}
                        >
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            {["New", "In Progress", "In Review", "Closed"].map(
                              (statusOption) => (
                                <div
                                  key={statusOption}
                                  className={getDropdownItemStyles(
                                    statusOption,
                                    quotation.status
                                  )}
                                  onClick={() =>
                                    handleStatusChange(index, statusOption)
                                  }
                                >
                                  <div
                                    className={getDropdownIndicator(
                                      statusOption
                                    )}
                                  ></div>
                                  {statusOption}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Expiring on */}
                    <div className="w-26 max-md:w-40 text-sm text-blue-600 font-medium whitespace-nowrap">
                      {quotation.expiringOn}
                    </div>

                    {/* Progress */}
                    <div className="w-42 max-md:w-50 flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${quotation.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-600 font-medium">
                        {quotation.progress}%
                      </span>
                    </div>

                    {/* Amount */}
                    <div className="w-34 max-md:w-40   md:pl-6 text-sm text-gray-900 font-semibold">
                      {quotation.amount}
                    </div>

                    {/* More Actions */}
                    <div className="w-10 flex justify-end">
                      <div className="relative">
                        <button
                          className="p-1 hover:bg-gray-100 rounded cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDropdownIndex(
                              openDropdownIndex === `more-${index}`
                                ? null
                                : `more-${index}`
                            );
                          }}
                        >
                          <MoreHorizontal className="w-4 h-4 text-gray-400" />
                        </button>
                        {openDropdownIndex === `more-${index}` && (
                          <div
                            className="absolute right-0 mt-1 w-32 bg-white rounded-md shadow-lg z-10 border border-gray-200"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="py-1">
                              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Edit
                              </button>
                              <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile List View */}
      {!showNewQuotationForm && (
        <div className="sm:hidden mt-4">
          <div className="bg-white">
            {quotations.map((quotation, index) => (
              <div
                key={index}
                className="border-b border-gray-200 px-4 py-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleMobileQuotationClick(quotation, index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[#173C36] mb-1">
                      {quotation.name}
                    </div>
                    <div className="text-sm text-[#173C36]">{quotation.id}</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-sm text-blue-600 font-medium">
                      {quotation.expiringOn}
                    </div>
                    <div className="relative">
                      <button
                        className="p-1 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdownIndex(
                            openDropdownIndex === `more-${index}`
                              ? null
                              : `more-${index}`
                          );
                        }}
                      >
                        <MoreHorizontal className="w-4 h-4 text-[#173C36]" />
                      </button>
                      {openDropdownIndex === `more-${index}` && (
                        <div
                          className="absolute right-0 mt-1 w-32 bg-white rounded-md shadow-lg z-10 border border-gray-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="py-1">
                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              Edit
                            </button>
                            <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Bottom Sheet Modal */}
      {!showNewQuotationForm && selectedQuotation && (
        <div className="sm:hidden fixed inset-0 bg-black/90 bg-opacity-50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-lg animate-slide-up">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-[#173C36]">
                View Quote
              </h2>
              <button
                onClick={closeMobileModal}
                className="p-1 hover:bg-gray-100 rounded cursor-pointer"
              >
                <X className="w-5 h-5 text-[#173C36]" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 f space-y-4">
              {/* Date */}
              <div>
                <div className="text-sm text-blue-600 font-medium">
                  {selectedQuotation.expiringOn}
                </div>
              </div>

              {/* Title */}
              <div>
                <div className="text-lg font-medium text-[#173C36]">
                  {selectedQuotation.name}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="flex items-center justify-between mb-2">
                {/* Left Side: ID */}
                <div className="text-sm text-[#173C36]">
                  {selectedQuotation.id}
                </div>

                {/* Right Side: Progress Bar and Percentage */}
                <div className="flex items-center space-x-2 w-2/3 justify-end">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${selectedQuotation.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-[#173C36] font-medium">
                    {selectedQuotation.progress}%
                  </span>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-[#173C36] mb-2">Status</div>
                <div className="relative">
                  <div
                    className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium border cursor-pointer ${getStatusStyles(
                      selectedQuotation.statusColor
                    )}`}
                    onClick={() =>
                      setOpenDropdownIndex(
                        openDropdownIndex === selectedQuotation.index
                          ? null
                          : selectedQuotation.index
                      )
                    }
                  >
                    <div
                      className={getStatusIndicator(
                        selectedQuotation.statusColor
                      )}
                    ></div>
                    {selectedQuotation.status}
                    <ChevronDown className="w-4 h-4 ml-2 text-[#173C36]" />
                  </div>
                  {openDropdownIndex === selectedQuotation.index && (
                    <div className="absolute z-10 bottom-full mb-2 right-0 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {["New", "In Progress", "In Review", "Closed"].map(
                          (statusOption) => (
                            <div
                              key={statusOption}
                              className={getDropdownItemStyles(
                                statusOption,
                                selectedQuotation.status
                              )}
                              onClick={() => {
                                handleStatusChange(
                                  selectedQuotation.index,
                                  statusOption
                                );
                                setSelectedQuotation({
                                  ...selectedQuotation,
                                  status: statusOption,
                                  statusColor: getStatusColor(statusOption),
                                });
                              }}
                            >
                              <div
                                className={getDropdownIndicator(statusOption)}
                              ></div>
                              {statusOption}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Amount */}
              <div className="flex items-center justify-between mb-20">
                <div className="text-sm text-[#173C36] mb-1">Amount</div>
                <div className="text-xl font-bold text-[#173C36]">
                  {selectedQuotation.amount}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showNewQuotationForm && (
        <NewQuotationForm onClose={handleCloseNewQuotationForm} />
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
