"use client";

import { useState } from "react";
import { ArrowLeft, CalendarDays, ChevronDown, Plus, X } from "lucide-react";

export default function NewQuotationForm({ onClose }) {
  const [customerName, setCustomerName] = useState("");
  const [quotationNumber, setQuotationNumber] = useState("132452"); // Mock number
  const [quoteDate, setQuoteDate] = useState("10 OCT 2024"); // Mock date
  const [validTill, setValidTill] = useState("Next 30 days"); // Mock default
  const [subject, setSubject] = useState("");
  const [items, setItems] = useState([]);
  const [showMobileAddItemModal, setShowMobileAddItemModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleAddItem = () => {
    setShowMobileAddItemModal(true);
  };

  const handleCloseMobileAddItemModal = () => {
    setShowMobileAddItemModal(false);
  };

  const handleSave = () => {
    // In a real application, this would handle saving the quotation
    console.log("Save clicked");
    onClose(); // Close the form after saving (or redirect)
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Match this with animation duration
  };

  return (
    <div
      className={`w-full py-4 md:py-8 bg-[#FFFFFF] min-h-screen rounded-none md:rounded-2xl ${
        isClosing ? "animate-slide-out" : "animate-slide-in"
      }`}
    >
      {/* Header */}
      <div className="flex items-center px-4 md:px-6 mb-6">
        <button
          onClick={handleClose}
          className="mr-4 p-1 rounded hover:bg-gray-100 cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 text-[#173C36]" />
        </button>
        <h1 className="font-bold text-[#173C36] text-lg md:text-xl">
          New Quotation
        </h1>
      </div>

      {/* Form Fields */}
      <div className="px-4 md:px-6 mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Name */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Customer name
          </label>
          <div className="flex items-center gap-2">
            <div className="flex w-lg relative">
              <input
                type="text"
                className="w-full px-3 py-2 border border-[#8DCCBF] rounded focus:outline-none focus:ring-1 focus:ring-[#8DCCBF] cursor-text"
                placeholder="Search"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              {/* Dropdown indicator */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <button className="px-3 py-2 bg-[#218C7D] text-white rounded flex items-center text-sm cursor-pointer whitespace-nowrap">
              <Plus className="w-4 h-4 mr-1" /> New customer
            </button>
          </div>
        </div>

        {/* Quotation# */}
        <div className="lg:col-span-2  sm:w-sm ">
          <label className="block  text-sm font-medium text-gray-600 mb-2">
            Quotation#
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-[#8DCCBF] rounded bg-gray-100 cursor-not-allowed"
            value={quotationNumber}
            readOnly
          />
        </div>

        {/* Quote date */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Quote date
          </label>
          <div className="relative sm:w-sm ">
            <input
              type="date"
              className="w-full px-3 py-2 border border-[#8DCCBF] rounded focus:outline-none focus:ring-1 focus:ring-[#8DCCBF] cursor-pointer"
              value={quoteDate}
              onChange={(e) => setQuoteDate(e.target.value)}
            />
          </div>
        </div>

        {/* Valid Till */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Valid Till
          </label>
          <div className="relative sm:w-sm ">
            <select
              className="w-full px-3 py-2 border border-[#8DCCBF] rounded focus:outline-none focus:ring-1 focus:ring-[#8DCCBF] appearance-none cursor-pointer"
              value={validTill}
              onChange={(e) => setValidTill(e.target.value)}
            >
              <option value="Next 30 days">Next 30 days</option>
              {/* Add other options here */}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Subject */}
        <div className="lg:col-span-2 sm:w-sm ">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Subject
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-[#8DCCBF] rounded focus:outline-none focus:ring-1 focus:ring-[#8DCCBF] cursor-text"
            placeholder="Add a subject for your quote"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
      </div>

      {/* Items Section */}
      <div className="px-4 md:px-6 mb-8">
        <div className="bg-[#F9F9F9] p-4 rounded-t-md">
          <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 text-sm font-medium text-gray-600">
            <div>SL#</div>
            <div>Item & Description</div>
            <div className="text-right">Rate</div>
            <div className="text-right">Units</div>
            <div className="text-right">Amount</div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-b-md p-4 text-center text-gray-500">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8">
              <img
                src="/images/Interface.png"
                alt="No items"
                className="w-32 h-32 object-contain mb-4"
              />
              <p className="text-gray-500">No items added</p>
            </div>
          ) : (
            <div>Items list</div>
          )}

          <div className="flex justify-center">
            {/* Mobile Add Item Button */}
            <button
              onClick={handleAddItem}
              className=" mt-4 px-4 py-2 bg-[#218C7D] text-white rounded flex items-center text-sm cursor-pointer"
            >
              <Plus className="w-4 h-4 mr-1" /> New Item
            </button>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="px-4 md:px-6 flex gap-4">
        <button
          onClick={handleClose}
          className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-[#173C36] text-white rounded hover:bg-[#218C7D] cursor-pointer"
        >
          Save
        </button>
      </div>

      {/* Mobile Add Item Modal */}
      {showMobileAddItemModal && (
        <>
          {/* Mobile Modal */}
          <div className="sm:hidden fixed inset-0 bg-black/20 bg-opacity-50 z-50 flex items-end">
            <div className="bg-white w-full rounded-t-lg animate-slide-up">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-[#173C36]">
                  Add New Item
                </h2>
                <button
                  onClick={handleCloseMobileAddItemModal}
                  className="p-1 hover:bg-gray-100 rounded cursor-pointer"
                >
                  <X className="w-5 h-5 text-[#173C36]" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4 space-y-4">
                {/* Item & Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Item & Description
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-[#8DCCBF] rounded focus:outline-none focus:ring-1 focus:ring-[#8DCCBF] cursor-text"
                    placeholder="Enter item description"
                  />
                </div>

                {/* Unit */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Unit
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-[#8DCCBF] rounded focus:outline-none focus:ring-1 focus:ring-[#8DCCBF] cursor-text"
                    placeholder="Enter unit"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleCloseMobileAddItemModal}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      // Handle add item logic here
                      handleCloseMobileAddItemModal();
                    }}
                    className="flex-1 px-4 py-2 bg-[#173C36] text-white rounded hover:bg-[#218C7D] cursor-pointer"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Modal */}
          <div className="hidden sm:flex fixed inset-0  z-50 items-center justify-center">
            <div className="bg-white w-full max-w-md rounded-lg animate-fade-in">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-[#173C36]">
                  Add New Item
                </h2>
                <button
                  onClick={handleCloseMobileAddItemModal}
                  className="p-1 hover:bg-gray-100 rounded cursor-pointer"
                >
                  <X className="w-5 h-5 text-[#173C36]" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-4">
                {/* Item & Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Item & Description
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-[#8DCCBF] rounded focus:outline-none focus:ring-1 focus:ring-[#8DCCBF] cursor-text"
                    placeholder="Enter item description"
                  />
                </div>

                {/* Unit */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Unit
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-[#8DCCBF] rounded focus:outline-none focus:ring-1 focus:ring-[#8DCCBF] cursor-text"
                    placeholder="Enter unit"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleCloseMobileAddItemModal}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      // Handle add item logic here
                      handleCloseMobileAddItemModal();
                    }}
                    className="flex-1 px-4 py-2 bg-[#173C36] text-white rounded hover:bg-[#218C7D] cursor-pointer"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
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
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        @keyframes slide-in {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-out {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
        .animate-slide-out {
          animation: slide-out 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
