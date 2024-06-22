import React, { useState } from 'react';

const FieldVisit = ({projectId}) => {
  const [isFieldVisitChecked, setIsFieldVisitChecked] = useState(false);

  const handleFieldVisitChange = () => {
    setIsFieldVisitChecked(!isFieldVisitChecked);
  };

  const handleUpdate = () => {
    // Logic for handling the update action
    alert(`Field Visit: ${isFieldVisitChecked}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 shadow-md">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Field Visit Overview</h1>
        <p className="mb-4">
          Our NGO regularly conducts field visits to understand the on-ground realities, interact with community members, and monitor the progress of our projects. These visits are crucial for assessing the impact of our initiatives and identifying areas that need improvement.
        </p>
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={isFieldVisitChecked}
            onChange={handleFieldVisitChange}
            className="mr-2"
          />
          <span>Field Visit</span>
        </label>
        <button
          onClick={handleUpdate}
          className="bg-brightRed text-white font-semibold py-2 px-4 rounded hover:bg-brightRedLight transition duration-300 ease-in-out w-full"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default FieldVisit;
