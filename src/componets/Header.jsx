import { useState } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { FaBars, FaHome, FaSearch, FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHelpBuoy } from "react-icons/io";
import { MdKeyboardArrowDown, MdMarkunreadMailbox } from "react-icons/md";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  return (
    <>
      <div className="header flex lg:flex-row flex-col bg-white items-center justify-between shadow-md">
        <div className="flex gap-3 m-3 items-center">
          <img
            src="https://ik.imagekit.io/os5tqthul/logo.jpeg?updatedAt=1723096752539"
            alt="logo"
            className="h-16 flex ml-16"
          />
          <p className="underline ml-5 text-lg hover:text-orange-600">other</p>
          <MdKeyboardArrowDown className="text-orange-600 text-lg" />
        </div>

        <div className="lg:hidden flex items-center ml-80 ">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        <nav
          className={`${
            isMenuOpen ? "grid" : "hidden"
          } lg:flex lg:flex-row flex-col gap-10 lg:mr-16 items-center`}
        >
          <ul className="flex flex-col lg:flex-row gap-10">

          <li>
            <Link to="/" className="flex gap-2 items-center text-lg hover:text-orange-600">
              <FaHome className="text-xl" />
              Home
            </Link>
              </li>


            <li className="flex gap-2 items-center text-lg hover:text-orange-600">
              <MdMarkunreadMailbox /> Swiggy Corporate
            </li>

            <li
              className="flex gap-2 items-center text-lg hover:text-orange-600 relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FaSearch />
              {isHovered ? (
                <input
                  type="search"
                  className="ml-2 border-b-2 border-gray-300 focus:outline-none focus:border-orange-600"
                  placeholder="Search..."
                />
              ) : (
                <span>Search</span>
              )}
            </li>

            <li className="flex gap-2 items-center text-lg hover:text-orange-600">
              <BiSolidOffer />
              Offers <sup className="font-bold text-orange-600">new</sup>
            </li>
            <li className="flex gap-2 items-center text-lg hover:text-orange-600">
              <IoMdHelpBuoy />
              Help
            </li>
            <li className="flex gap-2 items-center text-lg hover:text-orange-600">
              <FaUserCircle />
              Sign in
            </li>
            <li>
            <Link to="/cart" className="flex gap-2 items-center text-lg hover:text-orange-600">
              <FaCartShopping className="text-xl" />
              Cart
            </Link>
              </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
