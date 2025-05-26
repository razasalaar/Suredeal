"use client";

import { useState } from "react";
import { ArrowLeft, CalendarDays, ChevronDown, Plus } from "lucide-react";

export default function NewQuotationForm({ onClose }) {
  const [customerName, setCustomerName] = useState("");
  const [quotationNumber, setQuotationNumber] = useState("132452"); // Mock number
  const [quoteDate, setQuoteDate] = useState("10 OCT 2024"); // Mock date
  const [validTill, setValidTill] = useState("Next 30 days"); // Mock default
  const [subject, setSubject] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    // In a real application, this would add a new item row to the 'items' state
    console.log("Add New Item clicked");
  };

  const handleSave = () => {
    // In a real application, this would handle saving the quotation
    console.log("Save clicked");
    onClose(); // Close the form after saving (or redirect)
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="w-full py-4 md:py-8 bg-[#FFFFFF] min-h-screen rounded-none md:rounded-2xl">
      {/* Header */}
      <div className="flex items-center px-4 md:px-6 mb-6">
        <button
          onClick={handleCancel}
          className="mr-4 p-1 rounded hover:bg-gray-100 cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 text-[#173C36]" />
        </button>
        <h1 className="font-bold text-[#173C36] text-lg md:text-xl">
          New Quotation
        </h1>
      </div>

      {/* Form Fields */}
      <div className="px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Customer Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Customer name
          </label>
          <div className="flex items-center gap-2">
            <div className="flex-grow relative">
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 cursor-text"
                placeholder="Search"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              {/* Dropdown indicator */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <button className="px-3 py-2 bg-[#218C7D] text-white rounded flex items-center text-sm cursor-pointer">
              <Plus className="w-4 h-4 mr-1" /> New customer
            </button>
          </div>
        </div>

        {/* Valid Till */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Valid Till
          </label>
          <div className="relative">
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 appearance-none cursor-pointer"
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

        {/* Quotation# */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Quotation#
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
            value={quotationNumber}
            readOnly
          />
        </div>

        {/* Quote date */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Quote date
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 cursor-pointer"
              value={quoteDate}
              onChange={(e) => setQuoteDate(e.target.value)} // In a real app, this would open a date picker
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <CalendarDays className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Subject */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Subject
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 cursor-text"
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
            "No items added"
          ) : (
            // Render items here in a real application
            <div>Items list</div>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleAddItem}
            className="mt-4 px-4 py-2 bg-[#218C7D] text-white rounded flex items-center text-sm cursor-pointer"
          >
            <Plus className="w-4 h-4 mr-1" /> New Item
          </button>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="px-4 md:px-6 flex gap-4">
        <button
          onClick={handleCancel}
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
    </div>
  );
}
