import React, { useState } from "react";
import {
  PlayIcon,
  StopIcon,
  PauseIcon,
  RefreshIcon,
  ArrowRightIcon,
  ExclamationIcon,
  ChevronDoubleRightIcon,
  CheckIcon,
  PaperAirplaneIcon,
  PencilIcon,
  ClipboardIcon,
  TrashIcon,
} from "@heroicons/react/solid";

const OrderProcessing = () => {
  // Active order details
  const [order] = useState({
    id: "ORD123",
    jobType: "Baking",
    recipe: "Chocolate Cake",
    createdAt: "2025-03-04T10:00:00Z",
  });

  // Process Details
  const [process] = useState({
    inputs: [
      { name: "Wheat", percentage: 60 },
      { name: "Water", percentage: 40 },
    ],
    output: "Flour",
  });
  const [filter, setFilter] = useState("All");
  // Sample order list
  const [orders] = useState([
    { id: "ORD123", jobType: "Baking", recipe: "Chocolate Cake" },
    { id: "ORD124", jobType: "Mixing", recipe: "Pizza Dough" },
    { id: "ORD125", jobType: "Manufacturing", recipe: "Bread" },
  ]);

  // Reusable Button Component
  const ActionButton = ({ label, icon: Icon, color }) => (
    <button className={`flex items-center gap-2 px-4 py-2 text-white rounded-lg hover:opacity-80 ${color}`}>
      <Icon className="h-5 w-5" />
      {label}
    </button>
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center gap-6">
      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <ActionButton label="Start" icon={PlayIcon} color="bg-green-500" />
        <ActionButton label="Stop" icon={StopIcon} color="bg-red-500" />
        <ActionButton label="Hold" icon={PauseIcon} color="bg-yellow-500" />
        <ActionButton label="Resume" icon={CheckIcon} color="bg-blue-500" />
        <ActionButton label="Reset" icon={RefreshIcon} color="bg-gray-500" />
        <ActionButton label="Enable Feeding" icon={ChevronDoubleRightIcon} color="bg-indigo-500" />
        <ActionButton label="Next Receiver" icon={ArrowRightIcon} color="bg-purple-500" />
        <ActionButton label="Emergency" icon={ExclamationIcon} color="bg-red-700" />
      </div>

      {/* Active Order Details */}
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Active Order</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600 font-semibold">Order ID:</span>
            <span className="text-gray-900">{order.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-semibold">Job Type:</span>
            <span className="text-gray-900">{order.jobType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-semibold">Recipe:</span>
            <span className="text-gray-900">{order.recipe}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 font-semibold">Created At:</span>
            <span className="text-gray-900">{new Date(order.createdAt).toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Process Details */}
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Process Details</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Inputs</h3>
          <ul className="mt-2 space-y-2">
            {process.inputs.map((input, index) => (
              <li key={index} className="flex justify-between">
                <span className="text-gray-600">{input.name}</span>
                <span className="text-gray-900 font-semibold">{input.percentage}%</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Output</h3>
          <p className="mt-2 text-gray-900 font-semibold">{process.output}</p>
        </div>
      </div>
      {/* Filter Drop-down */}
      <div className="mb-4">
        <label className="text-gray-600 font-semibold mr-2">Filter by:</label>
        <select
          className="border p-2 rounded-lg"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Baking">Baking</option>
          <option value="Mixing">Mixing</option>
        </select>
      </div>

      {/* Order List */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
      + Create Order
    </button>
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Order List</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Job Type</th>
              <th className="border p-2">Recipe</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="text-center border">
                <td className="border p-2">{order.id}</td>
                <td className="border p-2">{order.jobType}</td>
                <td className="border p-2">{order.recipe}</td>
                <td className="border p-2 flex justify-center gap-3">
                  <button className="text-blue-500 hover:text-blue-700">
                    <PaperAirplaneIcon className="h-5 w-5" title="Send" />
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-700">
                    <PencilIcon className="h-5 w-5" title="Edit" />
                  </button>
                  <button className="text-green-500 hover:text-green-700">
                    <ClipboardIcon className="h-5 w-5" title="Copy" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <TrashIcon className="h-5 w-5" title="Delete" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderProcessing;
