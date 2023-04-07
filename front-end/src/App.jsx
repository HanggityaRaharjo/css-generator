import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <div className="flex h-screen pt-16">
        <div className="w-[15%] bg-base-200">Side</div>
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
                    <a className="tab tab-lifted ">Form</a>
                    <a className="tab tab-lifted">Button</a>
                    <a className="tab tab-lifted">Monitoring</a>
                  </div>
                </div>
                <div className="mockup-window border border-base-300 rounded-tr-none">
                  <div className="border-t border-base-300">
                    <div className="h-[300px] overflow-hidden rounded-md">
                      <div className="flex gap-2 h-full">
                        <div className="w-[15%] bg-gradient-to-tr from-base-300 via-base-200 to-base-300"></div>
                        <div className="w-[85%] flex flex-col text-sm">
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

                          <div className="bg-gradient-to-tr from-base-300 via-base-200 to-base-300 w-20 h-10 mb-2"></div>

                          <div className="h-36 bg-gradient-to-tr from-base-300 via-base-200 to-base-300 mb-2"></div>

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

            {/* Menu Generator */}
            <section>
              <div className="">
                <div className="tabs justify-center translate-y-[1px]">
                  <a className="tab tab-lg tab-lifted ">Navigation Bar</a>
                  <a className="tab tab-lg tab-lifted tab-active">Sidebar</a>
                  <a className="tab tab-lg tab-lifted ">Input</a>
                  <a className="tab tab-lg tab-lifted">Button</a>
                  <a className="tab tab-lg tab-lifted">Monitoring</a>
                </div>
                <div className="border-[1px] h-96 rounded-md border-gray-300 overflow-hidden p-5">
                  <div className="grid grid-cols-5 gap-5">
                    {/* Grid Item */}
                    <div className="form-control">
                      <label className="input-group">
                        <span className="bg-gray-300">Background Color</span>
                        <input
                          type="color"
                          className="input input-bordered w-full"
                        />
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

                    {/* End Grid Item */}
                  </div>
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
