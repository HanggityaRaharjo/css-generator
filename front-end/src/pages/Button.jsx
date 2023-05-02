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
      {
        name: "Background Color",
        property: "btnPrimaryBackground",
        defaultValue: stateButton.btnPrimaryBackground,
        type: "color",
        placeholder: "none",
      },
      {
        name: "Border Color",
        property: "btnPrimaryBackground",
        defaultValue: stateButton.btnPrimaryBackground,
        type: "color",
        placeholder: "none",
      },
    ],
    btnSecondary: [
      {
        name: "Background Color",
        property: "btnSecondaryBackground",
        defaultValue: stateButton.btnSecondaryBackground,
        type: "color",
        placeholder: "none",
      },
      {
        name: "Border Color",
        property: "btnSecondaryBackground",
        defaultValue: stateButton.btnSecondaryBackground,
        type: "color",
        placeholder: "none",
      },
    ],
    btnSuccess: [
      {
        name: "Background Color",
        property: "btnSuccessBackground",
        defaultValue: stateButton.btnSuccessBackground,
        type: "color",
        placeholder: "none",
      },
      {
        name: "Border Color",
        property: "btnSuccessBackground",
        defaultValue: stateButton.btnSuccessBackground,
        type: "color",
        placeholder: "none",
      },
    ],
    btnError: [
      {
        name: "Background Color",
        property: "btnErrorBackground",
        defaultValue: stateButton.btnErrorBackground,
        type: "color",
        placeholder: "none",
      },
      {
        name: "Border Color",
        property: "btnErrorBackground",
        defaultValue: stateButton.btnErrorBackground,
        type: "color",
        placeholder: "none",
      },
    ],
    btnWarning: [
      {
        name: "Background Color",
        property: "btnWarningBackground",
        defaultValue: stateButton.btnWarningBackground,
        type: "color",
        placeholder: "none",
      },
      {
        name: "Border Color",
        property: "btnWarningBackground",
        defaultValue: stateButton.btnWarningBackground,
        type: "color",
        placeholder: "none",
      },
    ],
    btnInfo: [
      {
        name: "Background Color",
        property: "btnInfoBackground",
        defaultValue: stateButton.btnInfoBackground,
        type: "color",
        placeholder: "none",
      },
      {
        name: "Border Color",
        property: "btnInfoBackground",
        defaultValue: stateButton.btnInfoBackground,
        type: "color",
        placeholder: "none",
      },
    ],
  };

  const tabComponentSlider = {
    btnPrimary: [
      { name: "Border Radius", property: "btnPrimaryBorderRadius", unit: "%" },
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
                <h5 className="text-xl font-bold"> Preview Page</h5>
              </div>

              {/* Windows Preview */}
              <div className="mockup-window border border-base-300 rounded-t-none ">
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
                        <div className="overflow-y-scroll">
                          {/* Button Rounded */}
                          <div className="rounded-md grid grid-cols-4 border">
                            {/* Primary */}
                            <div className="border">
                              <h4>Button Primary</h4>
                              <div>
                                <button
                                  className="px-4 py-2 rounded-[4px] btn btn-primary"
                                  style={{
                                    background:
                                      stateButton.btnPrimaryBackground,
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
                              <h4>Primary Outline</h4>
                              <div>
                                <button
                                  className="px-4 py-2 rounded-[4px] border btn btn-primary btn-outline"
                                  style={{
                                    borderColor:
                                      stateButton.btnSecondaryOutline,
                                    color: stateButton.btnSecondaryOutlineText,
                                  }}
                                >
                                  Button
                                </button>
                              </div>
                            </div>
                            <div className="border">
                              <h4>Primary Hover</h4>
                              <div>
                                <button
                                  className="px-4 py-2 rounded-[4px]  btn btn-primary bg-opacity-80"
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
                              <h4>Primary Active</h4>
                              <div>
                                <button
                                  className="px-4 py-2 rounded-[4px] btn btn-primary scale-90"
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
                            {/* Secondary */}
                            <div className="border">
                              <h4 className="text-xl">Button</h4>
                              <div>
                                <button
                                  className="px-4 py-2 rounded-[4px] btn btn-secondary"
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
                                  className="px-4 py-2 rounded-[4px] border btn btn-secondary btn-outline"
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
                                  className="px-4 py-2 rounded-[4px]  btn btn-secondary bg-opacity-80"
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
                                  className="px-4 py-2 rounded-[4px] btn btn-secondary scale-90"
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
                            {/* Success */}
                            <div className="border">
                              <h4 className="text-xl">Button</h4>
                              <div>
                                <button
                                  className="px-4 py-2 rounded-[4px] btn btn-success"
                                  style={{
                                    background:
                                      stateButton.btnSuccessBackground,
                                    color: stateButton.btnSuccessTextColor,
                                    borderRadius:
                                      stateButton.btnSuccessBorderRadius,
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
                                  className="px-4 py-2 rounded-[4px] border btn btn-success btn-outline"
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
                                  className="px-4 py-2 rounded-[4px]  btn btn-success bg-opacity-80"
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
                                  className="px-4 py-2 rounded-[4px] btn btn-success scale-90"
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
                            {/* Error */}
                            <div className="border">
                              <h4 className="text-xl">Button</h4>
                              <div>
                                <button
                                  className="px-4 py-2 rounded-[4px] btn btn-error"
                                  style={{
                                    background: stateButton.btnErrorBackground,
                                    color: stateButton.btnErrorTextColor,
                                    borderRadius:
                                      stateButton.btnErrorBorderRadius,
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
                                  className="px-4 py-2 rounded-[4px] border btn btn-error btn-outline"
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
                                  className="px-4 py-2 rounded-[4px]  btn btn-error bg-opacity-80"
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
                                  className="px-4 py-2 rounded-[4px] btn btn-error scale-90"
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
                            {/* Warning */}
                            <div className="border">
                              <h4 className="text-xl">Button</h4>
                              <div>
                                <button
                                  className="px-4 py-2 rounded-[4px] btn btn-warning"
                                  style={{
                                    background:
                                      stateButton.btnWarningBackground,
                                    color: stateButton.btnWarningTextColor,
                                    borderRadius:
                                      stateButton.btnWarningBorderRadius,
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
                                  className="px-4 py-2 rounded-[4px] border btn btn-warning btn-outline"
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
                                  className="px-4 py-2 rounded-[4px]  btn btn-warning bg-opacity-80"
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
                                  className="px-4 py-2 rounded-[4px] btn btn-warning scale-90"
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
                            {/* Info */}
                            <div className="border">
                              <h4 className="text-xl">Button</h4>
                              <div>
                                <button
                                  className="px-4 py-2 rounded-[4px] btn btn-info"
                                  style={{
                                    background: stateButton.btnInfoBackground,
                                    color: stateButton.btnInfoTextColor,
                                    borderRadius:
                                      stateButton.btnInfoBorderRadius,
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
                                  className="px-4 py-2 rounded-[4px] border btn btn-info btn-outline"
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
                                  className="px-4 py-2 rounded-[4px]  btn btn-info bg-opacity-80"
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
                                  className="px-4 py-2 rounded-[4px] btn btn-info scale-90"
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
                          </div>
                          {/* Circle Button */}
                          <div className="rounded-md grid grid-cols-4 border">
                            {/* Circle Primary */}
                            <div className="border">
                              <h4 className="text-xl">Button</h4>
                              <div>
                                <button
                                  className="rounded-full btn btn-primary"
                                  style={{
                                    background:
                                      stateButton.btnPrimaryBackground,
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
                                  className="rounded-full border btn btn-primary btn-outline"
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
                                  className="rounded-full  btn btn-primary bg-opacity-80"
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
                                  className="rounded-full btn btn-primary scale-90"
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
                            {/* Circle Secondary */}
                            <div className="border">
                              <h4 className="text-xl">Button</h4>
                              <div>
                                <button
                                  className="rounded-full btn btn-secondary"
                                  style={{
                                    background:
                                      stateButton.btnPrimaryBackground,
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
                                  className="rounded-full border btn btn-secondary btn-outline"
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
                                  className="rounded-full  btn btn-secondary bg-opacity-80"
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
                                  className="rounded-full btn btn-secondary scale-90"
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
                            {/* Circle Success */}
                            <div className="border">
                              <h4 className="text-xl">Button</h4>
                              <div>
                                <button
                                  className="rounded-full btn btn-success"
                                  style={{
                                    background:
                                      stateButton.btnPrimaryBackground,
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
                                  className="rounded-full border btn btn-success btn-outline"
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
                                  className="rounded-full  btn btn-success bg-opacity-80"
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
                                  className="rounded-full btn btn-success scale-90"
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
                            {/* Circle Error */}
                            <div className="border">
                              <h4 className="text-xl">Button</h4>
                              <div>
                                <button
                                  className="rounded-full btn btn-error"
                                  style={{
                                    background:
                                      stateButton.btnPrimaryBackground,
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
                                  className="rounded-full border btn btn-error btn-outline"
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
                                  className="rounded-full  btn btn-error bg-opacity-80"
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
                                  className="rounded-full btn btn-error scale-90"
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
                            {/* Circle Warning */}
                            <div className="border">
                              <h4 className="text-xl">Button</h4>
                              <div>
                                <button
                                  className="rounded-full btn btn-warning"
                                  style={{
                                    background:
                                      stateButton.btnPrimaryBackground,
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
                                  className="rounded-full border btn btn-warning btn-outline"
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
                                  className="rounded-full  btn btn-warning bg-opacity-80"
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
                                  className="rounded-full btn btn-warning scale-90"
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
                            {/* Circle Info */}
                            <div className="border">
                              <h4 className="text-xl">Button</h4>
                              <div>
                                <button
                                  className="rounded-full btn btn-info"
                                  style={{
                                    background:
                                      stateButton.btnPrimaryBackground,
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
                                  className="rounded-full border btn btn-info btn-outline"
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
                                  className="rounded-full  btn btn-info bg-opacity-80"
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
                                  className="rounded-full btn btn-info scale-90"
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
              <button
                className="tab tab-lifted button-success"
                onClick={() => handleTab("button-success")}
              >
                Success
              </button>
              <button
                className="tab tab-lifted button-danger"
                onClick={() => handleTab("button-danger")}
              >
                Danger
              </button>
              <button
                className="tab tab-lifted button-warning"
                onClick={() => handleTab("button-warning")}
              >
                Warning
              </button>
              <button
                className="tab tab-lifted button-info"
                onClick={() => handleTab("button-info")}
              >
                Info
              </button>
            </div>
          </div>
          {/* Menu Bawah */}
          <div className="grid grid-cols-6 gap-1 text-sm border-4 h-40 p-2 overflow-y-scroll">
            {/* Primary */}
            {currentTab == "button-primary"
              ? tabComponent.btnPrimary.map((component, index) => (
                  <InputStyle
                    key={index}
                    name={component.name}
                    property={component.property}
                    defaultValue={component.defaultValue}
                    type={component.type}
                    placeholder={component.placeholder}
                  />
                ))
              : null}
            {/* Secondary */}
            {currentTab == "button-secondary"
              ? tabComponent.btnSecondary.map((component, index) => (
                  <InputStyle
                    key={index}
                    name={component.name}
                    property={component.property}
                    defaultValue={component.defaultValue}
                    type={component.type}
                    placeholder={component.placeholder}
                  />
                ))
              : null}
            {/* SUCCESS */}
            {currentTab == "button-success"
              ? tabComponent.btnSuccess.map((component, index) => (
                  <InputStyle
                    key={index}
                    name={component.name}
                    property={component.property}
                    defaultValue={component.defaultValue}
                    type={component.type}
                    placeholder={component.placeholder}
                  />
                ))
              : null}
            {/* danger */}
            {currentTab == "button-danger"
              ? tabComponent.btnError.map((component, index) => (
                  <InputStyle
                    key={index}
                    name={component.name}
                    property={component.property}
                    defaultValue={component.defaultValue}
                    type={component.type}
                    placeholder={component.placeholder}
                  />
                ))
              : null}
            {/* Warning */}
            {currentTab == "button-warning"
              ? tabComponent.btnWarning.map((component, index) => (
                  <InputStyle
                    key={index}
                    name={component.name}
                    property={component.property}
                    defaultValue={component.defaultValue}
                    type={component.type}
                    placeholder={component.placeholder}
                  />
                ))
              : null}
            {/* Info */}
            {currentTab == "button-info"
              ? tabComponent.btnInfo.map((component, index) => (
                  <InputStyle
                    key={index}
                    name={component.name}
                    property={component.property}
                    defaultValue={component.defaultValue}
                    type={component.type}
                    placeholder={component.placeholder}
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
