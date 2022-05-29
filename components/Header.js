import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="fixed top-0 w-full">
      <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <div className="w-20">
              <Image src="/images/logo.png" alt="me" width="64" height="64" />
            </div>
          </div>
          <div
            className="navbar-collapse collapse grow items-center"
            id="navbarSupportedContentY"
          >
            <ul className="navbar-nav mr-auto lg:flex lg:flex-row gap-10">
              <li className="nav-item">
                <a
                  className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="/posts/home"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="/posts/UserGuide"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  User Guide
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Trigger Record
                </a>
              </li>
              <li className="nav-item mb-2 lg:mb-0">
                <a
                  className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="/posts/AFK"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  AFK
                </a>
              </li>
              <li className="nav-item mb-2 lg:mb-0">
                <a
                  className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  About Devx
                </a>
              </li>
              <li className="nav-item mb-2 lg:mb-0">
                <div className="flex space-x-2 justify-center">
                  <button
                    type="button"
                    className="justify-start items-center px-4 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                  >
                    <FontAwesomeIcon icon={faLink} className="mr-3" />
                    Git Repo
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
