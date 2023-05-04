import Navbar from "../components/Navbar";
import { useState } from "react";
import Side from "../components/Side";
import useStyleStore from "../store/CssStore";
import InputStyle from "../components/InputStyle";
import InputSelect from "../components/InputSelect";
import InputRangeSlider from "../components/InputRangeSlider";
const Alert = () => {
  const [currentTab, setCurrentTab] = useState("cardHeader");
  const stateCard = useStyleStore((state) => state);

  const handleTab = (elementClass) => {
    setCurrentTab(elementClass);
  };

  const tabComponent = {
    cardHeader: {
      dimension: [
        {
          name: "Height",
          property: "cardHeaderHeight",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "cardHeaderBorderWidth",
          defaultValue: "0px",
          type: "number",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "cardHeaderBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "cardHeaderShadow",
          defaultValue: "",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "cardHeaderColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "cardHeaderFontFamily",
          defaultValue: "0px",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "cardHeaderFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "cardHeaderBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "cardHeaderBackgroundGradient",
          defaultValue: "",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "cardHeaderFilterBlur",
          defaultValue: "",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "cardHeaderBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
    cardContent: {
      dimension: [
        {
          name: "Height",
          property: "cardContentHeight",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "cardContentBorderWidth",
          defaultValue: "0px",
          type: "number",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "cardContentBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "cardContentShadow",
          defaultValue: "",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "cardContentColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "cardContentFontFamily",
          defaultValue: "0px",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "cardContentFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "cardContentBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "cardContentBackgroundGradient",
          defaultValue: "",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "cardContentFilterBlur",
          defaultValue: "",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "cardContentBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
    cardFooter: {
      dimension: [
        {
          name: "Height",
          property: "cardFooterHeight",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "cardFooterBorderWidth",
          defaultValue: "0px",
          type: "number",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "cardFooterBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "cardFooterShadow",
          defaultValue: "",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "cardFooterColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "cardFooterFontFamily",
          defaultValue: "0px",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "cardFooterFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "cardFooterBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "cardFooterBackgroundGradient",
          defaultValue: "",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "cardFooterFilterBlur",
          defaultValue: "",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "cardFooterBackgroundImage",
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
    <div className=" min-h-screen dark:bg-[#0f172a] dark:text-slate-200">
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
                <h5 className="text-xl font-bold">Preview Page</h5>
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
                        <h2 className="text-2xl font-bold mt-5">Alert</h2>
                        {/* Alert */}
                        <div className="flex flex-col h-full">
                          {/* Success */}
                          <div className="p-2 mb-2 bg-[#cce5ff] text-[#004085] border border-[#b8daff] rounded-md w-full text-white">
                            Success Alert
                          </div>
                          {/* End Success */}
                          {/* Secondary */}
                          <div className="p-2 mb-2 bg-[#e2e3e5] text-[#383d41] border border-[#d6d8db] rounded-md w-full text-white">
                            Secondary Alert
                          </div>
                          {/* End Secondary */}
                          {/* Success */}
                          <div className="p-2 mb-2 bg-[#d4edda] text-[#155724] border border-[#c3e6cb] rounded-md w-full text-white">
                            Success Alert
                          </div>
                          {/* End Success */}
                          {/* Danger */}
                          <div className="p-2 mb-2 bg-[#f8d7da] text-[#721c24] border border-[#f5c6cb] rounded-md w-full text-white">
                            Danger Alert
                          </div>
                          {/* End Danger */}
                          {/* Warning */}
                          <div className="p-2 mb-2 bg-[#fff3cd] text-[#856404] border border-[#ffeeba] rounded-md w-full text-white">
                            Warning Alert
                          </div>
                          {/* End Warning */}
                          {/* Info */}
                          <div className="p-2 mb-2 bg-[#d1ecf1] text-[#0c5460] border border-[#bee5eb] rounded-md w-full text-white">
                            Info Alert
                          </div>
                          {/* End Info */}
                        </div>
                        {/* End Alert */}

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
          {/* cardHeader */}
          <div
            className={`${
              currentTab === "cardHeader" ? "h-56" : "hidden"
            } overflow-y-scroll`}
          >
            {/* Dimension */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "cardHeader"
                ? tabComponent.cardHeader.dimension.map((component, index) => (
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
              {currentTab === "cardHeader"
                ? tabComponent.cardHeader.border.map((component, index) => (
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
              {currentTab === "cardHeader"
                ? tabComponent.cardHeader.font.map((component, index) => (
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
              {currentTab === "cardHeader"
                ? tabComponent.cardHeader.background.map((component, index) => (
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
              {currentTab === "cardHeader"
                ? tabComponent.cardHeader.upload.map((component, index) => (
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
          {/* End cardHeader */}
          {/* cardContent */}
          <div
            className={`${
              currentTab === "cardContent" ? "h-56" : "hidden"
            } overflow-y-scroll`}
          >
            {/* Dimension */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "cardContent"
                ? tabComponent.cardContent.dimension.map((component, index) => (
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
              {currentTab === "cardContent"
                ? tabComponent.cardContent.border.map((component, index) => (
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
              {currentTab === "cardContent"
                ? tabComponent.cardContent.font.map((component, index) => (
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
              {currentTab === "cardContent"
                ? tabComponent.cardContent.background.map(
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
              {currentTab === "cardContent"
                ? tabComponent.cardContent.upload.map((component, index) => (
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
          {/* End cardContent */}
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

export default Alert;
