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
      <Link to={"/"}>
        <div
          className={`rounded-md p-2 mb-5 hover:bg-primary ${
            currentPage == "" ? "bg-primary" : null
          }`}
        >
          Dashboard
        </div>
      </Link>

      <Link to={"/table"}>
        <div
          className={`rounded-md p-2 mb-5 hover:bg-primary ${
            currentPage == "table" ? "bg-primary" : null
          }`}
        >
          Table
        </div>
      </Link>

      <Link to={"/form"}>
        <div
          className={`rounded-md p-2 mb-5 hover:bg-primary ${
            currentPage == "form" ? "bg-primary" : null
          }`}
        >
          Form
        </div>
      </Link>

      <Link to={"/monitoring"}>
        <div
          className={`rounded-md p-2 mb-5 hover:bg-primary ${
            currentPage == "monitoring" ? "bg-primary" : null
          }`}
        >
          Monitoring
        </div>
      </Link>

      <Link to={"/button"}>
        <div
          className={`rounded-md p-2 mb-5 hover:bg-primary ${
            currentPage == "button" ? "bg-primary" : null
          }`}
        >
          Button
        </div>
      </Link>

      <Link to={"/pop-up"}>
        <div
          className={`rounded-md p-2 mb-5 hover:bg-primary ${
            currentPage == "pop-up" ? "bg-primary" : null
          }`}
        >
          Pop Up
        </div>
      </Link>
      <Link to={"/login"}>
        <div
          className={`rounded-md p-2 mb-5 hover:bg-primary ${
            currentPage == "login" ? "bg-primary" : null
          }`}
        >
          Login
        </div>
      </Link>
    </div>
  );
};

export default Side;
