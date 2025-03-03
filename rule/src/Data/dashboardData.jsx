import { FaHome, FaBell, FaStore, FaComments, FaWallet, FaUser, FaCog } from "react-icons/fa";
import image from "../assets/pexels-humphrey-muleba-2045248@2x.png";
import image1 from "../assets/pexels-tobias-bjørkli-2236382@2x.png"; // Ensure correct path
import cardimg from "../assets/Image 40@2x.png"
import cardimg2 from "../assets/Image 39@2x.png"
import cardimg3 from "../assets/pexels-pixabay-164455@2x.png"
import img from "../assets/pexels-ekaterina-12203460@2x.png"
import img1 from "../assets/pexels-genaro-servín-763210@2x.png"
import img2 from "../assets/pexels-pixabay-164455@2x.png"
import img3 from "../assets/pexels-steve-johnson-1269968@2x.png"
import img4 from "../assets/pexels-fiona-art-5022849@2x.png"
import photo from "../assets/pexels-anastasia-shuraeva-4406721@2x.png"
import photo1 from "../assets/pexels-andrea-piacquadio-3771118@2x.png"
import photo2 from "../assets/pexels-antoni-shkraba-4442102@2x.png"
import photo3 from "../assets/pexels-antoni-shkraba-4442005@2x.png"
import icon from "../assets/pexels-anastasia-shuraeva-4406721@2x.png"
import icon2 from "../assets/pexels-ali-pazani-2613260@2x.png"
export const navItems = [
  { icon: <FaHome />, text: "Home" },
  { icon: <FaBell />, text: "Notifications" },
  { icon: <FaStore />, text: "Shop" },
  { icon: <FaComments />, text: "Conversation" },
  { icon: <FaWallet />, text: "Wallet" },
  { icon: <FaUser />, text: "My Profile" },
  { icon: <FaCog />, text: "Settings" }
];

export const posts = [
  {
    name: "Lara Leones",
    username: "@thewallart",
    text: "It is a long established fact that a reader will be distracted...",
    image: image, // ✅ Fixed: Use correct reference
    likes: "9.8k",
    comments: "8.6k",
    shares: "7.2k",
    icon:icon2
  },
  {
    name: "Thomas J.",
    username: "@thecustomcreater",
    text: "Another example post here...",
    image: image1,
    likes: "9.8k",
    comments: "8.6k",
    shares: "7.2k",
    icon:icon
  }
];

export const artists = [
  {
    name: "Thomas Edward",
    username: "@thewildwithyou",
    image: photo,
    background : img,
  },
  {
    name: "Chris Doe",
    username: "@thewildwithyou",
    image: photo1,
    background:img1

  },
  {
    name: "Emilie Jones",
    username: "@thewildwithyou",
    image: photo2,
    background:img2

  },
  {
    name: "Chris Doe",
    username: "@thewildwithyou",
    image: photo3,
    background:img3

  },
  {
    name: "Emilie Jones",
    username: "@thewildwithyou",
    image: photo,
    background:img4

  }
];
export const products = [
  {
    id: 1,
    name: "Modern Wall Decor Framed Painting",
    price: "$199.99",
    image: cardimg,
    rating: 5
  },
  {
    id: 2,
    name: "Modern Wall Decor Framed Painting",
    price: "$199.99",
    image: cardimg2,
    rating: 5
  },
  {
    id: 3,
    name: "Modern Wall Decor Framed Painting",
    price: "$199.99",
    image: cardimg3,
    rating: 5
  }
 
];


