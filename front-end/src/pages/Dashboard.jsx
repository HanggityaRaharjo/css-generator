import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import useStyleStore from "../store/CssStore";
import axios from "axios";

export default function Dashboard() {
  const bears = useStyleStore((state) => state);
  const [sidebarBackground, setSidebarBackground] = useState("#ffffff");

  const handleGenerate = () => {
    axios
      .post("http://localhost:8000/api/tes", {
        sidebarBackground: sidebarBackground,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className=" min-h-screen">
      <Navbar />
      <div className="flex h-screen pt-16">
        <div className="w-[15%] bg-base-200 p-5">
          <Link to={"/"}>
            <div className="border border-gray-500 rounded-md p-2 mb-5">
              Dashboard
            </div>
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

                          <div className="mb-10 text-[#CED1D6] grid grid-cols-2 gap-10">
                            <div className="bg-[#2F3236] h-28 rounded-md flex justify-between gap-5 items-center px-10">
                              <div className="w-4/12">
                                <div className="w-16 h-16 bg-white rounded-full"></div>
                              </div>
                              <div className="w-8/12 text-[#DAD5AA]">
                                <p className="text-lg">lorem</p>
                                <p>lorem</p>
                                <p>lorem</p>
                              </div>
                            </div>
                            <div className="bg-[#2F3236] h-28 rounded-md"></div>
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
              <div className="flex gap-5">
                <button className="btn btn-primary" onClick={handleGenerate}>
                  Generate
                </button>
                <button className="btn btn-primary">Download</button>
              </div>
              <div className="border-[1px] h-96 rounded-md border-gray-300 overflow-hidden p-5">
                <h3 className="mb-2 text-2xl font-bold">Dashboard Page</h3>
                <div className="grid grid-cols-5 gap-5">
                  {/* Grid Item */}
                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-gray-300">Background Color</span>
                      <input
                        type="color"
                        className="input input-bordered w-full"
                        onChange={(e) => setSidebarBackground(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-gray-300">Hover Background</span>
                      <input
                        type="color"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-gray-300">Color</span>
                      <input
                        type="color"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-gray-300">Hover Color</span>
                      <input
                        type="color"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-gray-300">Border Color</span>
                      <input
                        type="color"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-gray-300">Border Style</span>
                      <select
                        type="color"
                        className="input input-bordered w-full"
                      >
                        <option value="">Dotted</option>
                        <option value="">Dashed</option>
                        <option value="">Solid</option>
                        <option value="">Double</option>
                        <option value="">Groove</option>
                        <option value="">Ridge</option>
                        <option value="">Inset</option>
                        <option value="">Outset</option>
                        <option value="">None</option>
                        <option value="">Hidden</option>
                      </select>
                    </label>
                  </div>

                  <div className="form-control flex justify-center items-center gap-1">
                    <label className="bg-gray-300 px-2 rounded-md">
                      Border Radius
                    </label>
                    <input type="range" className="w-full" />
                  </div>

                  <div className="form-control flex justify-center items-center gap-1">
                    <label className="bg-gray-300 px-2 rounded-md">
                      Border Width
                    </label>
                    <input type="range" className="w-full" />
                  </div>

                  <div className="form-control flex justify-center items-center gap-1">
                    <label className="bg-gray-300 px-2 rounded-md">
                      Border Width
                    </label>
                    <input type="range" className="w-full" />
                  </div>

                  <div className="form-control flex justify-center items-center gap-1">
                    <label className="bg-gray-300 px-2 rounded-md">
                      Border Width
                    </label>
                    <input type="range" className="w-full" />
                  </div>

                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-gray-300">Background Color</span>
                      <input
                        type="color"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-gray-300">Hover Background</span>
                      <input
                        type="color"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-gray-300">Color</span>
                      <input
                        type="color"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-gray-300">Hover Color</span>
                      <input
                        type="color"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-gray-300">Border Color</span>
                      <input
                        type="color"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>

                  {/* End Grid Item */}
                </div>
              </div>
            </section>
            {/* End Menu Generator */}
          </main>
        </div>
      </div>
    </div>
  );
}
