// import React from "react";

// const ChitForm = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Create a Chit
//         </h2>

     
//         <div className="mb-4">
//           <label
//             htmlFor="name"
//             className="block text-gray-700 font-medium mb-2"
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Enter name"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

    
//         <div className="mb-4">
//           <label
//             htmlFor="startDate"
//             className="block text-gray-700 font-medium mb-2"
//           >
//             Start Date
//           </label>
//           <input
//             type="date"
//             id="startDate"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

       
//         <div className="mb-4">
//           <label
//             htmlFor="chitDate"
//             className="block text-gray-700 font-medium mb-2"
//           >
//             Date of Chit
//           </label>
//           <select
//             id="chitDate"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select Date</option>
//             {[...Array(31)].map((_, index) => (
//               <option key={index} value={index + 1}>
//                 {index + 1}
//               </option>
//             ))}
//           </select>
//         </div>

   
//         <div className="mb-4">
//           <label
//             htmlFor="occurrence"
//             className="block text-gray-700 font-medium mb-2"
//           >
//             Occurrence
//           </label>
//           <select
//             id="occurrence"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select Occurrence</option>
//             <option value="monthly">Every Month</option>
//             <option value="twice">Twice a Month</option>
//           </select>
//         </div>

    
//         <div className="mb-4">
//           <label
//             htmlFor="months"
//             className="block text-gray-700 font-medium mb-2"
//           >
//             Number of Months
//           </label>
//           <input
//             type="number"
//             id="months"
//             placeholder="Enter number of months"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

      
//         <div className="mb-4">
//           <label
//             htmlFor="commission"
//             className="block text-gray-700 font-medium mb-2"
//           >
//             Commission (%)
//           </label>
//           <input
//             type="number"
//             id="commission"
//             placeholder="Enter commission percentage"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="amount"
//             className="block text-gray-700 font-medium mb-2"
//           >
//             Amount
//           </label>
//           <input
//             type="number"
//             id="amount"
//             placeholder="Enter amount"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

       
//         <div className="mb-6">
//           <label
//             htmlFor="maxMembers"
//             className="block text-gray-700 font-medium mb-2"
//           >
//             Maximum Members
//           </label>
//           <input
//             type="number"
//             id="maxMembers"
//             placeholder="Enter max members"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

       
//         <div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             Next
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ChitForm;



import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setMonths } from "../redux/monthSlice"; // Assuming redux actions are set properly
import { useNavigate } from "react-router-dom"; // For navigation

const ChitForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    chitDate: "",
    occurrence: "",
    months: "",
    commission: "",
    amount: "",
    maxMembers: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate(); // React Router hook to navigate between pages

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleNext = () => {
    const { startDate, months } = formData;
    if (startDate && months > 0) {
      // Dispatch redux action to set months
      dispatch(setMonths({ startDate, numMonths: Number(months) }));
      // Navigate to the table page
      navigate("/chitform/chitformtable");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
     
      <form
        className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create a Chit
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Object.keys(formData).map((key) => (
            <div className="mb-4" key={key}>
              <label
                htmlFor={key}
                className="block text-gray-700 font-medium mb-2"
              >
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </label>
              {key === "chitDate" || key === "occurrence" ? (
                <select
                  id={key}
                  value={formData[key]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {key === "chitDate" ? (
                    <>
                      <option value="">Select Date</option>
                      {[...Array(31)].map((_, index) => (
                        <option key={index} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </>
                  ) : (
                    <>
                      <option value="">Select Occurrence</option>
                      <option value="monthly">Every Month</option>
                      <option value="twice">Twice a Month</option>
                    </>
                  )}
                </select>
              ) : (
                <input
                  type={key === "startDate" ? "date" : "text"}
                  id={key}
                  value={formData[key]}
                  onChange={handleInputChange}
                  placeholder={`Enter ${key}`}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={handleNext}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChitForm;