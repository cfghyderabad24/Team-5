import React, { useState } from "react";

const EvaluationVisit = () => {
  const [isEvaluationVisitChecked, setIsEvaluationVisitChecked] = useState(false);

  const handleEvaluationVisitChange = () => {
    setIsEvaluationVisitChecked(!isEvaluationVisitChecked);
  };

  const handleUpdate = () => {
    // Logic for handling the update action
    alert(`Evaluation Visit: ${isEvaluationVisitChecked}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 shadow-md">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Evaluation Visit Overview</h1>
        <p className="mb-4">
          An evaluation visit is conducted to assess the effectiveness and impact
          of an NGO's project. During this visit, evaluators gather data, analyze
          outcomes, and determine whether the project objectives are being met.
          It is an important step in ensuring the accountability and success of
          the NGO's initiatives.
        </p>
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={isEvaluationVisitChecked}
            onChange={handleEvaluationVisitChange}
            className="mr-2"
          />
          <span>Evaluation Visit</span>
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

export default EvaluationVisit;
