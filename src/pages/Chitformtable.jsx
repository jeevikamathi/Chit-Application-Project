import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateMonthDate } from "../redux/MonthSlice";

const Chitformtable= () => {
  const dispatch = useDispatch();
  const months = useSelector((state) => state.months.months);

  // Handler for updating the month date in Redux
  const handleDateChange = (id, date) => {
    dispatch(updateMonthDate({ id, date }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="mt-6 w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Months Table</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Month</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {months.map((month) => (
              <tr key={month.id}>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {month.id}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input
                    type="date"
                    value={month.date}
                    onChange={(e) => handleDateChange(month.id, e.target.value)} // Handle date change
                    className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      
        <div className="mt-6">
          <button
            type="button"
            onClick={() => alert("Data submitted!")} // You can replace this with your submit logic
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chitformtable;
