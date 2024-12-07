import React from "react";

const ChitDetailPage = () => {
  const data = {
    startDate: "04-12-2024",
    chitDate: 10,
    occurrence: 1,
    numMonths: 11,
    commission: 0,
    amount: 500000,
    maxMembers: 10,
    type: "EXTRA",
    members: [
      { name: "Lindsay Walton", mobile: "123-456-7890" },
      { name: "Jane Doe", mobile: "	987-654-3210" },
    ],
    months: [
      {
        date: "10-11-2024",
        startingAmount: 0,
        finalAmount: 0,
        claimedMember: "",
        status: "PENDING",
      },
      {
        date: "10-12-2024",
        startingAmount: 0,
        finalAmount: 0,
        claimedMember: "",
        status: "PENDING",
      },
      {
        date: "10-01-2025",
        startingAmount: 0,
        finalAmount: 0,
        claimedMember: "",
        status: "PENDING",
      },
      {
        date: "10-02-2025",
        startingAmount: 0,
        finalAmount: 0,
        claimedMember: "",
        status: "PENDING",
      },
      {
        date: "10-03-2025",
        startingAmount: 0,
        finalAmount: 0,
        claimedMember: "",
        status: "PENDING",
      },
      // ...add more months
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-4">
        <h1 className="text-xl font-bold text-gray-800 mb-6">Chit Detail</h1>
        <div className="grid grid-cols-12 gap-6">
      
          <div className="col-span-3 bg-gray-50 p-4 border rounded">
            <h2 className="text-lg font-bold text-gray-700 mb-4">Details</h2>
            <p className="mb-2">
              <span className="font-medium">Start Date:</span> {data.startDate}
            </p>
            <p className="mb-2">
              <span className="font-medium">Date Of Chit:</span> {data.chitDate}
            </p>
            <p className="mb-2">
              <span className="font-medium">Occurrence:</span> {data.occurrence}
            </p>
            <p className="mb-2">
              <span className="font-medium">No. of Months:</span>{" "}
              {data.numMonths}
            </p>
            <p className="mb-2">
              <span className="font-medium">Commission:</span> {data.commission}
            </p>
            <p className="mb-2">
              <span className="font-medium">Amount:</span> ₹
              {data.amount.toLocaleString()}
            </p>
            <p className="mb-2">
              <span className="font-medium">Maximum Members:</span>{" "}
              {data.maxMembers}
            </p>
            <p className="mb-2">
              <span className="font-medium">Type:</span> {data.type}
            </p>
          </div>

       
          <div className="col-span-6 overflow-x-auto">
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              Generated Months
            </h2>
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Months</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Starting Amount
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Final Amount
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Claimed Member
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.months.map((month, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">
                      {month.date}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {month.startingAmount}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {month.finalAmount}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {month.claimedMember || "-"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      {month.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

       
          <div className="col-span-3 bg-gray-50 p-4 border rounded">
            <h2 className="text-lg font-bold text-gray-700 mb-4">Members</h2>
            <ul>
              {data.members.map((member, index) => (
                <li key={index} className="mb-2">
                  <p className="font-medium text-gray-800">{member.name}</p>
                  <p className="text-gray-600">{member.mobile}</p>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-gray-500 text-sm italic">Chit Company Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChitDetailPage;
