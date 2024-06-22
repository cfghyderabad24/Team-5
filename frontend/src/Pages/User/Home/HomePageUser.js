import React, { useState, useEffect } from "react";
import axios from "axios";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleFieldVisitClick = (projectId) => {
    // Placeholder function for handling field visit action
    navigate("/frontliner/FieldVisit");
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6">
        <div className="w-full max-w-4xl">
          {projects.map((project) => (
            <div key={project._id} className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h2 className="text-xl font-bold mb-2">{project.name}</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Total Amount: {project.totalAmount}</p>
                  <p>Department: {project.dept}</p>
                  <p>Status: {project.status}</p>
                  <p>Cycle: {project.cycle}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Sanctioned:</h3>
                  {project.sanctioned.map((sanction) => (
                    <div key={sanction._id}>
                      <p>Amount: {sanction.amount}</p>
                      <p>Date: {new Date(sanction.date).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Due Dates:</h3>
                  {Object.entries(project.dueDates).map(([key, value]) => (
                    <div key={value._id}>
                      <p>{key.replace(/([A-Z])/g, ' $1').trim()}: {new Date(value.date).toLocaleDateString()}</p>
                      <p>Status: {value.status}</p>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => handleFieldVisitClick(project._id)}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Initiate Field Visit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
