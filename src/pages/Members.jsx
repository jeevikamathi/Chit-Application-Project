import {
  UserPlusIcon,
  PencilSquareIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { useNavigate, Outlet } from "react-router-dom";

const people = [
  { name: "Lindsay Walton", mobile: "123-456-7890" },
  { name: "Jane Doe", mobile: "987-654-3210" },
];

const chits = [
  { name: "Chit A", amount: "$1000", status: "Active" },
  { name: "Chit B", amount: "$1500", status: "Closed" },
];

export default function Members() {
  const navigate = useNavigate();

  const handleCreateMember = () => {
    navigate("/Members/CreateForm"); 
  };

  return (
    <div className="flex min-h-full flex-col">
    
      <header className="shrink-0 border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex-1 text-xl font-semibold">Members Creation</div>

          <div className="flex items-center gap-x-4">
      
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="block w-full rounded-md border-gray-300 bg-gray-100 py-1.5 pl-3 pr-10 text-sm text-gray-700 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

        
            <button
              type="button"
              onClick={handleCreateMember}
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create Member
            </button>
          </div>
        </div>
      </header>

    
      <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
       
        <main className="flex-[7]">
        
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                          Name
                        </th>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Mobile Number
                        </th>
                        <th className="relative py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {people.map((person) => (
                        <tr key={person.mobile} className="even:bg-gray-50">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                            {person.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.mobile}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                            <div className="flex items-center gap-2 justify-end">
                              <button
                                type="button"
                                className="text-green-600 hover:text-green-800"
                                title="Add"
                              >
                                <UserPlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </button>
                              <button
                                type="button"
                                className="text-indigo-600 hover:text-indigo-800"
                                title="Edit"
                              >
                                <PencilSquareIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>

   
        <aside className="flex-[3]">
          <div className="p-4 bg-white rounded-lg shadow">
         
            <div className="mt-4 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                          Chit Name
                        </th>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Amount
                        </th>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {chits.map((chit) => (
                        <tr key={chit.name} className="even:bg-gray-50">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                            {chit.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {chit.amount}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {chit.status}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                            <button
                              type="button"
                              className="text-green-600 hover:text-green-800"
                              title="Add Amount"
                            >
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      
      <Outlet />
    </div>
  );
}
