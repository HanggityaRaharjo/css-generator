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
  return (
    <div className="w-[15%] bg-base-200 p-5  h-[100%] overflow-scroll">
      <div className={`p-2 mb-2 border-b border-gray-600`}>HTML</div>
      <Link to={"/"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-primary text-white ${
            currentPage == "" ? "text-white bg-primary" : null
          }`}
        >
          Dashboard
        </div>
      </Link>
      <Link to={"/theme"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-primary text-white ${
            currentPage == "" ? "text-white bg-primary" : null
          }`}
        >
          Theme
        </div>
      </Link>

      <div className={`p-2 mb-2 border-b border-gray-600`}>UI Features</div>

      <Link to={"/modal"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-primary text-white ${
            currentPage == "table" ? "text-white bg-primary" : null
          }`}
        >
          Modal
        </div>
      </Link>

      <Link to={"/form"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-primary text-white ${
            currentPage == "form" ? "text-white bg-primary" : null
          }`}
        >
          Form
        </div>
      </Link>

      <Link to={"/monitoring"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-primary text-white ${
            currentPage == "monitoring" ? "text-white bg-primary" : null
          }`}
        >
          Monitoring
        </div>
      </Link>

      <Link to={"/button"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-primary text-white ${
            currentPage == "button" ? "text-white bg-primary" : null
          }`}
        >
          Button
        </div>
      </Link>

      <Link to={"/pop-up"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-primary text-white ${
            currentPage == "pop-up" ? "text-white bg-primary" : null
          }`}
        >
          Pop Up
        </div>
      </Link>
      <Link to={"/login"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-primary text-white ${
            currentPage == "login" ? "text-white bg-primary" : null
          }`}
        >
          Login
        </div>
      </Link>

      <div className={`p-2 mb-2 border-b border-gray-600`}>UI Components</div>

      <Link to={"/navigation-bar"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary bg-primary text-white ${
            currentPage == "table" ? "text-white bg-primary" : null
          }`}
        >
          Navigation Bar
        </div>
      </Link>
    </div>
  );
};

export default Side;
