import React from 'react';
import NavigationBar from "../NavigationBar/NavigationBar";
import { useNavigate } from "react-router-dom";
<NavigationBar />
const HomePage = () => {
  // Static data for frontliners and projects
  const frontliners = [
    { id: 1, name: 'Sivani', role: 'Field Officer' },
    { id: 2, name: 'Sujith', role: 'Coordinator' },
    { id: 3, name: 'Aayushi', role: 'Project Manager' },
  ];

  const projects = [
    { id: 1, name: 'Community Health Project', status: 'Approved' },
    { id: 2, name: 'Village School Renovation Project', status: 'Approved' },
    { id: 3, name: 'Farmer Support Program', status: 'Escalated' },
  ];

  const handleApprove = (projectId) => {
    // Logic to handle approve action
    console.log(`Project ${projectId} approved.`);
  };

  const handleEscalate = (projectId) => {
    // Logic to handle escalate action
    console.log(`Project ${projectId} escalated.`);
  };

  return (
    <div>
      <NavigationBar />
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-3xl rounded overflow-hidden shadow-lg p-6 bg-white border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-center">Frontliners and Projects Overview</h2>

        {/* Display Frontliners */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Frontliners:</h3>
          <ul className="divide-y divide-gray-300">
            {frontliners.map((frontliner) => (
              <li key={frontliner.id} className="py-2 flex justify-between items-center">
                <span>{frontliner.name}</span>
                <span className="text-gray-500">{frontliner.role}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Display Projects */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Projects:</h3>
          <ul className="divide-y divide-gray-300">
            {projects.map((project) => (
              <li key={project.id} className="py-2 flex justify-between items-center">
                <span>{project.name}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleApprove(project.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition duration-300"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleEscalate(project.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
                  >
                    Escalate
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default HomePage;
