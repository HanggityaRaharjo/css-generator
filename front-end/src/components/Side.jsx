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

      <Link to={"/table"}>
        <div className="rounded-md p-2 mb-5 hover:bg-primary">Monitoring</div>
      </Link>

      <Link to={"/table"}>
        <div className="rounded-md p-2 mb-5 hover:bg-primary">Button</div>
      </Link>

      <Link to={"/table"}>
        <div className="rounded-md p-2 mb-5 hover:bg-primary">Pop Up</div>
      </Link>
      <Link to={"/table"}>
        <div className="rounded-md p-2 mb-5 hover:bg-primary">Login</div>
      </Link>
    </div>
  );
};

export default Side;
