import React from "react";

const bisikepake = () => {
  return (
    <div className="w-[85%] p-5">
      <main>
        {/* Preview section */}
        <section className=" flex justify-between gap-5 mb-8"></section>
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
                  <input type="color" className="input input-bordered w-full" />
                </label>
              </div>

              <div className="form-control">
                <label className="input-group">
                  <span className="bg-gray-300">Color</span>
                  <input type="color" className="input input-bordered w-full" />
                </label>
              </div>

              <div className="form-control">
                <label className="input-group">
                  <span className="bg-gray-300">Hover Color</span>
                  <input type="color" className="input input-bordered w-full" />
                </label>
              </div>

              <div className="form-control">
                <label className="input-group">
                  <span className="bg-gray-300">Border Color</span>
                  <input type="color" className="input input-bordered w-full" />
                </label>
              </div>

              <div className="form-control">
                <label className="input-group">
                  <span className="bg-gray-300">Border Style</span>
                  <select type="color" className="input input-bordered w-full">
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
                  <input type="color" className="input input-bordered w-full" />
                </label>
              </div>

              <div className="form-control">
                <label className="input-group">
                  <span className="bg-gray-300">Hover Background</span>
                  <input type="color" className="input input-bordered w-full" />
                </label>
              </div>

              <div className="form-control">
                <label className="input-group">
                  <span className="bg-gray-300">Color</span>
                  <input type="color" className="input input-bordered w-full" />
                </label>
              </div>

              <div className="form-control">
                <label className="input-group">
                  <span className="bg-gray-300">Hover Color</span>
                  <input type="color" className="input input-bordered w-full" />
                </label>
              </div>

              <div className="form-control">
                <label className="input-group">
                  <span className="bg-gray-300">Border Color</span>
                  <input type="color" className="input input-bordered w-full" />
                </label>
              </div>

              {/* End Grid Item */}
            </div>
          </div>
        </section>
        {/* End Menu Generator */}
      </main>
    </div>
  );
};

export default bisikepake;
