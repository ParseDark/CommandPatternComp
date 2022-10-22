import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full backdrop-blur-lg">
      <nav className="navbar navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between">
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
                <Link
                  className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="/posts/EndpointReport"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Endpoint Event Track Report
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="/posts/PipelineReport"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Pipeline Event Track Report
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
