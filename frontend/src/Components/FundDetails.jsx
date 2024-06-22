import React, { useEffect, useState } from 'react';
import axios from 'axios'; // If you are using axios

const FundsCard = () => {
  const [sanctionedAmount, setSanctionedAmount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your backend URL
    const fetchData = async () => {
      try {
        const response = await axios.get(''); // please adjust this
        setSanctionedAmount(response.data.sanctionedAmount);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-20"><div className="loader">Loading...</div></div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white border border-gray-200">
      <div className="font-bold text-xl mb-2">Funds Sanctioned</div>
      <p className="text-gray-700 text-base font-bold">
        {sanctionedAmount ? `₹${sanctionedAmount}` : 'No data available'}
      </p>
    </div>
  );
};

export default FundsCard;
