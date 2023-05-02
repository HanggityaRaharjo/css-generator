import Navbar from "../components/Navbar";
import Side from "../components/Side";
import useStyleStore from "../store/CssStore";
import InputStyle from "../components/InputStyle";
import InputSelect from "../components/InputSelect";
import InputRangeSlider from "../components/InputRangeSlider";
import { useState } from "react";

const Monitoring = () => {
  const [currentTab, setCurrentTab] = useState("gauge");
  const stateMonitor = useStyleStore((state) => state);
  const handleTab = (elementClass) => {
    let tabActive = document.querySelector(".tab-active");
    if (tabActive !== null) {
      tabActive.classList.remove("tab-active");
    }
    setCurrentTab(elementClass);
    document.querySelector(`.${elementClass}`).classList.add("tab-active");
  };

  const tabComponent = {
    gauge: [
      { name: "Background", property: "cardGaugeBackground" },
      { name: "Color", property: "cardGaugeValueColor" },
      { name: "Background Progress", property: "cardBackgroundProgress" },
    ],
    monitor: [
      { name: "Background", property: "cardMonitorBackground" },
      { name: "Color", property: "cardMonitorColor" },
      { name: "Background Border", property: "monitorBorderBackground" },
      { name: "Value Color", property: "valueColor" },
    ],
  };

  return (
    <div className=" min-h-screen dark:bg-[#0f172a]">
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
                <h5 className="text-xl font-bold">Preview Page</h5>
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
                        {/* Gauge */}
                        <div className="grid grid-cols-4 gap-8 mb-2">
                          {/* Gauge */}
                          <div
                            className={`bg-gray-200  rounded-md h-28 flex justify-center items-center flex-col ${
                              currentTab == "gauge"
                                ? "border border-primary"
                                : null
                            }`}
                            style={{
                              background: stateMonitor.cardGaugeBackground,
                            }}
                          >
                            <div
                              className="w-20 h-20 bg-white rounded-full flex justify-center items-center"
                              style={{
                                background: stateMonitor.cardBackgroundProgress,
                              }}
                            >
                              <div
                                className="w-14 h-14 bg-gray-200  rounded-full relative flex justify-center items-center"
                                style={{
                                  background: stateMonitor.cardGaugeBackground,
                                  color: stateMonitor.cardGaugeValueColor,
                                }}
                              >
                                0%
                                <div
                                  className="bg-gray-200 overflow-hidden absolute -bottom-2 -left-2 rotate-[60deg] w-7 h-5"
                                  style={{
                                    background:
                                      stateMonitor.cardGaugeBackground,
                                  }}
                                ></div>
                                <div
                                  className="bg-gray-200 overflow-hidden absolute -bottom-2 -right-2 -rotate-[60deg] w-7 h-5"
                                  style={{
                                    background:
                                      stateMonitor.cardGaugeBackground,
                                  }}
                                ></div>
                                <div
                                  className="bg-gray-200 overflow-hidden absolute -bottom-3  w-7 h-4"
                                  style={{
                                    background:
                                      stateMonitor.cardGaugeBackground,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          {/* End Gauge */}

                          {/* Gauge */}
                          <div
                            className={`bg-gray-200  rounded-md h-28 flex justify-center items-center flex-col ${
                              currentTab == "gauge"
                                ? "border border-primary"
                                : null
                            }`}
                            style={{
                              background: stateMonitor.cardGaugeBackground,
                            }}
                          >
                            <div
                              className="w-20 h-20 bg-white rounded-full flex justify-center items-center"
                              style={{
                                background: stateMonitor.cardBackgroundProgress,
                              }}
                            >
                              <div
                                className="w-14 h-14 bg-gray-200  rounded-full relative flex justify-center items-center"
                                style={{
                                  background: stateMonitor.cardGaugeBackground,
                                  color: stateMonitor.cardGaugeValueColor,
                                }}
                              >
                                100%
                                <div
                                  className="bg-gray-200 overflow-hidden absolute -bottom-2 -left-2 rotate-[60deg] w-7 h-5 "
                                  style={{
                                    background:
                                      stateMonitor.cardGaugeBackground,
                                  }}
                                ></div>
                                <div
                                  className="bg-gray-200 overflow-hidden absolute -bottom-2 -right-2 -rotate-[60deg] w-7 h-5"
                                  style={{
                                    background:
                                      stateMonitor.cardGaugeBackground,
                                  }}
                                ></div>
                                <div
                                  className="bg-gray-200 overflow-hidden absolute -bottom-3  w-7 h-5"
                                  style={{
                                    background:
                                      stateMonitor.cardGaugeBackground,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          {/* End Gauge */}
                        </div>
                        {/* End Gauge */}

                        {/* Monitoring */}
                        <div className="grid grid-cols-2 gap-8">
                          {/* Monitoring */}
                          <div
                            className={`bg-gray-200 h-56 rounded-md p-8 relative ${
                              currentTab == "monitoring"
                                ? "border border-primary"
                                : null
                            }`}
                            style={{
                              background: stateMonitor.cardMonitorBackground,
                              color: stateMonitor.cardMonitorColor,
                            }}
                          >
                            <div
                              className="border-l border-b border-black h-full w-full relative"
                              style={{
                                borderColor: stateMonitor.cardMonitorColor,
                              }}
                            >
                              {/* Dislay transparent */}
                              <div
                                className="absolute w-[inherit] bg-primary bg-opacity-20 bottom-0 h-10 z-[100]"
                                style={{ background: stateMonitor.valueColor }}
                              ></div>

                              <div
                                className="absolute w-20 bg-primary bg-opacity-20 bottom-10 right-28 h-14 z-50"
                                style={{ background: stateMonitor.valueColor }}
                              ></div>
                              <div
                                className="absolute w-20 bg-primary bg-opacity-20 bottom-10 right-0 h-20 z-50"
                                style={{ background: stateMonitor.valueColor }}
                              ></div>
                              <div
                                className="absolute w-20 bg-primary bg-opacity-20 bottom-10 left-10 h-10 z-50"
                                style={{ background: stateMonitor.valueColor }}
                              ></div>
                            </div>
                            {/* Y */}
                            <div className="flex flex-col absolute bottom-8 left-0 w-8 items-end pr-1">
                              <span>70</span>
                              <span>60</span>
                              <span>50</span>
                              <span>40</span>
                              <span>30</span>
                              <span>20</span>
                              <span>10</span>
                              <span>0</span>
                            </div>
                            {/* X */}
                            <div className=" flex gap-2  absolute h-8">
                              <span>00:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                            </div>
                            {/* Border */}
                            <div className="absolute left-9 flex flex-col bottom-8 w-[450px] overflow-hidden opacity-20 ">
                              <div
                                className="border-b border-gray-100 w-full h-[23px]"
                                style={{
                                  borderColor:
                                    stateMonitor.monitorBorderBackground,
                                }}
                              ></div>
                              <div
                                className="border-b border-gray-100 w-full h-[23px]"
                                style={{
                                  borderColor:
                                    stateMonitor.monitorBorderBackground,
                                }}
                              ></div>
                              <div
                                className="border-b border-gray-100 w-full h-[23px]"
                                style={{
                                  borderColor:
                                    stateMonitor.monitorBorderBackground,
                                }}
                              ></div>
                              <div
                                className="border-b border-gray-100 w-full h-[23px]"
                                style={{
                                  borderColor:
                                    stateMonitor.monitorBorderBackground,
                                }}
                              ></div>
                              <div
                                className="border-b border-gray-100 w-full h-[23px]"
                                style={{
                                  borderColor:
                                    stateMonitor.monitorBorderBackground,
                                }}
                              ></div>
                              <div
                                className="border-b border-gray-100 w-full h-[23px]"
                                style={{
                                  borderColor:
                                    stateMonitor.monitorBorderBackground,
                                }}
                              ></div>
                              <div className="  w-full h-[23px]"></div>
                            </div>
                          </div>
                          {/* End Monitoring */}
                          {/* Monitoring */}
                          <div
                            className={`bg-gray-200 h-56 rounded-md p-8 relative ${
                              currentTab == "monitoring"
                                ? "border border-primary"
                                : null
                            }`}
                            style={{
                              background: stateMonitor.cardMonitorBackground,
                              color: stateMonitor.cardMonitorColor,
                            }}
                          >
                            <div
                              className="border-l border-b border-black h-full w-full relative"
                              style={{
                                borderColor: stateMonitor.cardMonitorColor,
                              }}
                            >
                              {/* Dislay transparent */}
                              <div
                                className="absolute w-[inherit] bg-primary bg-opacity-20 bottom-0 h-10 z-[100]"
                                style={{ background: stateMonitor.valueColor }}
                              ></div>

                              <div
                                className="absolute w-20 bg-primary bg-opacity-20 bottom-10 right-28 h-14 z-50"
                                style={{ background: stateMonitor.valueColor }}
                              ></div>
                              <div
                                className="absolute w-20 bg-primary bg-opacity-20 bottom-10 right-0 h-20 z-50"
                                style={{ background: stateMonitor.valueColor }}
                              ></div>
                              <div
                                className="absolute w-20 bg-primary bg-opacity-20 bottom-10 left-10 h-10 z-50"
                                style={{ background: stateMonitor.valueColor }}
                              ></div>
                            </div>
                            {/* Y */}
                            <div className="flex flex-col absolute bottom-8 left-0 w-8 items-end pr-1">
                              <span>70</span>
                              <span>60</span>
                              <span>50</span>
                              <span>40</span>
                              <span>30</span>
                              <span>20</span>
                              <span>10</span>
                              <span>0</span>
                            </div>
                            {/* X */}
                            <div className=" flex gap-2  absolute h-8">
                              <span>00:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                              <span>10:00</span>
                            </div>
                            {/* Border */}
                            <div className="absolute left-9 flex flex-col bottom-8 w-[450px] overflow-hidden opacity-20 ">
                              <div
                                className="border-b border-gray-100 w-full h-[23px]"
                                style={{
                                  borderColor:
                                    stateMonitor.monitorBorderBackground,
                                }}
                              ></div>
                              <div
                                className="border-b border-gray-100 w-full h-[23px]"
                                style={{
                                  borderColor:
                                    stateMonitor.monitorBorderBackground,
                                }}
                              ></div>
                              <div
                                className="border-b border-gray-100 w-full h-[23px]"
                                style={{
                                  borderColor:
                                    stateMonitor.monitorBorderBackground,
                                }}
                              ></div>
                              <div
                                className="border-b border-gray-100 w-full h-[23px]"
                                style={{
                                  borderColor:
                                    stateMonitor.monitorBorderBackground,
                                }}
                              ></div>
                              <div
                                className="border-b border-gray-100 w-full h-[23px]"
                                style={{
                                  borderColor:
                                    stateMonitor.monitorBorderBackground,
                                }}
                              ></div>
                              <div
                                className="border-b border-gray-100 w-full h-[23px]"
                                style={{
                                  borderColor:
                                    stateMonitor.monitorBorderBackground,
                                }}
                              ></div>
                              <div className="  w-full h-[23px]"></div>
                            </div>
                          </div>
                          {/* End Monitoring */}
                        </div>
                        {/* End Monitoring */}

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
          <div className="flex justify-center">
            <div className="tabs translate-y-[1px]">
              <button
                className="tab tab-lifted gauge tab-active"
                onClick={() => handleTab("gauge")}
              >
                Gauge
              </button>
              <button
                className="tab tab-lifted monitoring"
                onClick={() => handleTab("monitoring")}
              >
                Monitoring
              </button>
            </div>
          </div>
          {/* Menu Bawah */}
          <div className="grid grid-cols-6 gap-1 text-sm border-4 h-40 p-2 overflow-y-scroll">
            {currentTab == "gauge"
              ? tabComponent.gauge.map((components, index) => (
                  <InputStyle
                    key={index}
                    name={components.name}
                    property={components.property}
                  />
                ))
              : null}
            {currentTab == "monitoring"
              ? tabComponent.monitor.map((components, index) => (
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

export default Monitoring;
