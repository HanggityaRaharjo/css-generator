import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useStyleStore from "../store/CssStore";
import { Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";

const Side = () => {
  const stateStyle = useStyleStore((state) => state);

  let url = window.location.pathname;
  let currentUrl = url.replace("/", "");
  const [currentPage, setCurrentPage] = useState(currentUrl);

  console.log(currentPage);

  return (
    <div className="w-[15%] bg-base-200 p-5 dark:bg-[#1F2324] h-[100%] overflow-y-scroll dark:text-white">
      <div className={`p-2 mb-2 border-b border-gray-600`}>HTML</div>
      <Link to={"/"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary  hover:text-white hover:dark:bg-[#4579A0] hover:dark:text-white ${
            currentPage == ""
              ? "dark:text-white bg-primary dark:bg-[#4579A0]"
              : "dark:text-[#8c9aaf]"
          }`}
        >
          Layout
        </div>
      </Link>
      <Link to={"/theme"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary hover:text-white hover:dark:bg-[#4579A0] hover:dark:text-white ${
            currentPage == "theme"
              ? "text-white bg-primary dark:bg-[#4579A0]"
              : "dark:text-[#8c9aaf]"
          }`}
        >
          Color
        </div>
      </Link>

      <div className={`p-2 mb-2 border-b border-gray-600`}>UI Features</div>

      <Link to={"/modal"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary hover:text-white hover:dark:bg-[#4579A0] hover:dark:text-white ${
            currentPage == "modal"
              ? "text-white bg-primary dark:bg-[#4579A0]"
              : "dark:text-[#8c9aaf]"
          }`}
        >
          Modal
        </div>
      </Link>

      <Link to={"/form"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary hover:text-white hover:dark:bg-[#4579A0] hover:dark:text-white ${
            currentPage == "form"
              ? "text-white bg-primary dark:bg-[#4579A0]"
              : "dark:text-[#8c9aaf]"
          }`}
        >
          Form
        </div>
      </Link>

      <Link to={"/monitoring"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary hover:text-white hover:dark:bg-[#4579A0] hover:dark:text-white ${
            currentPage == "monitoring"
              ? "text-white bg-primary dark:bg-[#4579A0]"
              : "dark:text-[#8c9aaf]"
          }`}
        >
          Monitoring
        </div>
      </Link>

      <Link to={"/button"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary hover:text-white hover:dark:bg-[#4579A0] hover:dark:text-white ${
            currentPage == "button"
              ? "text-white bg-primary dark:bg-[#4579A0]"
              : "dark:text-[#8c9aaf]"
          }`}
        >
          Button
        </div>
      </Link>

      <Link to={"/pop-up"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary hover:text-white hover:dark:bg-[#4579A0] hover:dark:text-white ${
            currentPage == "pop-up"
              ? "text-white bg-primary dark:bg-[#4579A0]"
              : "dark:text-[#8c9aaf]"
          }`}
        >
          Pop Up
        </div>
      </Link>
      <Link to={"/login"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary hover:text-white hover:dark:bg-[#4579A0] hover:dark:text-white ${
            currentPage == "login"
              ? "text-white bg-primary dark:bg-[#4579A0]"
              : "dark:text-[#8c9aaf]"
          }`}
        >
          Login
        </div>
      </Link>

      <div className={`p-2 mb-2 border-b border-gray-600`}>UI Components</div>

      <Link to={"/navigation-bar"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary hover:text-white hover:dark:bg-[#4579A0] hover:dark:text-white ${
            currentPage == "navigation-bar"
              ? "text-white bg-primary dark:bg-[#4579A0]"
              : "dark:text-[#8c9aaf]"
          }`}
        >
          Navigation Bar
        </div>
      </Link>
      <Link to={"/basic-table"}>
        <div
          className={`rounded-md p-2 ml-5 mb-1 hover:bg-primary hover:text-white hover:dark:bg-[#4579A0] hover:dark:text-white ${
            currentPage == "basic-table"
              ? "text-white bg-primary dark:bg-[#4579A0]"
              : "dark:text-[#8c9aaf]"
          }`}
        >
          Basic Table
        </div>
      </Link>
    </div>
  );
};

export default Side;
