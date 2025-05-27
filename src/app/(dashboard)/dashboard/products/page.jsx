"use client";
import { useState } from "react";
import { MoreHorizontal, ChevronDown, Menu, X } from "lucide-react";

// New Product Form Component
function NewProductForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    currency: "USD",
    margin: "",
  });

  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const currencies = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "GBP", symbol: "£", name: "British Pound" },
    { code: "AUD", symbol: "A$", name: "Australian Dollar" },
    { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
    { code: "JPY", symbol: "¥", name: "Japanese Yen" },
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
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm md:max-w-xl mx-auto my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-[#173C36]">New Product</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded cursor-pointer"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-4    gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm text-[#173C36] mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="add name"
              className="w-full px-3 py-2 border border-[#8DCCBF] rounded focus:outline-none focus:ring-1 focus:ring-[#8DCCBF] focus:border-[#8DCCBF] text-sm text-[#173C36]"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-[#173C36] mb-1">
              Description
            </label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="add description"
              className="w-full px-3 py-2 border border-[#8DCCBF] rounded focus:outline-none focus:ring-1 focus:ring-[#8DCCBF] focus:border-[#8DCCBF] text-sm text-[#173C36]"
            />
          </div>

          {/* Price and Margin in one row on md screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-2">
            {/* Price */}
            <div>
              <label className="block text-sm text-[#173C36] mb-1">Price</label>
              <div className="flex">
                <div className="relative">
                  <div
                    className="px-3 py-2 border border-[#8DCCBF] rounded-l cursor-pointer flex items-center justify-between bg-white text-sm min-w-[80px] text-[#173C36]"
                    onClick={() =>
                      setCurrencyDropdownOpen(!currencyDropdownOpen)
                    }
                  >
                    <span className="text-gray-900">
                      {currencies.find((c) => c.code === formData.currency)
                        ?.symbol || "$"}
                    </span>
                    <ChevronDown className="w-3 h-3 text-gray-400 ml-1" />
                  </div>
                  {currencyDropdownOpen && (
                    <div className="absolute z-10 w-32 mt-1 bg-white border border-gray-300 rounded shadow-lg">
                      {currencies.map((currency) => (
                        <div
                          key={currency.code}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                          onClick={() => {
                            handleInputChange("currency", currency.code);
                            setCurrencyDropdownOpen(false);
                          }}
                        >
                          {currency.symbol} {currency.code}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  placeholder="199.99"
                  className="flex-1 px-3 py-2 border border-l-0 border-[#8DCCBF] rounded-r focus:outline-none focus:ring-1 focus:ring-[#8DCCBF] focus:border-[#8DCCBF] text-sm text-[#173C36]"
                />
              </div>
            </div>

            {/* Margin */}
            <div>
              <label className="block text-sm text-[#173C36] mb-1">
                Margin (%)
              </label>
              <input
                type="number"
                value={formData.margin}
                onChange={(e) => handleInputChange("margin", e.target.value)}
                placeholder="25"
                className="w-full px-3 py-2 border border-[#8DCCBF] rounded focus:outline-none focus:ring-1 focus:ring-[#8DCCBF] focus:border-[#8DCCBF] text-sm text-[#173C36]"
              />
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex items-stretch md:items-center justify-end gap-3 p-4 border-t border-gray-200">
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

const mockProducts = [
  {
    id: "VEH001",
    productName: "Sedan Car - Toyota Corolla",
    productDescription:
      "2022 model with automatic transmission and hybrid engine",
    productCategory: "Car",
    productPrice: "$22,500",
    status: "Active",
    statusColor: "green",
  },
  {
    id: "VEH002",
    productName: "Sport Bike - Yamaha R15",
    productDescription: "155cc liquid-cooled engine with aggressive design",
    productCategory: "Bike",
    productPrice: "$4,999",
    status: "Active",
    statusColor: "green",
  },
  {
    id: "VEH003",
    productName: "SUV - Honda CR-V",
    productDescription: "Spacious 5-seater with advanced safety features",
    productCategory: "Car",
    productPrice: "$30,200",
    status: "Pending",
    statusColor: "orange",
  },
  {
    id: "VEH004",
    productName: "Electric Scooter - Xiaomi Mi",
    productDescription: "Lightweight foldable e-scooter with 30km range",
    productCategory: "Electric Vehicle",
    productPrice: "$499",
    status: "Active",
    statusColor: "green",
  },
  {
    id: "VEH005",
    productName: "Motorbike Helmet",
    productDescription: "DOT approved full-face helmet with sun visor",
    productCategory: "Accessories",
    productPrice: "$89",
    status: "Review",
    statusColor: "blue",
  },
  {
    id: "VEH006",
    productName: "Car Dashboard Camera",
    productDescription: "1080p full HD dash cam with night vision",
    productCategory: "Accessories",
    productPrice: "$59.99",
    status: "Active",
    statusColor: "green",
  },
  {
    id: "VEH007",
    productName: "Pickup Truck - Ford Ranger",
    productDescription: "Double cab with 4x4 drive and diesel engine",
    productCategory: "Car",
    productPrice: "$27,850",
    status: "Inactive",
    statusColor: "red",
  },
  {
    id: "VEH008",
    productName: "Bike Chain Lock",
    productDescription: "Heavy-duty anti-theft lock with protective sleeve",
    productCategory: "Accessories",
    productPrice: "$19.99",
    status: "Active",
    statusColor: "green",
  },
  {
    id: "VEH009",
    productName: "Electric Bike - Fiido D11",
    productDescription: "Foldable electric bike with 100km range",
    productCategory: "Electric Vehicle",
    productPrice: "$1,099",
    status: "Pending",
    statusColor: "orange",
  },
  {
    id: "VEH010",
    productName: "All-Terrain Tires - Michelin",
    productDescription: "Set of 4 premium tires for off-road performance",
    productCategory: "Accessories",
    productPrice: "$420",
    status: "Active",
    statusColor: "green",
  },
];

export default function Products() {
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [products, setProducts] = useState(mockProducts);
  const [showNewProductForm, setShowNewProductForm] = useState(false);

  // Handle individual checkbox selection
  const handleItemSelect = (id) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
    setSelectAll(newSelected.size === products.length);
  };

  // Handle select all checkbox
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(products.map((_, index) => index)));
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
    const updatedProducts = [...products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      status: newStatus,
      statusColor: getStatusColor(newStatus),
    };
    setProducts(updatedProducts);
    setOpenDropdownIndex(null);
  };

  const handleNewProductClick = () => {
    setShowNewProductForm(true);
  };

  const handleCloseNewProductForm = () => {
    setShowNewProductForm(false);
  };

  return (
    <div className="w-full py-4 bg-[#FFFFFF] min-h-screen rounded-none md:rounded-2xl">
      {/* Header */}
      <div className="flex px-4 lg:px-6 items-center justify-between">
        <div>
          <h1 className="font-bold text-[#173C36] text-lg lg:text-xl">
            Products
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="p-2 cursor-pointer px-3 lg:px-4 text-sm lg:text-[14px] bg-[#173C36] rounded-sm text-amber-50"
            onClick={handleNewProductClick}
          >
            New Product
          </button>
        </div>
      </div>

      {/* Desktop/Tablet Table Container */}
      <div className="mt-4 lg:mt-6 px-4 lg:px-0 hidden sm:block">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {/* Desktop Table Header */}
          <div className="bg-[#F9F9F9] px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-[auto_1fr_2fr_1fr_1fr_auto] gap-4 items-start min-w-0">
              {/* Select All Checkbox */}
              <div className="flex justify-center">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="form-checkbox mt-1 h-4 w-4 text-green-600 rounded border-gray-300"
                />
              </div>

              {/* Product Name */}
              <div className="min-w-0">
                <span className="text-sm font-medium text-gray-600 mb-2 block">
                  Product Name
                </span>
                <input
                  type="text"
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 bg-white"
                />
              </div>

              {/* Product Description */}
              <div className="min-w-0">
                <span className="text-sm font-medium text-gray-600 mb-2 block">
                  Product Description
                </span>
                <input
                  type="text"
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 bg-white"
                />
              </div>

              {/* Product Category */}
              <div className="min-w-0">
                <span className="text-sm font-medium text-gray-600 mb-2 flex items-center">
                  Product Category
                  <ChevronDown className="w-4 h-4 ml-1 text-gray-400 flex-shrink-0" />
                </span>
                <input
                  type="text"
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-400 bg-white"
                />
              </div>

              {/* Product Price */}
              <div className="min-w-0">
                <span className="text-sm font-medium text-gray-600 mb-2 flex items-center">
                  Product Price
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
            {products.map((product, index) => (
              <div key={index} className="px-6 py-4 hover:bg-gray-50">
                <div className="grid grid-cols-[auto_1fr_2fr_1fr_1fr_auto] gap-4 items-center min-w-0">
                  {/* Checkbox */}
                  <div className="flex justify-center">
                    <input
                      type="checkbox"
                      checked={selectedItems.has(index)}
                      onChange={() => handleItemSelect(index)}
                      className="form-checkbox h-4 w-4 text-green-600 rounded border-gray-300"
                    />
                  </div>

                  {/* Product Name */}
                  <div className="text-sm text-gray-900 font-medium truncate">
                    {product.productName}
                  </div>

                  {/* Product Description */}
                  <div className="text-sm text-gray-700 truncate">
                    {product.productDescription}
                  </div>

                  {/* Product Category */}
                  <div className="text-sm text-gray-700 truncate">
                    {product.productCategory}
                  </div>

                  {/* Product Price */}
                  <div className="text-sm text-gray-900 font-semibold text-center truncate">
                    {product.productPrice}
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
          {products.map((product, index) => (
            <div
              key={index}
              className="border-b border-gray-200 px-4 py-4 hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm font-medium text-[#173C36] mb-1">
                    {product.productName}
                  </div>
                  <div className="text-sm text-[#173C36] mb-1">
                    {product.productCategory}
                  </div>
                  <div className="text-xs text-gray-600 truncate">
                    {product.productDescription}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-semibold text-[#173C36]">
                    {product.productPrice}
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

      {/* New Product Form Modal */}
      {showNewProductForm && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center z-50">
          <NewProductForm onClose={handleCloseNewProductForm} />
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
