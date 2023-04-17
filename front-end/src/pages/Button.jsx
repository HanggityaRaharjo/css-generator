import Navbar from "../components/Navbar";
import Side from "../components/Side";
import useStyleStore from "../store/CssStore";
import InputStyle from "../components/InputStyle";
import InputSelect from "../components/InputSelect";
import InputRangeSlider from "../components/InputRangeSlider";
import { useState } from "react";

const Button = () => {
  const stateButton = useStyleStore((state) => state);

  const [currentTab, setCurrentTab] = useState("button-primary");
  const handleTab = (elementClass) => {
    let tabActive = document.querySelector(".tab-active");
    if (tabActive !== null) {
      tabActive.classList.remove("tab-active");
    }
    setCurrentTab(elementClass);
    document.querySelector(`.${elementClass}`).classList.add("tab-active");
  };
  const tabComponent = {
    btnPrimary: [
      { name: "Background", property: "btnPrimaryBackground" },
      { name: "Color", property: "btnPrimaryTextColor" },
      { name: "Button Outline", property: "btnPrimaryOutline" },
      { name: "Text Outline", property: "btnPrimaryOutlineText" },
      { name: "Button Hover", property: "btnPrimaryHoverBackground" },
      { name: "Hover Text", property: "btnPrimaryHoverText" },
      { name: "Button Active", property: "btnPrimaryActiveBackground" },
      { name: "Active Text", property: "btnPrimaryActiveText" },
    ],
    btnSecondary: [
      { name: "Background", property: "btnSecondaryBackground" },
      { name: "Color", property: "btnSecondaryTextColor" },
      { name: "Button Outline", property: "btnSecondaryOutline" },
      { name: "Text Outline", property: "btnSecondaryOutlineText" },
      { name: "Button Hover", property: "btnSecondaryHoverBackground" },
      { name: "Hover Text", property: "btnSecondaryHoverText" },
      { name: "Button Active", property: "btnSecondaryActiveBackground" },
      { name: "Active Text", property: "btnSecondaryActiveText" },
    ],
  };

  const tabComponentSlider = {
    btnPrimary: [
      { name: "Border Radius", property: "btnPrimaryBorderRadius", unit: "%" },
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
                        <div className="rounded-md grid grid-cols-4">
                          {/* Primary */}
                          <div className="border">
                            <h4 className="text-xl">Button</h4>
                            <div>
                              <button
                                className="px-4 py-2 bg-primary rounded-md"
                                style={{
                                  background: stateButton.btnPrimaryBackground,
                                  color: stateButton.btnPrimaryTextColor,
                                  borderRadius:
                                    stateButton.btnPrimaryBorderRadius,
                                }}
                              >
                                Button
                              </button>
                            </div>
                          </div>
                          <div className="border">
                            <h4 className="text-xl">Outline</h4>
                            <div>
                              <button
                                className="px-4 py-2 border border-primary text-primary rounded-md"
                                style={{
                                  borderColor: stateButton.btnPrimaryOutline,
                                  color: stateButton.btnPrimaryOutlineText,
                                }}
                              >
                                Button
                              </button>
                            </div>
                          </div>
                          <div className="border">
                            <h4 className="text-xl">Hover</h4>
                            <div>
                              <button
                                className="px-4 py-2 bg-secondary rounded-md"
                                style={{
                                  background:
                                    stateButton.btnPrimaryHoverBackground,
                                  color: stateButton.btnPrimaryHoverText,
                                }}
                              >
                                Button
                              </button>
                            </div>
                          </div>
                          <div className="border">
                            {" "}
                            <h4 className="text-xl">Active</h4>
                            <div>
                              <button
                                className="px-4 py-2 bg-secondary rounded-md"
                                style={{
                                  background:
                                    stateButton.btnPrimaryActiveBackground,
                                  color: stateButton.btnPrimaryActiveText,
                                }}
                              >
                                Button
                              </button>
                            </div>
                          </div>
                          {/* Seconadry */}
                          <div className="border">
                            <h4 className="text-xl">Button</h4>
                            <div>
                              <button
                                className="px-4 py-2 bg-secondary rounded-md"
                                style={{
                                  background:
                                    stateButton.btnSecondaryBackground,
                                  color: stateButton.btnSecondaryTextColor,
                                  borderRadius:
                                    stateButton.btnSecondaryBorderRadius,
                                }}
                              >
                                Button
                              </button>
                            </div>
                          </div>
                          <div className="border">
                            <h4 className="text-xl">Outline</h4>
                            <div>
                              <button
                                className="px-4 py-2 border border-secondary text-secondary rounded-md"
                                style={{
                                  borderColor: stateButton.btnSecondaryOutline,
                                  color: stateButton.btnSecondaryOutlineText,
                                }}
                              >
                                Button
                              </button>
                            </div>
                          </div>
                          <div className="border">
                            <h4 className="text-xl">Hover</h4>
                            <div>
                              <button
                                className="px-4 py-2 bg-secondary rounded-md"
                                style={{
                                  background:
                                    stateButton.btnSecondaryHoverBackground,
                                  color: stateButton.btnSecondaryHoverText,
                                }}
                              >
                                Button
                              </button>
                            </div>
                          </div>
                          <div className="border">
                            {" "}
                            <h4 className="text-xl">Active</h4>
                            <div>
                              <button
                                className="px-4 py-2 bg-secondary rounded-md"
                                style={{
                                  background:
                                    stateButton.btnSecondaryActiveBackground,
                                  color: stateButton.btnSecondaryActiveText,
                                }}
                              >
                                Button
                              </button>
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
            <div className="w-[20%] h-fit p-2">
              {currentTab == "button-primary"
                ? tabComponentSlider.btnPrimary.map((components, index) => (
                    <InputRangeSlider
                      key={index}
                      name={components.name}
                      property={components.property}
                      unit={components.unit}
                    />
                  ))
                : null}
            </div>
            {/* End Pembatas */}
          </div>
          <div className="flex justify-center">
            <div className="tabs translate-y-[1px]">
              <button
                className="tab tab-lifted button-primary tab-active"
                onClick={() => handleTab("button-primary")}
              >
                Primary
              </button>
              <button
                className="tab tab-lifted button-secondary"
                onClick={() => handleTab("button-secondary")}
              >
                Secondary
              </button>
            </div>
          </div>
          {/* Menu Bawah */}
          <div className="grid grid-cols-6 gap-1 text-sm border-4 h-40 p-2 overflow-y-scroll">
            {currentTab == "button-primary"
              ? tabComponent.btnPrimary.map((components, index) => (
                  <InputStyle
                    key={index}
                    name={components.name}
                    property={components.property}
                  />
                ))
              : null}
            {currentTab == "button-secondary"
              ? tabComponent.btnSecondary.map((components, index) => (
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

export default Button;
