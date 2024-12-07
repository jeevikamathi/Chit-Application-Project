import React, { useState } from "react";

export default function ChitPayment() {
  const [startingAmount, setStartingAmount] = useState(500000);
  const [finalAmount, setFinalAmount] = useState(500000);
  const [afterDeduction, setAfterDeduction] = useState(450000);
  const [selectedMember, setSelectedMember] = useState("Lindsay Walton");

  const members = ["Lindsay Walton", "Jane Doe", "Clara"];

  const handleSubmit = () => {
    alert(`Payment submitted for ${selectedMember}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
    
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-900">Chit Payment</h1>
          <span className="text-sm text-gray-500 font-semibold uppercase">
            EXTRA
          </span>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 text-blue-900 p-4 rounded-md shadow">
            <h2 className="text-lg font-semibold">10-11-2024</h2>
            <p className="mt-2 text-sm">
              Final Amount: <strong>₹500,000</strong>
            </p>
            <p className="text-sm">
              Status: <strong>PENDING</strong>
            </p>
          </div>

    
          <div className="md:col-span-2">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
         
              <div>
                <label
                  htmlFor="startingAmount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Starting Amount
                </label>
                <input
                  type="text"
                  id="startingAmount"
                  value={startingAmount}
                  readOnly
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

          
              <div>
                <label
                  htmlFor="finalAmount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Final Amount
                </label>
                <input
                  type="text"
                  id="finalAmount"
                  value={finalAmount}
                  readOnly
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

        
              <div>
                <label
                  htmlFor="afterDeduction"
                  className="block text-sm font-medium text-gray-700"
                >
                  After Deduction
                </label>
                <input
                  type="text"
                  id="afterDeduction"
                  value={afterDeduction}
                  readOnly
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

           
              <div>
                <label
                  htmlFor="member"
                  className="block text-sm font-medium text-gray-700"
                >
                  Member
                </label>
                <select
                  id="member"
                  value={selectedMember}
                  onChange={(e) => setSelectedMember(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  {members.map((member, index) => (
                    <option key={index} value={member}>
                      {member}
                    </option>
                  ))}
                </select>
              </div>

            
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 sm:text-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
