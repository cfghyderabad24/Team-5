import React, { useState, useEffect } from "react";
import axios from "axios";
import HomepageCarousel from "../../../Components/HomePageCarousel";
import NavigationBar from "../NavigationBar/NavigationBar";

// Import the NavigationBar component

import cardBg1 from "../../../Images/1.png";
import cardBg2 from "../../../Images/4.png";
import cardBg3 from "../../../Images/4.png";
import cardBg4 from "../../../Images/1.png";
import { StepperWithContent } from "../../../Components/progressStepbar";
import BarChart from "../Charts/chart1";
import FundsCard from "../../../Components/FundDetails";

function Project() {
  const [counts, setCounts] = useState({
    totalReminders: 0,
    totalNotifications: 0
  });

  useEffect(() => {
    async function fetchClientsCounts() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://sstaxmentors-server.vercel.app/user/home/api/clients-counts",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCounts(response.data);
      } catch (error) {
        console.error("Error fetching clients counts:", error);
      }
    }
    fetchClientsCounts();
  }, []);

  return (
    <>
    <div
      className="bg-gray-100 min-h-screen overflow-hidden"
      style={{ overflowX: "hidden", overflowY: "hidden" }}
    >
      <style>
        {`
          .main-card {
            color: #fff;
            padding: 40px;
            background-size: cover;
            background-position: center;
          }
          
          .main-card h2 {
            margin-bottom: 20px;
            font-size: 24px;
          }
          
          .main-card p {
            font-size: 36px;
          }

          .card1 {
            background-image: url(${cardBg1});
            
          }

          .card2 {
            background-image: url(${cardBg2});
            color: #0440DE;
          }

          .card3 {
            background-image: url(${cardBg3});
            color: #0440DE;
          }

          .card4 {
            background-image: url(${cardBg4});
            
          }
        `}
      </style>
      <NavigationBar />
      <div className="flex flex-wrap h-screen" style={{ paddingTop: "10px" }}>
        <div className="w-full p-5 mt-8">
          {/* <HomepageCarousel className="mt-10" /> */}
          <StepperWithContent/>
        </div>
        <BarChart/>
      </div>
    </div>
    <FundsCard/>
    </>
  );
}

export default Project;
