import Navbar from "../components/Navbar";
import { useState } from "react";
import Side from "../components/Side";
import useStyleStore from "../store/CssStore";
import InputStyle from "../components/InputStyle";
import InputSelect from "../components/InputSelect";
import InputRangeSlider from "../components/InputRangeSlider";
const Toast = () => {
  const [currentTab, setCurrentTab] = useState("toastHeader");
  const stateToast = useStyleStore((state) => state);

  const handleTab = (elementClass) => {
    setCurrentTab(elementClass);
  };

  const tabComponent = {
    toastHeader: {
      dimension: [
        {
          name: "Height",
          property: "toastHeaderHeight",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "toastHeaderBorderWidth",
          defaultValue: "0px",
          type: "number",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "toastHeaderBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "toastHeaderShadow",
          defaultValue: "",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "toastHeaderColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "toastHeaderFontFamily",
          defaultValue: "0px",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "toastHeaderFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "toastHeaderBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "toastHeaderBackgroundGradient",
          defaultValue: "",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "toastHeaderFilterBlur",
          defaultValue: "",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "toastHeaderBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
    toastContent: {
      dimension: [
        {
          name: "Height",
          property: "toastContentHeight",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "toastContentBorderWidth",
          defaultValue: "0px",
          type: "number",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "toastContentBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "toastContentShadow",
          defaultValue: "",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "toastContentColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "toastContentFontFamily",
          defaultValue: "0px",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "toastContentFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "toastContentBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "toastContentBackgroundGradient",
          defaultValue: "",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "toastContentFilterBlur",
          defaultValue: "",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "toastContentBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
  };

  const tabComponentSlider = {
    card: [
      { name: "Border Radius", property: "cardBorderRadius", unit: "%" },
      { name: "Border Width", property: "cardBorderWidth", unit: "px" },
    ],
  };

  const tabComponentSelect = {
    sidebar: [
      {
        name: "Border Style",
        property: "cardBorderRadius",
        value: [
          { childName: "Small", value: "solid" },
          { childName: "Dotted", value: "dotted" },
        ],
      },
    ],
  };

  return (
    <div className=" min-h-screen bg-white dark:bg-[#0f172a] dark:text-slate-200">
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
                        <div className="h-full relative">
                          {/* Toast */}
                          <div
                            className="w-64 h-fit rounded-md absolute right-0 bottom-2 overflow-hidden shadow-md"
                            style={{
                              borderRadius: stateToast.cardBorderRadius,
                            }}
                          >
                            <div
                              className={`${
                                currentTab === "toastHeader"
                                  ? "border border-red-500"
                                  : ""
                              } border h-10 rounded-t-sm flex justify-center items-center bg-white  hover:border-red-500 cursor-pointer transition duration-300`}
                              onClick={() => handleTab("toastHeader")}
                              style={{
                                background: `${
                                  stateToast.toastHeaderBackgroundGradient ==
                                    null ||
                                  stateToast.toastHeaderBackgroundGradient == ""
                                    ? stateToast.toastHeaderBackgroundColor
                                    : stateToast.toastHeaderBackgroundGradient
                                }`,
                                borderWidth: `${stateToast.toastHeaderBorderWidth}px`,
                                borderColor: stateToast.toastHeaderBorderColor,
                                borderRadius:
                                  stateToast.toastHeaderBorderRadius,
                                boxShadow: stateToast.toastHeaderShadow,
                                color: stateToast.toastHeaderColor,
                                height: stateToast.toastHeaderHeight,
                                filter: `blur(${stateToast.toastHeaderFilterBlur})`,
                              }}
                            >
                              Toast Header
                            </div>
                            <div
                              className={`${
                                currentTab === "toastContent"
                                  ? "border border-red-500"
                                  : ""
                              } border-x h-16 bg-gray-100 flex justify-center items-center   hover:border-red-500 cursor-pointer transition duration-300 hover:border rounded-b-sm`}
                              onClick={() => handleTab("toastContent")}
                              style={{
                                background: `${
                                  stateToast.toastContentBackgroundGradient ==
                                    null ||
                                  stateToast.toastContentBackgroundGradient ==
                                    ""
                                    ? stateToast.toastContentBackgroundColor
                                    : stateToast.toastContentBackgroundGradient
                                }`,
                                borderWidth: `${stateToast.toastContentBorderWidth}px`,
                                borderColor: stateToast.toastContentBorderColor,
                                borderRadius:
                                  stateToast.toastContentBorderRadius,
                                boxShadow: stateToast.toastContentShadow,
                                color: stateToast.toastContentColor,
                                height: stateToast.toastContentHeight,
                                filter: `blur(${stateToast.toastContentFilterBlur})`,
                              }}
                            >
                              Toast Content
                            </div>
                          </div>
                          {/* End Toast */}
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
            {/* cardBorderRadius */}
            <div className="w-[20%] h-fit p-2">
              {tabComponentSlider.card.map((component, index) => (
                <InputRangeSlider
                  key={index}
                  name={component.name}
                  property={component.property}
                  unit={component.unit}
                />
              ))}
            </div>
            {/* End cardBorderRadius */}
            {/* End Menu Kanan */}
            {/* End Pembatas */}
          </div>

          {/* Menu Bawah */}
          {/* toastHeader */}
          <div
            className={`${
              currentTab === "toastHeader" ? "h-56" : "hidden"
            } overflow-y-scroll`}
          >
            {/* Dimension */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "toastHeader"
                ? tabComponent.toastHeader.dimension.map((component, index) => (
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
            {/* End Dimension */}
            {/* border */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "toastHeader"
                ? tabComponent.toastHeader.border.map((component, index) => (
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
            {/* End border */}
            {/* font */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "toastHeader"
                ? tabComponent.toastHeader.font.map((component, index) => (
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
            {/* End font */}
            {/* background */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "toastHeader"
                ? tabComponent.toastHeader.background.map(
                    (component, index) => (
                      <InputStyle
                        key={index}
                        name={component.name}
                        property={component.property}
                        defaultValue={component.defaultValue}
                        type={component.type}
                        placeholder={component.placeholder}
                      />
                    )
                  )
                : null}
            </div>
            {/* End background */}
            {/* file Upload */}
            <div className="grid grid-cols-1 gap-1 text-sm p-2">
              {currentTab === "toastHeader"
                ? tabComponent.toastHeader.upload.map((component, index) => (
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
            {/* End file Upload */}
          </div>
          {/* End toastHeader */}
          {/* toastContent */}
          <div
            className={`${
              currentTab === "toastContent" ? "h-56" : "hidden"
            } overflow-y-scroll`}
          >
            {/* Dimension */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "toastContent"
                ? tabComponent.toastContent.dimension.map(
                    (component, index) => (
                      <InputStyle
                        key={index}
                        name={component.name}
                        property={component.property}
                        defaultValue={component.defaultValue}
                        type={component.type}
                        placeholder={component.placeholder}
                      />
                    )
                  )
                : null}
            </div>
            {/* End Dimension */}
            {/* border */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "toastContent"
                ? tabComponent.toastContent.border.map((component, index) => (
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
            {/* End border */}
            {/* font */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "toastContent"
                ? tabComponent.toastContent.font.map((component, index) => (
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
            {/* End font */}
            {/* background */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "toastContent"
                ? tabComponent.toastContent.background.map(
                    (component, index) => (
                      <InputStyle
                        key={index}
                        name={component.name}
                        property={component.property}
                        defaultValue={component.defaultValue}
                        type={component.type}
                        placeholder={component.placeholder}
                      />
                    )
                  )
                : null}
            </div>
            {/* End background */}
            {/* file Upload */}
            <div className="grid grid-cols-1 gap-1 text-sm p-2">
              {currentTab === "toastContent"
                ? tabComponent.toastContent.upload.map((component, index) => (
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
            {/* End file Upload */}
          </div>
          {/* End toastContent */}
          {/* cardFooter */}
          <div
            className={`${
              currentTab === "cardFooter" ? "h-56" : "hidden"
            } overflow-y-scroll`}
          >
            {/* Dimension */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "cardFooter"
                ? tabComponent.cardFooter.dimension.map((component, index) => (
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
            {/* End Dimension */}
            {/* border */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "cardFooter"
                ? tabComponent.cardFooter.border.map((component, index) => (
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
            {/* End border */}
            {/* font */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "cardFooter"
                ? tabComponent.cardFooter.font.map((component, index) => (
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
            {/* End font */}
            {/* background */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "cardFooter"
                ? tabComponent.cardFooter.background.map((component, index) => (
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
            {/* End background */}
            {/* file Upload */}
            <div className="grid grid-cols-1 gap-1 text-sm p-2">
              {currentTab === "cardFooter"
                ? tabComponent.cardFooter.upload.map((component, index) => (
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
            {/* End file Upload */}
          </div>
          {/* End cardFooter */}
          {/* End Menu Bawah */}
        </div>
      </div>
    </div>
  );
};

export default Toast;
