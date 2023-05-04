import Navbar from "../components/Navbar";
import Side from "../components/Side";
import useStyleStore from "../store/CssStore";
import InputStyle from "../components/InputStyle";
import InputSelect from "../components/InputSelect";
import InputRangeSlider from "../components/InputRangeSlider";
import { useState } from "react";

const Popup = () => {
  const [currentTab, setCurrentTab] = useState("popup-success");
  const stateNotif = useStyleStore((state) => state);

  const handleTab = (elementClass) => {
    let tabActive = document.querySelector(".tab-active");
    if (tabActive !== null) {
      tabActive.classList.remove("tab-active");
    }
    setCurrentTab(elementClass);
    document.querySelector(`.${elementClass}`).classList.add("tab-active");
  };

  const tabComponent = {
    popUp: [
      { name: "Background Card", property: "popUpCardBackground" },
      { name: "Title Color", property: "popUpTextColor" },
      { name: "Background Success", property: "popUpSuccessBackground" },
      { name: "Color Success", property: "popUpSuccessColor" },
      { name: "Background Failed", property: "popUpFailedBackground" },
      { name: "Color Failed", property: "popUpFailedColor" },
      { name: "Pop Up Button", property: "popUpBtnBackground" },
      { name: "Button Text", property: "popUpBtnTextColor" },
    ],
  };

  return (
    <div className="min-h-screen dark:bg-[#0f172a] dark:text-slate-200">
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
                    <div className="flex gap-2 h-full relative">
                      {/* Sidebar */}
                      <div className="w-[15%] bg-gradient-to-tr from-base-300 via-base-200 to-base-300 p-2 text-black text-xs h-full">
                        <div className=" rounded-md h-5 mb-1 px-2 mt-3">
                          Lorem
                        </div>
                        <div className="rounded-md h-5 mb-1 px-2">Lorem</div>
                        <div className="rounded-md h-5 mb-1 px-2">Lorem</div>
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
                        <div
                          className={`bg-gradient-to-tr from-base-300 via-base-200 to-base-300 rounded-md p-2`}
                        >
                          Test
                          <div className="bg-black bg-opacity-20 backdrop-blur-sm absolute left-0 top-0 w-full h-full flex justify-center items-center gap-5">
                            {/* PopUp Success */}
                            <div
                              className="w-80 h-64 bg-gray-400 rounded-md flex justify-center items-center flex-col"
                              style={{
                                background: stateNotif.popUpCardBackground,
                              }}
                            >
                              <div className="mb-1 w-32 h-32 rounded-full ">
                                <svg
                                  viewBox="0 0 122 122"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="text-primary scale-125"
                                  style={{
                                    color: stateNotif.popUpSuccessBackground,
                                  }}
                                >
                                  <g filter="url(#filter0_d_923_82928)">
                                    <circle
                                      cx="61"
                                      cy="61"
                                      r="46"
                                      fill="currentColor"
                                    />
                                  </g>
                                  <path
                                    d="M40.2998 61.3835L55.3094 76.3931C55.6999 76.7836 56.3331 76.7836 56.7236 76.3931L85.9165 47.2002"
                                    stroke={
                                      !stateNotif.popUpSuccessColor
                                        ? "#E2E7EC"
                                        : stateNotif.popUpSuccessColor
                                    }
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                  />
                                  <defs>
                                    <filter
                                      id="filter0_d_923_82928"
                                      x="0"
                                      y="0"
                                      width="122"
                                      height="122"
                                      filterUnits="userSpaceOnUse"
                                      colorInterpolationFilters="sRGB"
                                    >
                                      <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset />
                                      <feGaussianBlur stdDeviation="7.5" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="out"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0.34902 0 0 0 0 0.517647 0 0 0 0 0.439216 0 0 0 0.5 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_923_82928"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_923_82928"
                                        result="shape"
                                      />
                                    </filter>
                                  </defs>
                                </svg>
                              </div>
                              <div className="flex flex-col gap-1">
                                <h3
                                  className="text-white text-2xl font-bold"
                                  style={{
                                    color: stateNotif.popUpTextColor,
                                  }}
                                >
                                  Success
                                </h3>
                                <button
                                  className="btn btn-primary"
                                  style={{
                                    background: stateNotif.popUpBtnBackground,
                                    borderColor: stateNotif.popUpBtnBackground,
                                    color: stateNotif.popUpBtnTextColor,
                                  }}
                                >
                                  OK
                                </button>
                              </div>
                            </div>
                            {/* Popup Failed */}
                            <div
                              className="w-80 h-64 bg-gray-400 rounded-md flex justify-center items-center flex-col"
                              style={{
                                background: stateNotif.popUpCardBackground,
                              }}
                            >
                              <div className="mb-1 w-32 h-32 rounded-full">
                                <svg
                                  viewBox="0 0 112 112"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="text-red-500 scale-[1.1]"
                                  style={{
                                    color: stateNotif.popUpFailedBackground,
                                  }}
                                >
                                  <g filter="url(#filter0_d_923_83002)">
                                    <circle
                                      cx="56.5"
                                      cy="56"
                                      r="46"
                                      fill="currentColor"
                                    />
                                  </g>
                                  <path
                                    d="M63.7959 25.84L62.1959 64.16H50.5959L48.9959 25.84H63.7959ZM56.5959 84.64C54.1959 84.64 52.2226 83.9467 50.6759 82.56C49.1826 81.12 48.4359 79.36 48.4359 77.28C48.4359 75.1467 49.1826 73.36 50.6759 71.92C52.2226 70.48 54.1959 69.76 56.5959 69.76C58.9426 69.76 60.8626 70.48 62.3559 71.92C63.9026 73.36 64.6759 75.1467 64.6759 77.28C64.6759 79.36 63.9026 81.12 62.3559 82.56C60.8626 83.9467 58.9426 84.64 56.5959 84.64Z"
                                    fill={
                                      !stateNotif.popUpFailedColor
                                        ? "#E2E7EC"
                                        : stateNotif.popUpFailedColor
                                    }
                                  />
                                  <defs>
                                    <filter
                                      id="filter0_d_923_83002"
                                      x="0.5"
                                      y="0"
                                      width="112"
                                      height="112"
                                      filterUnits="userSpaceOnUse"
                                      colorInterpolationFilters="sRGB"
                                    >
                                      <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset />
                                      <feGaussianBlur stdDeviation="5" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="out"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0.760784 0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0.5 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_923_83002"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_923_83002"
                                        result="shape"
                                      />
                                    </filter>
                                  </defs>
                                </svg>
                              </div>
                              <div className="flex flex-col gap-1">
                                <h3
                                  className="text-white text-2xl font-bold"
                                  style={{
                                    color: stateNotif.popUpTextColor,
                                  }}
                                >
                                  Failed
                                </h3>
                                <button
                                  className="btn btn-primary"
                                  style={{
                                    background: stateNotif.popUpBtnBackground,
                                    borderColor: stateNotif.popUpBtnBackground,
                                    color: stateNotif.popUpBtnTextColor,
                                  }}
                                >
                                  OK
                                </button>
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
          {/* Tabs */}
          <div className="flex justify-center">
            <div className="tabs translate-y-[1px]">
              <button
                className="tab tab-lifted popup-success tab-active"
                onClick={() => handleTab("popup-success")}
              >
                Pop Up Success
              </button>
            </div>
          </div>
          {/* End Tabs */}
          {/* Menu Bawah */}
          <div className="grid grid-cols-3 gap-1 text-sm h-56 p-2 overflow-y-scroll">
            {tabComponent.popUp.map((components, index) => (
              <InputStyle
                key={index}
                name={components.name}
                property={components.property}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
