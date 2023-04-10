import { useState } from "react";
import Navbar from "../components/Navbar";
import SidebarMenu from "../components/Menu/SidebarMenu";
import NavbarMenu from "../components/Menu/NavbarMenu";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const [currentMenu, setCurrentMenu] = useState(1);
  const handleMenuChange = (menu) => {
    document
      .getElementsByClassName("tab-lg")
      [currentMenu - 1].classList.remove("tab-active");
    setCurrentMenu(menu);
    document
      .getElementsByClassName("tab-lg")
      [menu - 1].classList.add("tab-active");
  };

  return (
    <div className=" min-h-screen">
      <Navbar />
      <div className="flex h-screen pt-16">
        <div className="w-[15%] bg-base-200 p-5">
          <Link to={"/"}>
            <a href="" className="">
              <div className="border border-gray-500 rounded-md p-2 mb-5">
                Dashboard
              </div>
            </a>
          </Link>

          <Link to={"/navigation-bar"}>
            <div className="border border-gray-500 rounded-md p-2 mb-5">
              Navigation Bar
            </div>
          </Link>

          <a href="" className="">
            <div className="border border-gray-500 rounded-md p-2 mb-5">
              Sidebar
            </div>
          </a>

          <a href="" className="">
            <div className="border border-gray-500 rounded-md p-2 mb-5">
              Table
            </div>
          </a>
        </div>
        <div className="w-[85%] p-5">
          <main>
            {/* Preview section */}
            <section className=" flex justify-between gap-5 mb-8">
              <div className="w-[50%]">
                <h4 className="text-4xl">Choose Layout Model</h4>
                {/* Grid */}
                <div className="grid grid-cols-2 gap-5">
                  {/* Card */}
                  <div className="card bg-base-100 hover:bg-green-200 transition-all duration-150 shadow-xl">
                    <div className="card-body">
                      <div className="h-7 bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></div>
                      <div className="h-32 flex gap-2">
                        <div className="border w-[20%] bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></div>
                        <div className="border w-[80%] bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></div>
                      </div>
                      <div className="h-7 bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></div>
                    </div>
                  </div>
                  {/* End Card */}
                  {/* Card */}
                  <div className="card bg-base-100 hover:bg-green-200 transition-all duration-150 shadow-xl">
                    <div className="card-body">
                      <div className="flex gap-2 h-full">
                        <div className="w-[20%] bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></div>
                        <div className="w-[80%] flex flex-col justify-between gap-2">
                          <div className="h-[15%] bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></div>
                          <div className="h-[70%] bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></div>
                          <div className="h-[15%] bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}
                </div>
                {/* End Grid */}
              </div>
              <div className="w-[50%]">
                {/* Preview */}

                <div className="flex justify-between">
                  <h5 className="text-lg"> Preview Page</h5>
                  <div className="tabs  translate-y-[1px]">
                    <a className="tab tab-lifted ">Dashboard</a>
                    <a className="tab tab-lifted tab-active">Table</a>
                    <a className="tab tab-lifted">Pop Up</a>
                    <a className="tab tab-lifted ">Form</a>
                    <a className="tab tab-lifted">Button</a>
                    <a className="tab tab-lifted">Monitoring</a>
                  </div>
                </div>
                <div className="mockup-window border border-base-300 rounded-tr-none">
                  <div className="border-t border-base-300">
                    <div className="h-[300px] overflow-hidden rounded-md">
                      <div className="flex gap-2 h-full">
                        <div className="w-[15%] bg-[#1F2324] p-2 text-[#CED1D6] text-xs">
                          <div className=" rounded-md h-5 mb-1 px-2 mt-3">
                            Lorem
                          </div>
                          <div className=" rounded-md h-5 mb-1 px-2">Lorem</div>
                          <div className=" rounded-md h-5 mb-1 px-2">Lorem</div>
                          <div className="bg-[#9F2E23] rounded-md h-5 mb-1 px-2">
                            Lorem
                          </div>
                        </div>
                        <div className="w-[85%] flex flex-col text-sm pr-2 pt-2">
                          <div className="flex justify-between mb-2">
                            <span className="w-5 h-5 bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></span>
                            <div className="flex gap-1">
                              <span className="w-10 h-5 bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></span>
                              <span className="w-10 h-5 bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></span>
                              <span className="w-10 h-5 bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></span>
                              <span className="w-10 h-5 bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></span>
                              <span className="w-10 h-5 bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></span>
                            </div>
                          </div>

                          <div className="bg-[#9F2E23] rounded-md w-24 h-12 mb-2 p-1 text-[#DAD5AA] flex justify-between">
                            <div className="w-1/2 flex justify-center items-center">
                              <div className="h-5 w-5 bg-white rounded-full"></div>
                            </div>
                            <div className="w-11/12">
                              <p>Lorem</p>
                              <p className="text-xs">Lorem</p>
                            </div>
                          </div>

                          <div className="h-36 bg-[#2F3236] mb-2 p-2 px-5 rounded-md text-[#CED1D6]">
                            <div className="flex justify-between mb-2">
                              <div className="w-5 h-5  bg-[#1F2324] rounded-md"></div>
                              <div>
                                <div className="w-20 h-5 bg-[#1F2324] rounded-md"></div>
                              </div>
                            </div>
                            <div className="h-5 flex justify-between items-center bg-[#484A4E]">
                              <span>asd</span>
                              <span>asd</span>
                              <span>asd</span>
                            </div>

                            <div className="h-5 flex justify-between items-center bg-[#2F3236]">
                              <span>asd</span>
                              <span>asd</span>
                              <span>asd</span>
                            </div>
                            <div className="h-5 flex justify-between items-center bg-[#1F2324]">
                              <span>asd</span>
                              <span>asd</span>
                              <span>asd</span>
                            </div>
                            <div className="h-5 flex justify-between items-center bg-[#2F3236]">
                              <span>asd</span>
                              <span>asd</span>
                              <span>asd</span>
                            </div>
                            <div className="h-5 flex justify-between items-center bg-[#1F2324]">
                              <span>asd</span>
                              <span>asd</span>
                              <span>asd</span>
                            </div>
                          </div>

                          <div className="border h-12 bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* End Preview */}
              </div>
            </section>
            {/* End Preview section */}
            {/* <NavbarMenu /> */}

            {/* Menu Generator */}
            <section>
              <div className="">
                {/* <div className="tabs justify-center translate-y-[1px]">
                  <button
                    onClick={() => handleMenuChange(1)}
                    className="tab tab-lg tab-lifted transition duration-500 tab-active"
                  >
                    Navigation Bar
                  </button>
                  <button
                    onClick={() => handleMenuChange(2)}
                    className="tab tab-lg tab-lifted transition duration-500"
                  >
                    Sidebar
                  </button>
                  <button
                    onClick={() => handleMenuChange(3)}
                    className="tab tab-lg tab-lifted transition duration-500 "
                  >
                    Input
                  </button>
                  <button
                    onClick={() => handleMenuChange(4)}
                    className="tab tab-lg tab-lifted transition duration-500"
                  >
                    Button
                  </button>
                  <button
                    onClick={() => handleMenuChange(5)}
                    className="tab tab-lg tab-lifted transition duration-500"
                  >
                    Monitoring
                  </button>
                </div> */}
                <NavbarMenu />
              </div>
            </section>
            {/* End Menu Generator */}
          </main>
        </div>
      </div>
    </div>
  );
}
