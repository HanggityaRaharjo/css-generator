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

  return (
    <div className="w-[15%] dark:text-slate-200 font-sans">
      <div className="fixed w-[inherit] bg-white p-5 dark:bg-[#0f172a] h-screen overflow-y-scroll  font-semibold">
        <div className={`p-2 font-bold text-lg`}>HTML</div>
        <Link to={"/"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black  hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == ""
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Layout
          </div>
        </Link>
        <Link to={"/theme"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "theme"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Color
          </div>
        </Link>

        <div className={`p-2 font-bold text-lg`}>UI Features</div>

        <Link to={"/modal"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "modal"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Modal
          </div>
        </Link>

        <Link to={"/card"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "card"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Card
          </div>
        </Link>

        <Link to={"/breadcrumbs"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "breadcrumbs"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Breadcrumbs
          </div>
        </Link>

        <Link to={"/form"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "form"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Form
          </div>
        </Link>

        <Link to={"/button"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "button"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Button
          </div>
        </Link>

        <Link to={"/tabs"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "tabs"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Tabs
          </div>
        </Link>

        <Link to={"/pop-up"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "pop-up"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Pop Up
          </div>
        </Link>

        <Link to={"/pop-up"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "pop-up"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Toast
          </div>
        </Link>

        <div className={`p-2 font-bold text-lg`}>UI Components</div>

        <Link to={"/basic-table"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "basic-table"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Basic Table
          </div>
        </Link>

        {/* Development */}
        <div
          className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 dark:text-[#8c9aaf]`}
        >
          UI Component
        </div>
        <div
          className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 dark:text-[#8c9aaf]`}
        >
          UI Component
        </div>
        <div
          className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 dark:text-[#8c9aaf]`}
        >
          UI Component
        </div>
        <div
          className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 dark:text-[#8c9aaf]`}
        >
          UI Component
        </div>
        <div
          className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 dark:text-[#8c9aaf]`}
        >
          UI Component
        </div>
        <div
          className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 dark:text-[#8c9aaf]`}
        >
          UI Component
        </div>
        <div
          className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 dark:text-[#8c9aaf]`}
        >
          UI Component
        </div>
        <div
          className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 dark:text-[#8c9aaf]`}
        >
          UI Component
        </div>
        <div
          className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 dark:text-[#8c9aaf]`}
        >
          UI Component
        </div>
        {/* End Development */}
      </div>
    </div>
  );
};

export default Side;
