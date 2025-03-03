// pages/Login.jsx
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import login from "../assets/Reset password-pana (1).png";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = async (e) => {
    e.preventDefault();
     try {
      await signInWithEmailAndPassword(auth,email,password);
      console.log("user Login successfully")
      window.location.href="/dashboard";
      toast.success("User Login Successfully",{position:'top-center'})
     } catch (error) {
      console.log(error.message)
      toast.success("error.message",{position:'bottom-center'})
     }

 
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-8 bg-white shadow-md rounded-2xl flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src={login}
            className="w-full max-w-xs lg:max-w-sm h-auto"
            alt="Login"
          />
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2 p-6">
          <h2 className="text-4xl font-bold text-[#88c2bb] mb-5 text-center">
            Login
          </h2>


          <form onSubmit={handleLogin} className="space-y-5 mt-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#88C2BB]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#88C2BB]"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-[#88C2BB] text-white rounded-md hover:bg-[#6ea9a2] transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#88c2bb] font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
