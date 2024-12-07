// import { useState } from "react";
// import { Menu } from "@headlessui/react";
// import {
//   ChevronDownIcon,
//   MagnifyingGlassIcon,
//   UserPlusIcon,
//   DocumentTextIcon,
//   CurrencyDollarIcon,
// } from "@heroicons/react/20/solid";
// import { useNavigate } from "react-router-dom";

// const chits = [
//   {
//     name: "Chit A",
//     startingDate: "2024-01-01",
//     members: 25,
//     amount: 1000,
//     type: "Fixed",
//     status: "Active",
//   },
//   {
//     name: "Chit B",
//     startingDate: "2024-02-01",
//     members: 30,
//     amount: 2000,
//     type: "Extra",
//     status: "Closed",
//   },
 
// ];

// export default function Chit() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const filteredChits = chits.filter((chit) =>
//     chit.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleNavigate = (type) => {
//     navigate(`/chit/chitform/`); // Pass the chit type in the URL
//   };

//   return (
//     <div>
//       <div className="px-4 sm:px-6 lg:px-8 mt-4">
//         <div className="sm:flex sm:items-center">
//           <div className="sm:flex-auto">
//             <h1 className="text-xl font-bold text-gray-900">CHITS</h1>
//           </div>
//           <div className="flex items-center gap-4 mt-4 sm:mt-0 sm:flex-none">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
//               />
//               <MagnifyingGlassIcon className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
//             </div>
//             <Menu as="div" className="relative inline-block text-left">
//               <Menu.Button className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600">
//                 Create Chit
//                 <ChevronDownIcon className="ml-2 h-5 w-5" />
//               </Menu.Button>
//               <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-400 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                 <div className="py-1">
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => handleNavigate("Commission")}
//                         className={`block px-4 py-2 text-sm ${
//                           active
//                             ? "bg-gray-300 text-gray-900 font-bold "
//                             : "text-gray-700"
//                         }`}
//                       >
//                         Commission Chit
//                       </button>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => handleNavigate("Extra")}
//                         className={`block px-4 py-2 text-sm ${
//                           active
//                             ? "bg-gray-300 text-gray-900 font-bold"
//                             : "text-gray-700"
//                         }`}
//                       >
//                         Extra Chit
//                       </button>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => handleNavigate("Fixed")}
//                         className={`block px-4 py-2 text-sm ${
//                           active
//                             ? "bg-gray-300 text-gray-900 font-bold"
//                             : "text-gray-700"
//                         }`}
//                       >
//                         Fixed Chit
//                       </button>
//                     )}
//                   </Menu.Item>
//                 </div>
//               </Menu.Items>
//             </Menu>
//           </div>
//         </div>

//         <div className="mt-8 flow-root">
//           <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//             <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//               <table className="min-w-full divide-y divide-gray-300">
//                 <thead>
//                   <tr>
//                     <th
//                       scope="col"
//                       className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
//                     >
//                       Chit Name
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                     >
//                       Starting Date
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                     >
//                       Total Members
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                     >
//                       Amount
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                     >
//                       Type
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                     >
//                       Status
//                     </th>
//                     <th
//                       scope="col"
//                       className="relative py-3.5 pl-3 pr-4 sm:pr-3"
//                     >
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white">
//                   {filteredChits.map((chit) => (
//                     <tr key={chit.name} className="even:bg-gray-50">
//                       <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg font-semibold text-gray-900 sm:pl-3">
//                         {chit.name}
//                       </td>
//                       <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                         {chit.startingDate}
//                       </td>
//                       <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                         {chit.members}
//                       </td>
//                       <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                         ${chit.amount}
//                       </td>
//                       <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                         {chit.type}
//                       </td>
//                       <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                         {chit.status}
//                       </td>
//                       <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 flex gap-4 justify-center">
//                         <UserPlusIcon
//                           className="h-6 w-6 text-blue-600 hover:text-blue-500 cursor-pointer"
//                           title="Add Members"
//                         />
//                         <DocumentTextIcon
//                           className="h-6 w-6 text-red-600 hover:text-red-500 cursor-pointer"
//                           title="Details"
//                         />
//                         <CurrencyDollarIcon
//                           className="h-6 w-6 text-green-600 hover:text-green-500 cursor-pointer"
//                           title="Add Payment"
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, MagnifyingGlassIcon, UserPlusIcon, DocumentTextIcon, CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const chits = [
  {
    name: "Chit A",
    startingDate: "2024-01-01",
    members: 25,
    amount: 1000,
    type: "Fixed",
    status: "Active",
  },
  {
    name: "Chit B",
    startingDate: "2024-02-01",
    members: 30,
    amount: 2000,
    type: "Extra",
    status: "Closed",
  },
];

export default function Chit() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredChits = chits.filter((chit) =>
    chit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNavigate = (type) => {
    navigate(`/chit/chitform`) 
  };

  const handleDetails = (chitId) => {
    navigate(`/chit/chitdetailpage`);
  };

  const handlePayment = () => {
    navigate(`/chit/chitpayment`);
  };

  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8 mt-4">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-bold text-gray-900">CHITS</h1>
          </div>
          <div className="flex items-center gap-4 mt-4 sm:mt-0 sm:flex-none">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
            </div>
         
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                Create Chit
                <ChevronDownIcon className="ml-2 h-5 w-5" />
              </MenuButton>
              <MenuItems
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
              >
                <div className="py-1">
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={() => handleNavigate("Commission")}
                        className={`block w-full px-4 py-2 text-left text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        Commission Chit
                      </button>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={() => handleNavigate("Extra")}
                        className={`block w-full px-4 py-2 text-left text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        Extra Chit
                      </button>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={() => handleNavigate("Fixed")}
                        className={`block w-full px-4 py-2 text-left text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        Fixed Chit
                      </button>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>

     
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                      Chit Name
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Starting Date
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Total Members
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Amount
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Type
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {filteredChits.map((chit) => (
                    <tr key={chit.name} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg font-semibold text-gray-900 sm:pl-3">
                        {chit.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {chit.startingDate}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {chit.members}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        ${chit.amount}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {chit.type}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {chit.status}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 flex gap-4 justify-center">
                        <UserPlusIcon
                          className="h-6 w-6 text-blue-600 hover:text-blue-500 cursor-pointer"
                          title="Add Members"
                        />
                        <DocumentTextIcon
                          className="h-6 w-6 text-red-600 hover:text-red-500 cursor-pointer"
                          title="Details"
                          onClick={() => handleDetails(chit.id)}
                        />
                        <CurrencyDollarIcon
                          className="h-6 w-6 text-green-600 hover:text-green-500 cursor-pointer"
                          title="Add Payment"
                          onClick={() => handlePayment()}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};