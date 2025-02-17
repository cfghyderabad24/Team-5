// Import necessary dependencies and components
import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  lazy,
  Suspense,
} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { ChevronFirst, ChevronRight, ChevronDown } from "lucide-react";
import axios from "axios";
import MyLogo from "../../../Images/cryLogo.jpeg";

// Lazy-loaded components
import MainCompo from "../Home/Home";
// import ViewBills from "./Viewbills";
import AddCompany from "../Clients/AddCompany";
const ViewKYC = lazy(() => import("../Documents/KYC/ViewKYC"));
const EmployeeAttendance = lazy(() => import("../Employee/Employeeattendance"));
const Reminder = lazy(() => import("../Reminder/Reminder"));
const AddClient = lazy(() => import("../Clients/AddClient"));
const ViewClient = lazy(() => import("../Clients/ViewClient"));
const AddEmployee = lazy(() => import("../Employee/AddEmployee"));
const ManageEmployees = lazy(() => import("../Employee/ViewEmployee"));
const GSTNoticeA = lazy(() => import("../Documents/GSTNotice/SendGSTNotice"));
const GSTreturns = lazy(() => import("../Documents/GSTReturns/SendGSTReturns"));
const ITreturns = lazy(() => import("../Documents/ITReturns/SendITreturns"));
const SendCMApreparation = lazy(() => import("../Documents/CMA/SendCMApreparation"));
const SendNewROCfilings = lazy(() => import("../Documents/ROCFiling/SendROCfilings"));
const ViewGSTReturns = lazy(() => import("../Documents/GSTReturns/ViewGSTReturns"));
const ViewGSTNotice = lazy(() => import("../Documents/GSTNotice/ViewGSTNotice"));
const ViewCMAPreparation = lazy(() => import("../Documents/CMA/ViewCMAPreparation"));
const ITDetailsInNewTab = lazy(() =>
  import("../../../Components/Admin/ITReturnsDetails")
);

// Create context for sidebar state
const SidebarContext = createContext();

// Sidebar component
function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    closeAllDropdowns();
    setExpanded((prevState) => !prevState);
  };

  const closeAllDropdowns = () => {
    setDropdownOpen(false); // Set the state of dropdown to closed
    // Add similar logic for other dropdowns if needed
  };

  useEffect(() => {
    async function fetchUserData() {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "https://sstaxmentors-server.vercel.app/admin/emailname",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setUserData(response.data);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchUserData();
  }, []);

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not found in localStorage");
        return;
      }

      const response = await axios.post(
        "https://sstaxmentors-server.vercel.app/admin/logout",
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        localStorage.clear();
        navigate("/");
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`h-screen fixed top-0 left-0 bg-white border-r border-gray-200 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 transition-all ${
          expanded ? "w-72" : "w-16"
        }`}
      >
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-3 pb-2 flex justify-between items-center">
            <img
              src={MyLogo}
              className={`overflow-hidden transition-all ${
                expanded ? "w-60" : "w-0"
              }`}
              alt=""
              style={{height: '70px', width: '120px'}}
            />
            <button
              onClick={toggleSidebar}
              className="p-0.5 pl-3 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? <ChevronFirst /> : <ChevronRight />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>
        </nav>
      </aside>

      {/* Main content */}
      <div className={`flex-1 overflow-y-auto ${expanded ? "pl-72" : "pl-16"}`}>
        <Suspense
          fallback={
            <div className="flex space-x-2 justify-center items-center bg-white h-screen ">
              <span className="sr-only">Loading...</span>
              <div
                className="h-8 w-8 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "-0.3s" }}
              ></div>
              <div
                className="h-8 w-8 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "-0.15s" }}
              ></div>
              <div className="h-8 w-8 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
          }
        >
          {/* Routing for sidebar components */}
          <Routes>
            <Route path="/" element={<MainCompo />} />
            <Route path="/remindersa" element={<Reminder />} />
            <Route path="/add-client" element={<AddClient />} />
            <Route path="/View-client" element={<ViewClient />} />
            <Route path="/View-employee" element={<ManageEmployees />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/gstreturnsa" element={<GSTreturns />} />
            <Route path="/viewgstreturnsa" element={<ViewGSTReturns />} />
            <Route path="/gstnoticea" element={<GSTNoticeA />} />
            <Route path="/viewgstnoticea" element={<ViewGSTNotice />} />
            <Route path="/itreturnsa" element={<ITreturns />} />
            <Route path="/rocfilingsa" element={<SendNewROCfilings />} />
            <Route path="/cmaa" element={<SendCMApreparation />} />
            <Route path="/viewcmaa" element={<ViewCMAPreparation />} />
            <Route path="/addcompany" element={<AddCompany/>} />
            <Route path="/employeeattendance" element={<EmployeeAttendance/>} />
            <Route path="/viewkyc" element={<ViewKYC />} />


            <Route path="/itdetails" component={ITDetailsInNewTab} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

// SidebarItem component
function SidebarItem({ text, icon, to, dropdownItems }) {
  const { expanded } = useContext(SidebarContext);
  const [hovered, setHovered] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (!expanded) {
      // Close dropdown when sidebar collapses
      setDropdownOpen(false);
    }
  }, [expanded]);

  return (
    <li
      className={`relative group ${expanded ? "my-4" : "my-5"} border-l`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "margin 0.3s" }}
    >
      {dropdownItems ? (
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className={`flex items-center w-full py-2 px-3 font-medium rounded-md cursor-pointer transition-all ${
              hovered
                ? "bg-gray-100 text-blue-600"
                : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            }`}
          >
            <div className="flex items-center">
              {icon && React.cloneElement(icon, { color: "#3c82f6" })}
              <span className={`ml-3 ${expanded ? "block" : "hidden"}`}>
                {text}
              </span>
            </div>
            <ChevronDown
              className={`h-5 w-5 ml-auto transition-transform transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {dropdownOpen && (
            <ul className="relative top-0 mt-2 mx-4 bg-white z-10">
              {dropdownItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  style={{ marginBottom: "8px" }}
                >
                  <Link
                    to={item.to}
                    className="flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                  >
                    {item.icon &&
                      React.cloneElement(item.icon, { color: "#3c82f6" })}
                    <span className="ml-3">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <Link
          to={to}
          className={`flex items-center py-2 px-3 font-medium rounded-md cursor-pointer transition-all ${
            hovered
              ? "bg-gray-100 text-blue-600"
              : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
          }`}
        >
          <div className="flex items-center">
            {icon && React.cloneElement(icon, { color: "#3c82f6" })}
            <span className={`ml-3 ${expanded ? "block" : "hidden"}`}>
              {text}
            </span>
          </div>
        </Link>
      )}
    </li>
  );
}
export { Sidebar, SidebarItem };
