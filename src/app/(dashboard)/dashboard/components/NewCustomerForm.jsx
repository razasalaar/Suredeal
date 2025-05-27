"use client";
import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

export default function NewCustomerForm({ onClose }) {
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
    // Handle form submission logic here
    console.log("Form data:", formData);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-[#173C36]">New Customer</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100] rounded cursor-pointer"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-4 space-y-4">
          {/* Row 1: Name and Surname */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Add name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Surname
              </label>
              <input
                type="text"
                value={formData.surname}
                onChange={(e) => handleInputChange("surname", e.target.value)}
                placeholder="Add surname"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 text-sm"
              />
            </div>
          </div>

          {/* Row 2: Title and Email */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm text-gray-600 mb-1">Title</label>
              <div
                className="w-full px-3 py-2 border border-gray-300 rounded cursor-pointer flex items-center justify-between bg-white text-sm"
                onClick={() => setTitleDropdownOpen(!titleDropdownOpen)}
              >
                <span
                  className={formData.title ? "text-gray-900" : "text-gray-500"}
                >
                  {formData.title || "Add Title"}
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
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="abcd@xyz.com"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 text-sm"
              />
            </div>
          </div>

          {/* Row 3: Phone and Company */}
          <div className="grid grid-cols-2 gap-4">
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
                  placeholder="99 999 99999"
                  className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="ABC Inc"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded hover:bg-gray-50 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm bg-[#173C36] text-white rounded hover:bg-[#1a453e] cursor-pointer"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
