import { useState } from "react";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import useStyleStore from "../store/CssStore";
import InputStyle from "../components/InputStyle";

const Table = () => {
  const stateLink = useStyleStore((state) => state);
  const stateNav = useStyleStore((state) => state);
  const stateTable = useStyleStore((state) => state);

  const stateCardContent = useStyleStore((state) => state);

  const [currentTab, setCurrentTab] = useState("cubex-card");

  // console.log(currentTab);

  const handleTab = (elementClass) => {
    let tabActive = document.querySelector(".tab-active");
    if (tabActive !== null) {
      tabActive.classList.remove("tab-active");
    }
    setCurrentTab(elementClass);
    document.querySelector(`.${elementClass}`).classList.add("tab-active");
  };

  const tabComponent = {
    cubexcard: [
      { name: "Background", property: "cardContentBackground" },
      { name: "Color", property: "cardContentColor" },
      { name: "Border Color", property: "cardContentBorderColor" },
    ],
    cubextable: [
      { name: "Background", property: "cardContentBackground" },
      { name: "Color", property: "cardContentColor" },
      { name: "Border Color", property: "cardContentBorderColor" },
      { name: "Background Filter", property: "tableBackgroundFilter" },
      { name: "Filter Color", property: "tableFilterColor" },
      { name: "Background Search", property: "tableBackgroundSearch" },
      { name: "Search Color", property: "tableSearchColor" },
      { name: "Background Button", property: "tableBackgroundButton" },
      { name: "Table Header", property: "tableHeader" },
      { name: "Table Row(Odd)", property: "tableRowOdd" },
      { name: "Table Row(Even)", property: "tableRowEven" },
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
    <div className=" min-h-screen">
      <Navbar />
      <div className="flex h-screen pt-16">
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
              <div className="mockup-window border border-base-300 rounded-t-none">
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
                            background: stateLink.sidebarLinkBackgroundActive,
                            color: stateLink.sidebarLinkTextColor,
                            borderRadius: stateLink.sidebarLinkBorderRadius,
                            borderWidth: stateLink.sidebarLinkBorderWidth,
                            borderColor: stateLink.sidebarLinkBorderColor,
                            borderStyle: stateLink.sidebarLinkBorderStyle,
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
                            background: stateNav.navbarBackground,
                            color: stateNav.navbarTextColor,
                            borderRadius: stateNav.navbarBorderRadius,
                            borderColor: stateNav.navbarBorderColor,
                            borderWidth: stateNav.navbarBorderWidth,
                            borderStyle: stateNav.navbarBorderStyle,
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
                          className={`bg-gradient-to-tr from-base-300 via-base-200 to-base-300 rounded-md p-5 ${
                            currentTab == "cubex-card"
                              ? "border border-primary"
                              : ""
                          }`}
                          style={{
                            background: stateCardContent.cardContentBackground,
                            color: stateCardContent.cardContentColor,
                            borderRadius:
                              stateCardContent.cardContentBorderRadius,
                            borderWidth:
                              stateCardContent.cardContentBorderWidth,
                            borderStyle:
                              stateCardContent.cardContentBorderStyle,
                            borderColor:
                              stateCardContent.cardContentBorderColor,
                          }}
                        >
                          <div className="flex justify-end mb-2">
                            <button
                              className={`px-2 py-1 rounded-md bg-primary ${
                                currentTab == "table-button"
                                  ? "border border-primary"
                                  : null
                              }`}
                            >
                              Button
                            </button>
                          </div>
                          <div
                            className={` ${
                              currentTab == "cubex-table"
                                ? "border border-primary"
                                : ""
                            }`}
                          >
                            <div className="flex justify-between mb-2">
                              <div className="flex gap-1">
                                <span>Show</span>
                                <select
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
                                  className="rounded-md w-28 h-7"
                                  style={{
                                    background:
                                      stateTable.tableBackgroundSearch,
                                    color: stateTable.tableSearchColor,
                                  }}
                                />
                              </div>
                            </div>

                            <div className="overflow-x-auto">
                              <table className="table table-zebra w-full">
                                {/* head */}
                                <thead>
                                  <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {/* row 1 */}
                                  <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                  </tr>
                                  {/* row 2 */}
                                  <tr>
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                  </tr>
                                  {/* row 3 */}
                                  <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div className={`p-5 flex justify-between text-lg`}>
                              <span>Show 1 of 1</span>
                              <div className="flex gap-1">
                                <button>Pevious</button>
                                <button
                                  className="bg-primary flex w-5 justify-center items-center rounded-md"
                                  style={{
                                    background:
                                      stateTable.tableBackgroundButton,
                                  }}
                                >
                                  1
                                </button>
                                <button>2</button>
                                <button>3</button>
                                <button>Next</button>
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
          <div className="flex justify-center">
            <div className="tabs translate-y-[1px]">
              <button
                className="tab tab-lifted cubex-card tab-active"
                onClick={() => handleTab("cubex-card")}
              >
                Card Table
              </button>
              <button
                className="tab tab-lifted cubex-table"
                onClick={() => handleTab("cubex-table")}
              >
                Table
              </button>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-1 text-sm border-4 h-40 p-2 overflow-y-scroll">
            {currentTab == "cubex-card"
              ? tabComponent.cubexcard.map((components, index) => (
                  <InputStyle
                    key={index}
                    name={components.name}
                    property={components.property}
                  />
                ))
              : null}
            {currentTab == "cubex-table"
              ? tabComponent.cubextable.map((components, index) => (
                  <InputStyle
                    key={index}
                    name={components.name}
                    property={components.property}
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
