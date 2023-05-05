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
    <div className="w-[15%] dark:text-slate-200 font-sans text-gray-600">
      <div className="fixed w-[inherit] bg-white p-5 dark:bg-[#0f172a] h-screen overflow-y-scroll  font-semibold">
        {/* Search */}
        <div className="sticky top-0">
          <div className="form-control rounded-md rounded-md">
            <div className="input-group ">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered w-full bg-white dark:bg-slate-700"
              />
              <button className="btn btn-square bg-transparent border border-gray-300 dark:bg-[#162a43] dark:border-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* End Search */}
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

        <Link to={"/toast"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "toast"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Toast Notification
          </div>
        </Link>
        {/* 
        <Link to={"/accordions"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "accordions"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Accordions
          </div>
        </Link> */}

        {/* <Link to={"/tree-view"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "tree-view"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Tree View
          </div>
        </Link> */}

        <Link to={"/alert"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "alert"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Alert
          </div>
        </Link>

        {/* <div className={`p-2 font-bold text-lg`}>UI Components</div>

        <Link to={"/dropdown"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "dropdown"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            WYSIWYG Editors
          </div>
        </Link>

        <Link to={"/dropdown"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "dropdown"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Datetime Picker
          </div>
        </Link>

        <Link to={"/dropdown"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "dropdown"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Form Widget
          </div>
        </Link>

        <Link to={"/dropdown"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "dropdown"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Range Slider
          </div>
        </Link>

        <Link to={"/dropdown"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "dropdown"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Knob Dials
          </div>
        </Link> */}

        {/* Development */}
        {/* 
        <div className={`p-2 font-bold text-lg`}>Form Stuff</div>
        <Link to={"/dropdown"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "dropdown"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Form Control
          </div>
        </Link>

        <Link to={"/dropdown"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "dropdown"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Icheck
          </div>
        </Link>

        <Link to={"/dropdown"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "dropdown"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Form Layout
          </div>
        </Link>

        <Link to={"/dropdown"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "dropdown"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Form Wizard
          </div>
        </Link>

        <Link to={"/dropdown"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "dropdown"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Form Validation
          </div>
        </Link>

        <Link to={"/dropdown"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "dropdown"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Upload Dropzone
          </div>
        </Link> */}

        {/* -----------------------------------------Data Table */}
        <div className={`p-2 font-bold text-lg`}>Datatable</div>
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

        <Link to={"/dropdown"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "dropdown"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Responsive Datatable
          </div>
        </Link>

        <Link to={"/dropdown"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "dropdown"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Editable Datatable
          </div>
        </Link>

        <Link to={"/dropdown"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "dropdown"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Advance Datatable
          </div>
        </Link>

        <Link to={"/dropdown"}>
          <div
            className={`p-2 pl-5 border-l dark:border-slate-800 hover:border-black hover:dark:text-slate-200 hover:dark:border-slate-200 transition duration-300 ${
              currentPage == "dropdown"
                ? "text-[#38bdf8] border-[#38bdf8] hover:text-[#38bdf8] font-bold text-lg dark:border-[#38bdf8]"
                : "dark:text-[#8c9aaf]"
            }`}
          >
            Upload Dropzone
          </div>
        </Link>

        {/* End Development */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default Side;
