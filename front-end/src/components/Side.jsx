import React from "react";
import { Link } from "react-router-dom";
import useStyleStore from "../store/CssStore";
import { Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";

const Side = () => {
  const stateStyle = useStyleStore((state) => state);

  let url = window.location.pathname;
  let currentUrl = url.replace("/", "");

  const [currentPage, setCurrentPage] = useState(currentUrl);

  console.log();
  return (
    <div className="w-[15%] bg-base-200  p-5 ">
      <div className={`p-2 mb-2 border-b border-gray-600`}>HTML</div>

      <Link to={"/"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-[#4b6bfb96] ${
            currentPage == "header" ? "text-white bg-primary" : null
          }`}
        >
          Header
        </div>
      </Link>
      <Link to={"/"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-[#4b6bfb96] ${
            currentPage == "header" ? "text-white bg-primary" : null
          }`}
        >
          Body
        </div>
      </Link>
      <Link to={"/"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-[#4b6bfb96] ${
            currentPage == "header" ? "text-white bg-primary" : null
          }`}
        >
          Sidebar
        </div>
      </Link>
      <Link to={"/"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-[#4b6bfb96] ${
            currentPage == "header" ? "text-white bg-primary" : null
          }`}
        >
          Footer
        </div>
      </Link>
      <Link to={"/"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-[#4b6bfb96] ${
            currentPage == "" ? "text-white bg-primary" : null
          }`}
        >
          Dashboard
        </div>
      </Link>

      <div className={`p-2 mb-2 border-b border-gray-600`}>Widget</div>

      <Link to={"/table"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-[#4b6bfb96] ${
            currentPage == "table" ? "text-white bg-primary" : null
          }`}
        >
          Table
        </div>
      </Link>

      <Link to={"/form"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-[#4b6bfb96] ${
            currentPage == "form" ? "text-white bg-primary" : null
          }`}
        >
          Form
        </div>
      </Link>

      <Link to={"/monitoring"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-[#4b6bfb96] ${
            currentPage == "monitoring" ? "text-white bg-primary" : null
          }`}
        >
          Monitoring
        </div>
      </Link>

      <Link to={"/button"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-[#4b6bfb96] ${
            currentPage == "button" ? "text-white bg-primary" : null
          }`}
        >
          Button
        </div>
      </Link>

      <Link to={"/pop-up"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-[#4b6bfb96] ${
            currentPage == "pop-up" ? "text-white bg-primary" : null
          }`}
        >
          Pop Up
        </div>
      </Link>
      <Link to={"/login"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-[#4b6bfb96] ${
            currentPage == "login" ? "text-white bg-primary" : null
          }`}
        >
          Login
        </div>
      </Link>
    </div>
  );
};

export default Side;
