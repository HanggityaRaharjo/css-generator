import { useState } from "react";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import useStyleStore from "../store/CssStore";
import InputStyle from "../components/InputStyle";

const Theme = () => {
  const stateColor = useStyleStore((state) => state);

  const [currentTab, setCurrentTab] = useState("primary");

  const handleTab = (elementClass) => {
    setCurrentTab(elementClass);
  };

  console.log(stateColor.colorPrimary);

  const tabComponent = {
    primary: [
      {
        name: "Color",
        property: "colorPrimary",
        defaultValue: "#007bff",
        type: "color",
        placeholder: "none",
      },
      {
        name: "Color",
        property: "colorSecondary",
        defaultValue: "#6c757d",
        type: "color",
        placeholder: "none",
      },
      {
        name: "Color",
        property: "colorSuccess",
        defaultValue: "#28a745",
        type: "color",
        placeholder: "none",
      },
      {
        name: "Color",
        property: "colorWarning",
        defaultValue: "#ffc107",
        type: "color",
        placeholder: "none",
      },
      {
        name: "Color",
        property: "colorInfo",
        defaultValue: "#17a2b8",
        type: "color",
        placeholder: "none",
      },
      {
        name: "Color",
        property: "colorDanger",
        defaultValue: "#dc3545",
        type: "color",
        placeholder: "none",
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
                        >
                          Lorem
                        </div>
                      </div>
                      <div className="w-[85%] flex flex-col text-sm pr-2 pt-2">
                        {/* Navigation */}
                        <div className={`flex justify-between mb-2 `}>
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
                        <div className="bg-black bg-opacity-30 backdrop-blur-sm absolute left-0 top-0 h-full w-full flex justify-center items-center">
                          <div className="w-96 h-full overflow-hidden rounded-md bg-white  flex flex-col justify-between p-5">
                            {/* Primary */}
                            <div className="w-full flex items-center">
                              <div className="w-4/12 flex flex-col items-center">
                                <p className="text-md">Primary Color</p>
                                <div
                                  className="w-16 h-16 rounded-full border bg-[#007bff]"
                                  style={{
                                    background: stateColor.colorPrimary,
                                  }}
                                ></div>
                              </div>
                              <div className="text-center w-8/12">
                                <p className="text-center">
                                  {stateColor.colorPrimary
                                    ? stateColor.colorPrimary
                                    : "#007bff"}
                                </p>
                              </div>
                            </div>
                            {/* End Primary */}
                            {/* Secondary */}
                            <div className="w-full flex items-center">
                              <div className="w-4/12 flex flex-col items-center">
                                <p className="text-md">Secondary Color</p>
                                <div
                                  className="w-16 h-16 rounded-full border bg-[#6c757d]"
                                  style={{
                                    background: stateColor.colorSecondary,
                                  }}
                                ></div>
                              </div>
                              <div className="text-center w-8/12">
                                <p className="text-center">
                                  {stateColor.colorSecondary
                                    ? stateColor.colorSecondary
                                    : "#6c757d"}
                                </p>
                              </div>
                            </div>
                            {/* End Secondary */}
                            {/* Success */}
                            <div className="w-full flex items-center">
                              <div className="w-4/12 flex flex-col items-center">
                                <p className="text-md">Success Color</p>
                                <div
                                  className="w-16 h-16 rounded-full border bg-[#28a745]"
                                  style={{
                                    background: stateColor.colorSuccess,
                                  }}
                                ></div>
                              </div>
                              <div className="text-center w-8/12">
                                <p className="text-center">
                                  {stateColor.colorSuccess
                                    ? stateColor.colorSuccess
                                    : "#28a745"}
                                </p>
                              </div>
                            </div>
                            {/* End Success */}
                            {/* Warning */}
                            <div className="w-full flex items-center">
                              <div className="w-4/12 flex flex-col items-center">
                                <p className="text-md">Warning Color</p>
                                <div
                                  className="w-16 h-16 rounded-full border bg-[#ffc107]"
                                  style={{
                                    background: stateColor.colorWarning,
                                  }}
                                ></div>
                              </div>
                              <div className="text-center w-8/12">
                                <p className="text-center">
                                  {stateColor.colorWarning
                                    ? stateColor.colorWarning
                                    : "#ffc107"}
                                </p>
                              </div>
                            </div>
                            {/* End Warning */}
                            {/* Info */}
                            <div className="w-full flex items-center">
                              <div className="w-4/12 flex flex-col items-center">
                                <p className="text-md">Info Color</p>
                                <div
                                  className="w-16 h-16 rounded-full border bg-[#17a2b8]"
                                  style={{
                                    background: stateColor.colorInfo,
                                  }}
                                ></div>
                              </div>
                              <div className="text-center w-8/12">
                                <p className="text-center">
                                  {stateColor.colorInfo
                                    ? stateColor.colorInfo
                                    : "#17a2b8"}
                                </p>
                              </div>
                            </div>
                            {/* End Info */}
                            {/* Danger */}
                            <div className="w-full flex items-center">
                              <div className="w-4/12 flex flex-col items-center">
                                <p className="text-md">Danger Color</p>
                                <div
                                  className="w-16 h-16 rounded-full border bg-[#dc3545]"
                                  style={{
                                    background: stateColor.colorDanger,
                                  }}
                                ></div>
                              </div>
                              <div className="text-center w-8/12">
                                <p className="text-center">
                                  {stateColor.colorDanger
                                    ? stateColor.colorDanger
                                    : "#dc3545"}
                                </p>
                              </div>
                            </div>
                            {/* End Danger */}
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

          <div className="grid grid-cols-6 gap-1 text-sm border-4 h-40 p-2 overflow-y-scroll">
            {currentTab == "primary"
              ? tabComponent.primary.map((components, index) => (
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

export default Theme;
