import React from 'react';

const FundsCard = () => {
  const sanctionedAmount = 500000; // Static sanctioned amount

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-xl rounded overflow-hidden shadow-lg p-6 bg-white border border-gray-200">
        <div className="font-bold text-2xl mb-4 text-center">Funds Sanctioned</div>
        <p className="text-gray-700 text-lg mb-4">
          Total amount sanctioned: <span className="font-bold">₹{sanctionedAmount.toLocaleString()}</span>
        </p>
        <p className="text-gray-700 text-base">
          This represents the total funds allocated for ongoing projects.
        </p>
      </div>
    </div>
  );
};

export default FundsCard;
