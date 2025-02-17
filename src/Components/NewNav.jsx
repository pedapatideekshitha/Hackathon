import React, { useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Body from "./body";
import logo from "../assets/logo.png";
import About1 from "./About1";
import Contact1 from "./Contact1";
import Form from ".//Form";
import { Link } from "react-router-dom";
import Cookies from "js-cookies";
import { useNavigate } from "react-router-dom";
const NewNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const handleLoginClick = () => {
    setShowModal(true);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleLogout = (e) => {
    Cookies.removeItem("token");
    navigate("/");
    na;
  };
  return (
    <div className="relative">
      <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Prime Properties Logo"
            style={{ height: 40, marginRight: 16 }}
          />
          <h1 className="text-xl font-bold">Prime Properties</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="text-white"> Home </button>
          </ScrollLink>
          <ScrollLink
            to="about1"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="text-white"> About </button>
          </ScrollLink>
          <ScrollLink
            to="contact1"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="text-white"> Contact </button>
          </ScrollLink>

          {/* <Link to='/new'>newFeature</Link> */}

          <button className="text-white" onClick={handleLoginClick}>
            Add Property
          </button>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-300 focus:outline-none"
            >
              <FontAwesomeIcon icon={faUserCircle} className="text-2xl" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </nav>
      </header>

      <div>
        <Element name="home" className="my-8">
          <Body />
        </Element>

        <Element name="about1" className="my-8">
          <About1 />
        </Element>

        <Element name="contact1" className="my-8">
          <Contact1 />
        </Element>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <div className="text-center">
              <Form onFormClick={handleLoginClick} />
              {/* Add form or other content */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewNav;
