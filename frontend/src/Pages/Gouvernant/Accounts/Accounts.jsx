import React, { useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";

// Simple icon components to avoid external dependencies
const Icons = {
  Bell: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  ),
  ChevronDown: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  ),
  Search: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  ),
  Dashboard: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
    </svg>
  ),
  Statistics: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 20V10M18 20V4M6 20v-6" />
    </svg>
  ),
  Users: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  Regions: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Devices: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
      <line x1="2" y1="20" x2="2.01" y2="20"></line>
    </svg>
  ),
  Settings: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.6V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  ),
  Info: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  ),
  Sun: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400" {...props}>
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  )
};

// Navigation Item Component
function NavItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center px-3 py-2 text-xs ${active ? 'bg-blue-50 text-blue-500' : 'text-gray-600 hover:bg-gray-100'}`}>
      <div className="mr-2">{icon}</div>
      <span className={active ? 'font-medium' : ''}>{label}</span>
    </div>
  );
}

// Badge Component
function Badge({ color, children }) {
  const colorClasses = {
    yellow: "bg-yellow-500",
    green: "bg-green-500",
    blue: "bg-blue-500"
  };
  
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium text-white ${colorClasses[color]}`}>
      {children}
    </span>
  );
}

// Button Component
function Button({ variant = "default", children, onClick }) {
  const variantClasses = {
    default: "bg-gray-200 text-gray-600 hover:bg-gray-300",
    primary: "bg-blue-500 text-white hover:bg-blue-600"
  };
  
  return (
    <button 
      className={`px-3 py-1 rounded text-xs ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function AccountsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [accounts, setAccounts] = useState([
    { id: 1, name: "Soulaimane Ouhmida", type: "Gouvernant", typeColor: "yellow", region: "Region 1", city: "Marrakech" },
    { id: 2, name: "Fatima Zahra Keladi", type: "Operateur", typeColor: "green", region: "Region 2", city: "Casablanca" },
    { id: 3, name: "Hamza Ettakadoumi", type: "Admin", typeColor: "blue", region: "Region 3", city: "Rabat" },
  ]);

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const handleCreateAccount = () => alert("Create account clicked");

  const handleUpdateAccount = (id) => alert(`Update account ${id}`);

  const handleDeleteAccount = (id) => {
    if (window.confirm(`Are you sure you want to delete account ${id}?`)) {
      setAccounts(accounts.filter((account) => account.id !== id));
    }
  };

  const filteredAccounts = accounts.filter(
    (account) =>
      account.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      account.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      account.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      account.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 flex">
      <Navbar />

      <main className="flex-1 px-10 py-4">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-gray-700">
              <div className="text-lg font-medium">8:00 AM</div>
              <div className="text-xs text-gray-500">Sun 12 March, 2023</div>
            </div>
            <div className="ml-8 flex items-center">
              <span className="text-2xl font-medium">12°C</span>
            </div>
          </div>
          <div className="flex items-center">
            <button className="relative p-2 mr-4">
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center border rounded-full px-4 py-2 bg-white">
              <span className="mr-2">Soulaimane - Gouvernant</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-medium text-gray-700">Accounts ({accounts.length})</h1>
            <div className="flex items-center">
              <div className="relative mr-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border rounded-lg w-64"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handleCreateAccount}>
                Create account
              </button>
            </div>
          </div>

          {/* Accounts Table */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 px-4 text-xs font-medium text-gray-500">Account name</th>
                  <th className="text-left py-2 px-4 text-xs font-medium text-gray-500">Type</th>
                  <th className="text-left py-2 px-4 text-xs font-medium text-gray-500">Region</th>
                  <th className="text-left py-2 px-4 text-xs font-medium text-gray-500">City</th>
                  <th className="text-left py-2 px-4 text-xs font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAccounts.map((account) => (
                  <tr key={account.id} className="border-b border-gray-200">
                    <td className="py-2 px-4 text-xs">{account.name}</td>
                    <td className="py-2 px-4 text-xs">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium text-white bg-${account.typeColor}-500`}>
                        {account.type}
                      </span>
                    </td>
                    <td className="py-2 px-4 text-xs">{account.region}</td>
                    <td className="py-2 px-4 text-xs">{account.city}</td>
                    <td className="py-2 px-4 text-xs">
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 rounded text-xs bg-gray-200 hover:bg-gray-300" onClick={() => handleUpdateAccount(account.id)}>
                          Update
                        </button>
                        <button className="px-3 py-1 rounded text-xs bg-red-500 text-white hover:bg-red-600" onClick={() => handleDeleteAccount(account.id)}>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </main>
    </div>
  );
}