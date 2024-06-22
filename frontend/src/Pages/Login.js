import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import Cookies from "js-cookie"; // Import js-cookie
import ImageCarousel from "../Components/LoginPageCarousel";
import logo from "../Images/cryLogo.jpeg";
import backgroundImage from "../Images/background.png";
import banner from "../assets/images/banner.png"

function Login() {
  const [email, setEmail] = useState(Cookies.get("email") || ""); // Initialize with cookie value if exists
  const [password, setPassword] = useState(Cookies.get("password") || ""); // Initialize with cookie value if exists
  const [userType, setUserType] = useState("user");
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loginImages, setLoginImages] = useState([]);
  const [rememberMe, setRememberMe] = useState(Cookies.get("rememberMe") === "true"); // Initialize with cookie value if exists

  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://sstaxmentors-server.vercel.app/admin/loginImages");
        setLoginImages(response.data.loginImages);
      } catch (error) {
        message.error("Error loading images");
      }
    };

    fetchData();
  }, []);

  const login = async () => {
    try {
        setLoading(true);
        const response = await fetch("http://localhost:8000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, role: userType }),
        });
        const data = await response.json();
        if (response.ok) {
            if (userType === "frontliner") {
                navigate("/frontliner");
            } else if (userType === "senior manager") {
                navigate("/senior-manager");
            }
            else if (userType === "general manager") {
                navigate("/general-manager");
            }
        }

    }
      catch (err) {
      message.error("Invalid Credentials");
      setLoginError(true);
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-screen font-poppins-regular"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="max-w-screen-xl w-full md:w-4/5 lg:w-3/5 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:order-2 bg-white p-8 md:p-10 flex justify-center items-center rounded-lg drop-shadow-2xl">
          <div className="w-full max-w-sm">
            <a href="/">
              <img src={logo} alt="Logo" className="w-full mb-8" />
            </a>
            <div className="mb-8">
              <label className="block mb-2 text-gray-400">User Type:</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={userType === "frontliner"}
                    onChange={() => setUserType("frontliner")}
                    style={{
                      marginRight: "0.5rem",
                      backgroundColor: "#3c82f6",
                    }}
                  />
                  <span className="text-gray-700">Frontliner</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={userType === "senior manager"}
                    onChange={() => setUserType("senior manager")}
                    style={{
                      marginRight: "0.5rem",
                      backgroundColor: "#3c82f6",
                    }}
                  />
                  <span className="text-gray-700">Sr Manager</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={userType === "general manager"}
                    onChange={() => setUserType("general manager")}
                    style={{
                      marginRight: "0.5rem",
                      backgroundColor: "#3c82f6",
                    }}
                  />
                  <span className="text-gray-700">General Manager</span>
                </label>
              </div>
            </div>
            <div className="mb-8">
              <label className="block mb-2 text-gray-400">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 w-full"
              />
            </div>
            <div className="mb-8">
              <label className="block mb-2 text-gray-400">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 w-full"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex justify-center">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  login();
                }}>
                <button
                  type="submit"
                  className="w-full rounded bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  disabled={loading}>
                  {loading ? "Loading..." : "Login"}
                </button>
              </form>
            </div>
            {loginSuccess && (
              <div className="mt-4 text-green-500">
                Login Successful! Redirecting...
              </div>
            )}
            {loginError && (
              <div className="mt-4 text-red-500">
                Invalid Credentials. Please try again.

              </div>
            )}
            {loginError && (
              <div className="mt-4 text-red-500">
                Invalid Credentials. Please try again.
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:w-1/2 md:order-1 md:flex justify-center items-center mt-6 md:mt-0">
          <div>
            <ImageCarousel style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
