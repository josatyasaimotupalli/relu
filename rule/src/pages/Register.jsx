// pages/Register.jsx
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "../firebase";
import { Link } from "react-router-dom";
import signup from "../assets/Sign up-pana.png";
import { setDoc,doc } from "firebase/firestore";
import { toast } from "react-toastify";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
     await createUserWithEmailAndPassword(auth,email,password);
     const user = auth.currentUser;
     console.log(user);
     if(user){
      await setDoc(doc(db,"User",user.uid),{email:user.email});
     }
     toast.success("User Registered Successfully",{position:'top-center'})
     console.log('User Registered Successfully')
    } catch (error) {
      console.log(error.message)
      toast.success("error.message",{position:'bottom-center'})
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
  <div className="w-full max-w-3xl p-8 bg-white shadow-md rounded-2xl flex flex-col lg:flex-row">
    
    {/* Left Side - Image */}
    <div className="lg:w-1/2 flex justify-center items-center p-6">
      <img src={signup} className="w-full max-w-xs lg:max-w-sm h-auto" alt="Register" />
    </div>

    {/* Right Side - Registration Form */}
    <div className="lg:w-1/2 p-6">
      <h2 className="text-4xl text-[#88c2bb] font-bold text-center mb-5">Sign Up</h2>
      

      <form onSubmit={handleRegister} className="space-y-5 mt-4">
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
          Sign Up
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Already have an account? <Link to="/login" className="text-[#88c2bb] font-semibold">Login</Link>
      </p>
    </div>
  </div>
</div>

  );
};

export default Register;


