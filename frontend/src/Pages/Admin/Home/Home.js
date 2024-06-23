import React, { useState } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";

const Home = ({ images }) => {
  // Dummy data for escalated projects
  const escalatedProjects = [
    {
      id: 1,
      projectName: "School Infrastructure Development",
      frontliner: "Sivani Varada",
      description: "Infrastructure",
    },
    {
      id: 2,
      projectName: "Community Health Project",
      frontliner: "Sujith",
      description: "Health",
    },
  ];

  const handleApproveFundsClick = (projectId) => {
    // Dummy function to simulate approving funds
    console.log(`Funds approved for Project ID ${projectId}`);
    // You can implement actual API call here to approve funds for projectId
  };

  return (
    <div className="bg-gray-100">
      <NavigationBar />
      <div className="flex flex-wrap justify-center mt-10">
        {escalatedProjects.map((project) => (
          <div key={project.id} className="max-w-lg bg-white shadow-md rounded-lg overflow-hidden m-4">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.projectName}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-gray-700 mb-2"><strong>Frontliner: </strong>{project.frontliner}</p>
              <button
                onClick={() => handleApproveFundsClick(project.id)}
                className="bg-yellow-500 text-black hover:bg-blue-700  font-bold py-2 px-4 rounded-full"
              >
                Approve Funds
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
