import { useState } from "react";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import useStyleStore from "../store/CssStore";
import InputStyle from "../components/InputStyle";

const Table = () => {
  const stateTable = useStyleStore((state) => state);

  const [currentTab, setCurrentTab] = useState("tablePageButton");

  const handleTab = (elementClass) => {
    setCurrentTab(elementClass);
  };

  const tabComponent = {
    tablePageButton: [
      {
        name: "Button Background",
        property: "tableBackgroundButton",
        defaultValue: "#007bff",
        type: "color",
        placeholder: "none",
      },
      {
        name: "Button Hover",
        property: "tableBackgroundButtonHover",
        defaultValue: "#e9ecef",
        type: "color",
        placeholder: "none",
      },
      {
        name: "Button Hover",
        property: "tableBackgroundButtonHover",
        defaultValue: "#e9ecef",
        type: "color",
        placeholder: "none",
      },
    ],
  };

  const tabComponentSlider = {
    cubexcard: [
      { name: "Border Radius", property: "cardContentBorderRadius", unit: "%" },
      { name: "Border Width", property: "cardContentBorderWidth", unit: "px" },
    ],
  };

  const tabComponentSelect = {
    cubexcard: [
      {
        name: "Border Style",
        property: "cardBorderStyle",
        value: [
          { childName: "Solid", value: "solid" },
          { childName: "Dotted", value: "dotted" },
          { childName: "Dashed", value: "dashed" },
          { childName: "Double", value: "double" },
          { childName: "Groove", value: "groove" },
          { childName: "Ridge", value: "ridge" },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen dark:bg-[#0f172a]">
      <Navbar />
      <div className="flex min-h-screen pt-16">
        <Side />
        <div className="w-[85%] p-2">
          {/* Content Disinni */}
          <div className="flex mb-2">
            <div className="w-[80%] h-fit">
              {/* Preview */}
              {/* Tab */}
              <div className="flex justify-between">
                <h5 className="text-xl font-bold"> Preview Page</h5>
              </div>

              {/* Windows Preview */}
              <div className="mockup-window border border-base-300 rounded-t-none dark:bg-[#f8fafc] dark:text-gray-600">
                <div className="border-t border-base-300">
                  <div className="h-[550px]  rounded-md">
                    <div className="flex gap-2 h-full">
                      {/* Sidebar */}
                      <div className="w-[15%] bg-gradient-to-tr from-base-300 via-base-200 to-base-300 p-2 text-black text-xs h-full">
                        <div className=" rounded-md h-5 mb-1 px-2 mt-3">
                          Lorem
                        </div>
                        <div className=" rounded-md h-5 mb-1 px-2">Lorem</div>
                        <div className=" rounded-md h-5 mb-1 px-2">Lorem</div>
                        <div
                          className={`bg-[#adadad] rounded-md h-5 mb-1 px-2`}
                          style={{
                            background: stateTable.sidebarLinkBackgroundActive,
                            color: stateTable.sidebarLinkTextColor,
                            borderRadius: stateTable.sidebarLinkBorderRadius,
                            borderWidth: stateTable.sidebarLinkBorderWidth,
                            borderColor: stateTable.sidebarLinkBorderColor,
                            borderStyle: stateTable.sidebarLinkBorderStyle,
                          }}
                        >
                          Lorem
                        </div>
                      </div>
                      <div className="w-[85%] flex flex-col text-sm pr-2 pt-2">
                        {/* Navigation */}
                        <div
                          className={`flex justify-between mb-2 `}
                          style={{
                            background: stateTable.navbarBackground,
                            color: stateTable.navbarTextColor,
                            borderRadius: stateTable.navbarBorderRadius,
                            borderColor: stateTable.navbarBorderColor,
                            borderWidth: stateTable.navbarBorderWidth,
                            borderStyle: stateTable.navbarBorderStyle,
                          }}
                        >
                          <span className="w-5 h-5 bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></span>
                          <div className="flex gap-1 text-sm">
                            <span className="w-10 h-5 bg-gradient-to-tr from-base-300 via-base-200 to-base-300 flex justify-center">
                              Link
                            </span>
                            <span className="w-10 h-5 bg-gradient-to-tr from-base-300 via-base-200 to-base-300 flex justify-center">
                              Link
                            </span>
                            <span className="w-10 h-5 bg-gradient-to-tr from-base-300 via-base-200 to-base-300 flex justify-center">
                              Link
                            </span>
                            <span className="w-10 h-5 bg-gradient-to-tr from-base-300 via-base-200 to-base-300 flex justify-center">
                              Link
                            </span>
                            <span className="w-10 h-5 bg-gradient-to-tr from-base-300 via-base-200 to-base-300 flex justify-center">
                              Link
                            </span>
                          </div>
                        </div>
                        {/* Breadcrumb */}
                        <div
                          className={`bg-gradient-to-tr from-base-300 via-base-200 to-base-300 rounded-md w-32 h-12 mb-2  text-black flex justify-between `}
                        >
                          <div className="w-1/2 flex justify-center items-center">
                            <div className="h-5 w-5 bg-white rounded-full"></div>
                          </div>
                          <div className="w-11/12">
                            <p>Lorem</p>
                            <p className="text-xs">
                              Lorem <span>/</span> <span>Lorem</span>
                            </p>
                          </div>
                        </div>

                        {/* Konten */}
                        <div
                          className={`bg-white rounded-md p-5 ${
                            currentTab == "cubex-card" ? "" : ""
                          }`}
                          style={{
                            background: stateTable.cardContentBackground,
                            color: stateTable.cardContentColor,
                            borderRadius: stateTable.cardContentBorderRadius,
                            borderWidth: stateTable.cardContentBorderWidth,
                            borderStyle: stateTable.cardContentBorderStyle,
                            borderColor: stateTable.cardContentBorderColor,
                          }}
                        >
                          <div
                            className={` ${
                              currentTab == "cubex-table" ? "" : ""
                            }`}
                          >
                            <div className="flex justify-between mb-2">
                              <div className="flex gap-1 items-center">
                                <span>Show</span>
                                <select
                                  className="border rounded-md"
                                  defaultValue={"10"}
                                  style={{
                                    background:
                                      stateTable.tableBackgroundFilter,
                                    color: stateTable.tableFilterColor,
                                  }}
                                >
                                  <option value="10">10</option>
                                  <option value="10">50</option>
                                  <option value="10">100</option>
                                </select>
                                <span>Data</span>
                              </div>

                              <div
                                className={`flex items-center gap-2 ${
                                  currentTab == "table-search"
                                    ? "border border-primary"
                                    : null
                                }`}
                              >
                                <label>Search</label>
                                <input
                                  type="text"
                                  className="rounded-md w-36 h-7 border"
                                  style={{
                                    background:
                                      stateTable.tableBackgroundSearch,
                                    color: stateTable.tableSearchColor,
                                  }}
                                />
                              </div>
                            </div>
                            {/* Table */}
                            <div className="bg-white p-2 rounded-md">
                              <table className="w-full ">
                                <thead>
                                  <tr className="border-y-2 border-gray-300">
                                    <th className="border border-gray-300 p-2 text-left">
                                      <div className="flex justify-between">
                                        <p>Name</p>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="w-4 h-4 text-gray-400"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                                          />
                                        </svg>
                                      </div>
                                    </th>
                                    <th className="border border-gray-300 p-2 text-left">
                                      <div className="flex justify-between">
                                        <p>Position</p>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="w-4 h-4 text-gray-400"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                                          />
                                        </svg>
                                      </div>
                                    </th>
                                    <th className="border border-gray-300 p-2 text-left">
                                      <div className="flex justify-between">
                                        <p>Office</p>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className="w-4 h-4 text-gray-400"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                                          />
                                        </svg>
                                      </div>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="border border-gray-300 p-2 ">
                                      Airi Satou
                                    </td>
                                    <td className="border border-gray-300 p-2 ">
                                      Accountant
                                    </td>
                                    <td className="border border-gray-300 p-2 ">
                                      Tokyo
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border border-gray-300 p-2 ">
                                      Airi Satou
                                    </td>
                                    <td className="border border-gray-300 p-2 ">
                                      Accountant
                                    </td>
                                    <td className="border border-gray-300 p-2 ">
                                      Tokyo
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border border-gray-300 p-2 ">
                                      Airi Satou
                                    </td>
                                    <td className="border border-gray-300 p-2 ">
                                      Accountant
                                    </td>
                                    <td className="border border-gray-300 p-2 ">
                                      Tokyo
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border border-gray-300 p-2 ">
                                      Airi Satou
                                    </td>
                                    <td className="border border-gray-300 p-2 ">
                                      Accountant
                                    </td>
                                    <td className="border border-gray-300 p-2 ">
                                      Tokyo
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border border-gray-300 p-2 ">
                                      Airi Satou
                                    </td>
                                    <td className="border border-gray-300 p-2 ">
                                      Accountant
                                    </td>
                                    <td className="border border-gray-300 p-2 ">
                                      Tokyo
                                    </td>
                                  </tr>
                                </tbody>
                                <tfoot>
                                  <tr className="border-y-2 border-gray-300">
                                    <th className="border border-gray-300 p-2 text-left">
                                      Name
                                    </th>
                                    <th className="border border-gray-300 p-2 text-left">
                                      Position
                                    </th>
                                    <th className="border border-gray-300 p-2 text-left">
                                      Office
                                    </th>
                                  </tr>
                                </tfoot>
                              </table>
                            </div>
                            {/* End Table */}
                            <div className="p-5 flex justify-between items-center text-primary">
                              <span className="text-black">
                                Showing 1 to 10 of 57 entries
                              </span>
                              <div className="flex border rounded-md overflow-hidden">
                                <button className="px-1 text-gray-400">
                                  Pevious
                                </button>
                                <button
                                  className="p-2 px-3 border-x bg-primary text-white"
                                  style={{
                                    background:
                                      stateTable.tableBackgroundButton,
                                  }}
                                >
                                  1
                                </button>
                                <button className="p-2 px-3 border-x hover:bg-[#e9ecef]">
                                  2
                                </button>
                                <button className="p-2 px-3 border-x hover:bg-[#e9ecef]">
                                  3
                                </button>
                                <button className="p-2 px-3 border-x hover:bg-[#e9ecef]">
                                  4
                                </button>
                                <button className="p-2 px-3 border-x hover:bg-[#e9ecef]">
                                  5
                                </button>
                                <button className="p-2 px-3 border-x hover:bg-[#e9ecef]">
                                  6
                                </button>
                                <button className="p-2 px-3 border-x hover:bg-[#e9ecef]">
                                  7
                                </button>
                                <button className="p-2 px-3 border-x hover:bg-[#e9ecef]">
                                  8
                                </button>
                                <button className="px-1">Next</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* End Konten */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* End Preview */}
            </div>
            {/* Pembatas */}
            {/* Menu Kanan */}
            <div className="w-[20%] h-fit p-2">kanan</div>
            {/* End Pembatas */}
          </div>
          {/* Menu Bawah */}
          {/* Menu Bawah */}
          <div className="grid grid-cols-6 gap-1 text-sm h-56 p-2 overflow-y-scroll">
            {currentTab == "tablePageButton"
              ? tabComponent.tablePageButton.map((components, index) => (
                  <InputStyle
                    key={index}
                    name={components.name}
                    property={components.property}
                    defaultValue={components.defaultValue}
                    type={components.type}
                    placeholder={components.placeholder}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
