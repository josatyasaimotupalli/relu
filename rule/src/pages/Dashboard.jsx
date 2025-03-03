import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { FiSearch, FiFilter } from "react-icons/fi";
import { navItems, posts, artists } from "../data/dashboardData"; // Import JSON data
import { BsThreeDots } from "react-icons/bs";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { RiEqualizerLine } from "react-icons/ri";
import ProductsList from "./ProductsList";
import { auth } from "../firebase";

const Dashboard = () => {
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href="/login";
      console.log('user LogOut Successfully')
    } catch (error) {
      console.log("Error Login out:",error.message);
      
    }
  }
  return (
    <div className="flex h-screen bg-gray-100 p-5 lg:p-16 ">
      {/* Sidebar */}
      <div className="space-y-5 w-64">
        {/* Logo Section */}
        <div className="bg-white p-3.5 mb-6 shadow-lg flex justify-center items-center rounded-lg">
          <h1 className="text-3xl font-mongolian ">LOGO</h1>
        </div>

        {/* Navigation Section */}
        <div className="bg-white  text-[#8D8D8D] p-3 shadow-lg flex flex-col rounded-lg">
          <nav className="space-y-1 flex-1">
            {navItems.map((item, index) => (
              <NavItem key={index} icon={item.icon} text={item.text} />
            ))}
          </nav>

          {/* Logout Button */}
          <div className="text-[#88c2bb] lg:mt-24" onClick={handleLogout}>
            <NavItem icon={<FaSignOutAlt />} text="Log out" />
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px] font-gilroy text-[#8D8D8D]">
          <p>2022© Logo Name</p>
          <p>Developed by Ivan Infotech</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 pl-6 pr-6 overflow-hidden">
        {/* Search and Filter Bar - Fixed */}
        <div className="bg-gray-100 pb-5">
          <div className="sticky top-0 z-10 bg-white p-3 rounded-lg shadow-lg flex items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-2/3">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8D8D8D]" />
              <input
                type="text"
                placeholder="Search here..."
                className="w-full pl-10 pr-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Filters Button */}
            <button className="flex items-center px-4 py-2 bg-white rounded-md hover:bg-gray-200 transition">
              <RiEqualizerLine className="mr-2 text-gray-600" /> Filters
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="space-y-6 overflow-auto h-[calc(100vh-100px)] min-h-0 p-1 custom-scrollbar rounded-lg">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              name={post.name}
              username={post.username}
              text={post.text}
              image={post.image}
              likes={post.likes}
              comments={post.comments}
              shares={post.shares}
              icon={post.icon}
            />
          ))}
          <div className="min-h-full bg-gray-100">
            <ProductsList />
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div>
        <div className="w-64 hidden lg:block overflow-hidden">
          <button className="w-full py-5 bg-[#88c2bb] hover:bg-[#65bcb2] text-white text-base font-semibold rounded-md mb-6 transition">
            Become a Seller
          </button>
          <div className="w-full bg-white p-6 shadow-lg rounded-lg">
            <div className="flex justify-between items-center pb-5">
              <h3 className="text-md font-semibold font-gilroy hover:text-black transition">
                Artists
              </h3>
              <h3 className="text-md font-semibold font-gilroy text-[#8D8D8D] hover:text-black transition">
                Photographers
              </h3>
            </div>

            {/* Scrollable Content with Hidden Scrollbar */}
            <div className="space-y-4 overflow-auto max-h-[430px] min-h-0 p-1 custom-scrollbar rounded-lg">
              {artists.map((artist, index) => (
                <ArtistCard
                  key={index}
                  name={artist.name}
                  username={artist.username}
                  image={artist.image}
                  background={artist.background}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5 text-[10px] font-gilroy text-[#8D8D8D]">
          <p>Privacy</p>
          <p>Terms of Service</p>
          <p>Cookie Notice</p>
        </div>
      </div>
    </div>
  );
};

// Navigation Item Component with Hover Effect
const NavItem = ({ icon, text }) => (
  <div className="flex items-center font-gilroy space-x-3 p-3 pr-5 rounded-md cursor-pointer hover:text-black transition">
    {icon}
    <span>{text}</span>
  </div>
);

// Post Card Component
const PostCard = ({
  name,
  username,
  text,
  image,
  likes,
  comments,
  shares,
  icon,
}) => (
  <div className="bg-white p-4 rounded-lg shadow-lg">
    {/* Header Section */}
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center space-x-3">
        <img
          src={icon}
          alt={name}
          className="w-10 h-10 rounded-xl object-cover"
        />
        <div>
          <h4 className="font-semibold font-gilroy text-gray-900">{name}</h4>
          <p className="text-[#8D8D8D] text-sm">{username}</p>
        </div>
      </div>
      <BsThreeDots className="text-gray-600 cursor-pointer" />
    </div>

    {/* Post Content */}
    <p className="text-gray-700 text-sm font-semibold  mb-3">
      {text} <span className="text-[#FF5E8A] cursor-pointer">Read More</span>
    </p>

    {/* Post Image */}
    <div className="relative">
      <img
        src={image}
        alt="Post"
        className="w-full h-96 object-cover rounded-lg bg"
      />
      <FiHeart className="absolute top-3 right-3 text-white text-3xl rounded-full p-1 cursor-pointer" />
    </div>

    {/* Footer Actions */}
    <div className="flex gap-7 mt-8 mb-3  text-gray-600">
      <div className="flex items-center gap-1">
        <FaHeart className="text-lg" />
        <span>{likes}</span>
      </div>
      <div className="flex items-center gap-1">
        <FaComment className="text-lg" />
        <span>{comments}</span>
      </div>
      <div className="flex items-center gap-1">
        <FaShare className="text-lg" />
        <span>{shares}</span>
      </div>
    </div>
  </div>
);

// Artist Card Component
const ArtistCard = ({ name, username, image, background }) => (
  <div
    className="relative w-full h-32 rounded-xl overflow-hidden bg-cover bg-center shadow-md cursor-pointer transition-transform transform hover:scale-105"
    style={{ backgroundImage: `url(${background})` }}
  >
    {/* Overlay for better text visibility */}
    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>

    {/* User Info */}
    <div className="absolute bottom-4 left-4 flex items-center space-x-3">
      {/* Profile Picture with Green Status Indicator */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-xl border-2 border-white object-cover"
        />
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      </div>

      {/* Name & Username */}
      <div className="text-white">
        <h4 className="font-semibold font-gilroy text-xs">{name}</h4>
        <p className="text-xs text-gray-200">{username}</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
