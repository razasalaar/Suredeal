"use client";
import { useState } from "react";
import { MoreHorizontal, ChevronDown, Menu, X } from "lucide-react";

// New Customer Form Component
function NewCustomerForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    title: "",
    email: "",
    phone: "",
    company: "",
    countryCode: "+1",
  });

  const [titleDropdownOpen, setTitleDropdownOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  const titles = ["Mr.", "Mrs.", "Ms.", "Dr.", "Prof."];
  const countryCodes = [
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "AUS" },
    { code: "+91", country: "IND" },
    { code: "+49", country: "GER" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form data:", formData);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm md:max-w-3xl mx-auto my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">New Customer</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded cursor-pointer"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Johnathan"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 text-sm"
            />
          </div>

          {/* Surname */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Surname</label>
            <input
              type="text"
              value={formData.surname}
              onChange={(e) => handleInputChange("surname", e.target.value)}
              placeholder="Doe George"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 text-sm"
            />
          </div>

          {/* Title */}
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">Title</label>
            <div
              className="w-full px-3 py-2 border border-gray-300 rounded cursor-pointer flex items-center justify-between bg-white text-sm"
              onClick={() => setTitleDropdownOpen(!titleDropdownOpen)}
            >
              <span
                className={formData.title ? "text-gray-900" : "text-gray-500"}
              >
                {formData.title || "Mr"}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            {titleDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
                {titles.map((title) => (
                  <div
                    key={title}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => {
                      handleInputChange("title", title);
                      setTitleDropdownOpen(false);
                    }}
                  >
                    {title}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm  text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="johndoegeorge@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 text-sm"
            />
          </div>

          {/* Phone and Company in one row on md screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-2">
            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone</label>
              <div className="flex">
                <div className="relative">
                  <div
                    className="px-3 py-2 border border-gray-300 rounded-l cursor-pointer flex items-center justify-between bg-white text-sm min-w-[70px]"
                    onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                  >
                    <span className="text-gray-900">
                      {formData.countryCode}
                    </span>
                    <ChevronDown className="w-3 h-3 text-gray-400 ml-1" />
                  </div>
                  {countryDropdownOpen && (
                    <div className="absolute z-10 w-24 mt-1 bg-white border border-gray-300 rounded shadow-lg">
                      {countryCodes.map((country) => (
                        <div
                          key={country.code}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                          onClick={() => {
                            handleInputChange("countryCode", country.code);
                            setCountryDropdownOpen(false);
                          }}
                        >
                          {country.code}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="999999 999999"
                  className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 text-sm"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Nautical Constructions Pvt Ltd"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col-reverse md:flex-row items-stretch md:items-center justify-end gap-3 p-4 border-t border-gray-200">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded hover:bg-gray-50 cursor-pointer w-full md:w-auto"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm bg-[#173C36] text-white rounded hover:bg-[#1a453e] cursor-pointer w-full md:w-auto"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

const mockCustomers = [
  {
    id: "CUST001",
    firstName: "John",
    lastName: "George",
    company: "Sydney Inc",
    amount: "$3000",
    status: "Active",
    statusColor: "green",
  },
  {
    id: "CUST002",
    firstName: "John",
    lastName: "George",
    company: "Sydney Inc",
    amount: "$3000",
    status: "Active",
    statusColor: "green",
  },
  {
    id: "CUST003",
    firstName: "John",
    lastName: "George",
    company: "Sydney Inc",
    amount: "$3000",
    status: "Inactive",
    statusColor: "red",
  },
  {
    id: "CUST004",
    firstName: "John",
    lastName: "George",
    company: "Sydney Inc",
    amount: "$3000",
    status: "Pending",
    statusColor: "orange",
  },
  {
    id: "CUST005",
    firstName: "John",
    lastName: "George",
    company: "Sydney Inc",
    amount: "$3000",
    status: "Active",
    statusColor: "green",
  },
  {
    id: "CUST006",
    firstName: "John",
    lastName: "George",
    company: "Sydney Inc",
    amount: "$3000",
    status: "Review",
    statusColor: "blue",
  },
  {
    id: "CUST007",
    firstName: "John",
    lastName: "George",
    company: "Sydney Inc",
    amount: "$3000",
    status: "Active",
    statusColor: "green",
  },
  {
    id: "CUST008",
    firstName: "John",
    lastName: "George",
    company: "Sydney Inc",
    amount: "$3000",
    status: "Inactive",
    statusColor: "red",
  },
  {
    id: "CUST009",
    firstName: "John",
    lastName: "George",
    company: "Sydney Inc",
    amount: "$3000",
    status: "Pending",
    statusColor: "orange",
  },
  {
    id: "CUST010",
    firstName: "John",
    lastName: "George",
    company: "Sydney Inc",
    amount: "$3000",
    status: "Active",
    statusColor: "green",
  },
];

export default function Customers() {
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [customers, setCustomers] = useState(mockCustomers);
  const [showNewCustomerForm, setShowNewCustomerForm] = useState(false);

  // Handle individual checkbox selection
  const handleItemSelect = (id) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
    setSelectAll(newSelected.size === customers.length);
  };

  // Handle select all checkbox
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(customers.map((_, index) => index)));
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
      case "Active":
        return "green";
      case "Inactive":
        return "red";
      case "Pending":
        return "orange";
      case "Review":
        return "blue";
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
      case "Active":
        textColorClass = "text-green-700";
        break;
      case "Inactive":
        textColorClass = "text-red-700";
        break;
      case "Pending":
        textColorClass = "text-orange-700";
        break;
      case "Review":
        textColorClass = "text-blue-700";
        break;
      default:
        textColorClass = "text-gray-700";
    }

    // Set background color - active status gets colored background, others get hover effect
    if (statusOption === currentStatus) {
      switch (statusOption) {
        case "Active":
          bgClass = "bg-green-50";
          break;
        case "Inactive":
          bgClass = "bg-red-50";
          break;
        case "Pending":
          bgClass = "bg-orange-50";
          break;
        case "Review":
          bgClass = "bg-blue-50";
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
      case "Active":
        return `${baseClass} bg-green-500`;
      case "Inactive":
        return `${baseClass} bg-red-500`;
      case "Pending":
        return `${baseClass} bg-orange-500`;
      case "Review":
        return `${baseClass} bg-blue-500`;
      default:
        return `${baseClass} bg-gray-500`;
    }
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedCustomers = [...customers];
    updatedCustomers[index] = {
      ...updatedCustomers[index],
      status: newStatus,
      statusColor: getStatusColor(newStatus),
    };
    setCustomers(updatedCustomers);
    setOpenDropdownIndex(null);
  };

  const handleNewCustomerClick = () => {
    setShowNewCustomerForm(true);
  };

  const handleCloseNewCustomerForm = () => {
    setShowNewCustomerForm(false);
  };

  return (
    <div className="w-full py-4 bg-[#FFFFFF] min-h-screen rounded-none md:rounded-2xl">
      {/* Header */}
      <div className="flex px-4 lg:px-6 items-center justify-between">
        <div>
          <h1 className="font-bold text-[#173C36] text-lg lg:text-xl">
            Customers
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="p-2 cursor-pointer px-3 lg:px-4 text-sm lg:text-[14px] bg-[#173C36] rounded-sm text-amber-50"
            onClick={handleNewCustomerClick}
          >
            New Customer
          </button>
        </div>
      </div>

      {/* Desktop/Tablet Table Container */}
      <div className="mt-4 lg:mt-6 px-4 lg:px-0 hidden sm:block">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {/* Desktop Table Header */}
          <div className="bg-[#F9F9F9] px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-[auto_1fr_1fr_2fr_1fr_auto] gap-4 items-start min-w-0">
              {/* Select All Checkbox */}
              <div className="flex justify-center">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="form-checkbox mt-1 h-4 w-4 text-green-600 rounded border-gray-300"
                />
              </div>

              {/* First Name */}
              <div className="min-w-0">
                <span className="text-sm font-medium text-gray-600 mb-2 block">
                  First Name
                </span>
                <input
                  type="text"
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 bg-white"
                />
              </div>

              {/* Last Name */}
              <div className="min-w-0">
                <span className="text-sm font-medium text-gray-600 mb-2 block">
                  Last Name
                </span>
                <input
                  type="text"
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 bg-white"
                />
              </div>

              {/* Company */}
              <div className="min-w-0">
                <span className="text-sm font-medium text-gray-600 mb-2 flex items-center">
                  Company
                  <ChevronDown className="w-4 h-4 ml-1 text-gray-400 flex-shrink-0" />
                </span>
                <input
                  type="text"
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 bg-white"
                />
              </div>

              {/* Amount */}
              <div className="min-w-0">
                <span className="text-sm font-medium text-gray-600 mb-2 flex items-center">
                  Amount
                  <ChevronDown className="w-4 h-4 ml-1 text-gray-400 flex-shrink-0" />
                </span>
                <input
                  type="text"
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 bg-white"
                />
              </div>

              {/* More */}
              <div className="flex justify-end">
                <span className="text-sm font-medium text-gray-600">More</span>
              </div>
            </div>
          </div>

          {/* Desktop Table Body */}
          <div className="divide-y divide-gray-200">
            {customers.map((customer, index) => (
              <div key={index} className="px-6 py-4 hover:bg-gray-50">
                <div className="grid grid-cols-[auto_1fr_1fr_2fr_1fr_auto] gap-4 items-center min-w-0">
                  {/* Checkbox */}
                  <div className="flex justify-center">
                    <input
                      type="checkbox"
                      checked={selectedItems.has(index)}
                      onChange={() => handleItemSelect(index)}
                      className="form-checkbox h-4 w-4 text-green-600 rounded border-gray-300"
                    />
                  </div>

                  {/* First Name */}
                  <div className="text-sm text-gray-900 font-medium truncate">
                    {customer.firstName}
                  </div>

                  {/* Last Name */}
                  <div className="text-sm text-gray-700 truncate">
                    {customer.lastName}
                  </div>

                  {/* Company */}
                  <div className="text-sm text-gray-700 truncate">
                    {customer.company}
                  </div>

                  {/* Amount */}
                  <div className="text-sm text-gray-900 font-semibold text-center truncate">
                    {customer.amount}
                  </div>

                  {/* More Actions */}
                  <div className="flex justify-end">
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

      {/* Mobile List View */}
      <div className="sm:hidden mt-4">
        <div className="bg-white">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="border-b border-gray-200 px-4 py-4 hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm font-medium text-[#173C36] mb-1">
                    {customer.firstName} {customer.lastName}
                  </div>
                  <div className="text-sm text-[#173C36]">
                    {customer.company}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-semibold text-[#173C36]">
                    {customer.amount}
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

      {/* New Customer Form Modal */}
      {showNewCustomerForm && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center z-50">
          <NewCustomerForm onClose={handleCloseNewCustomerForm} />
        </div>
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
