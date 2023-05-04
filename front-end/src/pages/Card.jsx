import Navbar from "../components/Navbar";
import { useState } from "react";
import Side from "../components/Side";
import useStyleStore from "../store/CssStore";
import InputStyle from "../components/InputStyle";
import InputSelect from "../components/InputSelect";
import InputRangeSlider from "../components/InputRangeSlider";
const Card = () => {
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
                        <h2 className="text-2xl font-bold mt-5">Card</h2>
                        <div className="grid grid-cols-1 gap-5 mt-2">
                          {/* Card */}
                          <div
                            className="w-full h-48 rounded-md shadow-md overflow-hidden"
                            style={{
                              borderRadius: stateCard.cardBorderRadius,
                            }}
                          >
                            <div
                              className={`${
                                currentTab === "cardHeader"
                                  ? "border border-red-500"
                                  : ""
                              } border h-10 rounded-t-md flex justify-center items-center bg-white  hover:border-red-500 cursor-pointer transition duration-300`}
                              onClick={() => handleTab("cardHeader")}
                              style={{
                                background: `${
                                  stateCard.cardHeaderBackgroundGradient ==
                                    null ||
                                  stateCard.cardHeaderBackgroundGradient == ""
                                    ? stateCard.cardHeaderBackgroundColor
                                    : stateCard.cardHeaderBackgroundGradient
                                }`,
                                borderWidth: `${stateCard.cardHeaderBorderWidth}px`,
                                borderColor: stateCard.cardHeaderBorderColor,
                                borderRadius: stateCard.cardHeaderBorderRadius,
                                boxShadow: stateCard.cardHeaderShadow,
                                color: stateCard.cardHeaderColor,
                                height: stateCard.cardHeaderHeight,
                                filter: `blur(${stateCard.cardHeaderFilterBlur})`,
                              }}
                            >
                              Card Header
                            </div>
                            <div
                              className={`${
                                currentTab === "cardContent"
                                  ? "border border-red-500"
                                  : ""
                              } border-x h-28 flex justify-center items-center bg-white  hover:border-red-500 cursor-pointer transition duration-300 hover:border`}
                              onClick={() => handleTab("cardContent")}
                              style={{
                                background: `${
                                  stateCard.cardContentBackgroundGradient ==
                                    null ||
                                  stateCard.cardContentBackgroundGradient == ""
                                    ? stateCard.cardContentBackgroundColor
                                    : stateCard.cardContentBackgroundGradient
                                }`,
                                borderWidth: `${stateCard.cardContentBorderWidth}px`,
                                borderColor: stateCard.cardContentBorderColor,
                                borderRadius: stateCard.cardContentBorderRadius,
                                boxShadow: stateCard.cardContentShadow,
                                color: stateCard.cardContentColor,
                                height: stateCard.cardContentHeight,
                                filter: `blur(${stateCard.cardContentFilterBlur})`,
                              }}
                            >
                              Card Content
                            </div>
                            <div
                              className={`${
                                currentTab === "cardFooter"
                                  ? "border border-red-500"
                                  : ""
                              } border  h-10 rounded-b-md flex justify-center items-center bg-white  hover:border-red-500 cursor-pointer transition duration-300`}
                              onClick={() => handleTab("cardFooter")}
                              style={{
                                background: `${
                                  stateCard.cardFooterBackgroundGradient ==
                                    null ||
                                  stateCard.cardFooterBackgroundGradient == ""
                                    ? stateCard.cardFooterBackgroundColor
                                    : stateCard.cardFooterBackgroundGradient
                                }`,
                                borderWidth: `${stateCard.cardFooterBorderWidth}px`,
                                borderColor: stateCard.cardFooterBorderColor,
                                borderRadius: stateCard.cardFooterBorderRadius,
                                boxShadow: stateCard.cardFooterShadow,
                                color: stateCard.cardFooterColor,
                                height: stateCard.cardFooterHeight,
                                filter: `blur(${stateCard.cardFooterFilterBlur})`,
                              }}
                            >
                              Card Footer
                            </div>
                          </div>
                          {/* End Card */}
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

export default Card;
