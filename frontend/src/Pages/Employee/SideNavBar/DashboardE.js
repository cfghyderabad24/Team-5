import React, { useState } from 'react';
import { LayoutDashboard,Bell,Ticket,CircleUserRound,ScanBarcode,History,UserPlus,BadgePlus,User,UserMinus,ReceiptIndianRupee,StickyNote,Files } from "lucide-react";
import { Sidebar, SidebarItem } from "./Sidebare";
const Dashboard = () => {
  return (
    <div>
      <div className="">
      <Sidebar>
      <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              to=""
              active
       />

        
      </Sidebar>
      </div>
  </div>
  );
};

export default Dashboard;