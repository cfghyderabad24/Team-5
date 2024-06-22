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

        <SidebarItem
              icon={<CircleUserRound size={20} />}
              text="My Profile"
              to="myprofilee"
              
       /> 

<SidebarItem
              icon={<User size={20}/>}
              text="Clients"
              dropdownItems={[
                { text: "Add Clients", icon:<UserPlus />,to: "add-client" },
                { text: "View Clients", icon:<UserMinus />, to: "view-client" },
                { text: "Add Company", icon:<UserMinus />, to: "addcompany" }
                // { text: "View Clients", icon:<UserMinus />, to: "view-client" }
              ]}
            />
         <SidebarItem
              icon={<StickyNote size={20} />}
              text="Reminder"
              to="reminderse"
         />
          <SidebarItem
              icon={<Files size={20}/>}
              text="View Documents"
              dropdownItems={[
                // { text: "IT Returns", to: "itreturnse" },
                { text: "View KYC", to: "viewkyce" },
                { text: "View GST Returns", to: "viewgstreturnse" },
                { text: "View IT Returns", to: "viewitreturnse" },
                { text: "View ROC Filings", to: "viewrocfilingse" },
                // { text: "GST Notice", to: "gstnoticee" },
                { text: "View License", to: "viewlicensee" },
                { text: "View CMA Preparation", to: "viewcmae" },
                { text: "View GST Notice", to: "viewgstnoticee" },
                // { text: "GST Returns", to: "gstreturnse" },
                // { text: "ROC Filings", to: "rocfilingse" },
                // { text: "License", to: "licensee" },
                // { text: "CMA Preparation", to: "cmae" },
              ]}
              
            />

      </Sidebar>
      </div>
  </div>
  );
};

export default Dashboard;