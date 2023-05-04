import Navbar from "../components/Navbar";
import { useState } from "react";
import Side from "../components/Side";
import useStyleStore from "../store/CssStore";
import InputStyle from "../components/InputStyle";
import InputSelect from "../components/InputSelect";
import InputRangeSlider from "../components/InputRangeSlider";
const Breadcrumbs = () => {
  const [currentTab, setCurrentTab] = useState("breadcrumbs");
  const stateBreadcrumbs = useStyleStore((state) => state);

  const handleTab = (elementClass) => {
    setCurrentTab(elementClass);
  };

  const tabComponent = {
    breadcrumbs: {
      dimension: [
        {
          name: "Height",
          property: "breadcrumbsHeight",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "breadcrumbsBorderWidth",
          defaultValue: "0px",
          type: "number",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "breadcrumbsBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "breadcrumbsShadow",
          defaultValue: "",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "breadcrumbsColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "breadcrumbsFontFamily",
          defaultValue: "0px",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "breadcrumbsFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "breadcrumbsBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "breadcrumbsBackgroundGradient",
          defaultValue: "",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "breadcrumbsFilterBlur",
          defaultValue: "",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "breadcrumbsBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
    breadcrumbsItem: {
      font: [
        {
          name: "Color",
          property: "breadcrumbsItemColor",
          defaultValue: "",
          type: "color",
          placeholder: "",
        },
        {
          name: "Divider Color",
          property: "breadcrumbsItemDividerColor",
          defaultValue: "",
          type: "color",
          placeholder: "",
        },
        {
          name: "Item Space",
          property: "breadcrumbsItemPaddingLeft",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
    },
    breadcrumbsItemActive: {
      font: [
        {
          name: "Color",
          property: "breadcrumbsItemActiveColor",
          defaultValue: "",
          type: "color",
          placeholder: "",
        },
      ],
    },
  };

  const tabComponentSlider = {
    card: [
      { name: "Border Radius", property: "breadcrumbsBorderRadius", unit: "%" },
      { name: "Border Width", property: "breadcrumbsBorderWidth", unit: "px" },
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
                        {/* End Navigation */}
                        {/* Konten */}
                        <h2 className="text-2xl font-bold mt-5">BreadCrumbs</h2>
                        {/* Show */}
                        <nav>
                          <ol
                            className={`flex  py-[0.75rem] px-[1rem] mb-[1rem] bg-gray-300 transition-all duration-300`}
                            style={{
                              background: `${
                                stateBreadcrumbs.breadcrumbsBackgroundGradient ==
                                  null ||
                                stateBreadcrumbs.breadcrumbsBackgroundGradient ==
                                  ""
                                  ? stateBreadcrumbs.breadcrumbsBackgroundColor
                                  : stateBreadcrumbs.breadcrumbsBackgroundGradient
                              }`,
                              borderWidth: `${stateBreadcrumbs.breadcrumbsBorderWidth}px`,
                              borderColor:
                                stateBreadcrumbs.breadcrumbsBorderColor,
                              borderRadius:
                                stateBreadcrumbs.breadcrumbsBorderRadius,
                              boxShadow: stateBreadcrumbs.breadcrumbsShadow,
                              color: stateBreadcrumbs.breadcrumbsColor,
                              height: stateBreadcrumbs.breadcrumbsHeight,
                              filter: `blur(${stateBreadcrumbs.breadcrumbsFilterBlur})`,
                            }}
                          >
                            <li className="h-[25px]">
                              <button className="transition-all duration-300 cursor-pointer relative">
                                <span
                                  className="text-[#007bff]"
                                  style={{
                                    color:
                                      stateBreadcrumbs.breadcrumbsItemColor,
                                  }}
                                >
                                  Breadcrumb item
                                </span>
                                <span
                                  className="text-gray-600 pl-[0.5rem]"
                                  style={{
                                    paddingLeft:
                                      stateBreadcrumbs.breadcrumbsItemPaddingLeft,
                                    color:
                                      stateBreadcrumbs.breadcrumbsItemDividerColor,
                                  }}
                                >
                                  /
                                </span>
                                <span
                                  className="text-[#007bff] pl-[0.5rem]"
                                  style={{
                                    paddingLeft:
                                      stateBreadcrumbs.breadcrumbsItemPaddingLeft,
                                    color:
                                      stateBreadcrumbs.breadcrumbsItemColor,
                                  }}
                                >
                                  Breadcrumb item
                                </span>
                                <span
                                  className="text-gray-600 pl-[0.5rem]"
                                  style={{
                                    paddingLeft:
                                      stateBreadcrumbs.breadcrumbsItemPaddingLeft,
                                    color:
                                      stateBreadcrumbs.breadcrumbsItemDividerColor,
                                  }}
                                >
                                  /
                                </span>
                              </button>
                            </li>

                            <li
                              className="text-gray-600 pl-[0.5rem]"
                              style={{
                                paddingLeft:
                                  stateBreadcrumbs.breadcrumbsItemPaddingLeft,
                                color:
                                  stateBreadcrumbs.breadcrumbsItemActiveColor,
                              }}
                            >
                              <div
                                className={`transition-all duration-300 cursor-pointer`}
                              >
                                Breadcrumb Active
                              </div>
                            </li>
                          </ol>
                        </nav>
                        {/* End Show */}
                        {/* Card */}
                        <h2 className="text-2xl font-bold ">
                          BreadCrumbs Card
                        </h2>
                        <nav>
                          <ol
                            className={`${
                              currentTab === "breadcrumbs"
                                ? "border-red-500 border"
                                : ""
                            } flex gap-2 flex-wrap py-[0.75rem] px-[1rem] mb-[1rem] h-[50px] bg-gray-300 transition-all duration-300 cursor-pointer hover:border hover:border-red-500`}
                            style={{
                              background: `${
                                stateBreadcrumbs.breadcrumbsBackgroundGradient ==
                                  null ||
                                stateBreadcrumbs.breadcrumbsBackgroundGradient ==
                                  ""
                                  ? stateBreadcrumbs.breadcrumbsBackgroundColor
                                  : stateBreadcrumbs.breadcrumbsBackgroundGradient
                              }`,
                              borderWidth: `${stateBreadcrumbs.breadcrumbsBorderWidth}px`,
                              borderColor:
                                stateBreadcrumbs.breadcrumbsBorderColor,
                              borderRadius:
                                stateBreadcrumbs.breadcrumbsBorderRadius,
                              boxShadow: stateBreadcrumbs.breadcrumbsShadow,
                              color: stateBreadcrumbs.breadcrumbsColor,
                              height: stateBreadcrumbs.breadcrumbsHeight,
                              filter: `blur(${stateBreadcrumbs.breadcrumbsFilterBlur})`,
                            }}
                            onClick={() => handleTab("breadcrumbs")}
                          ></ol>
                        </nav>
                        {/* End Card */}

                        {/* breadcrumbs item */}
                        <h2 className="text-2xl font-bold ">
                          BreadCrumbs Item
                        </h2>
                        <nav>
                          <ol
                            className={` flex gap-2 flex-wrap py-[0.75rem] mb-[1rem] transition-all duration-300`}
                            style={{
                              borderWidth: `${stateBreadcrumbs.breadcrumbsBorderWidth}px`,
                              borderColor:
                                stateBreadcrumbs.breadcrumbsBorderColor,
                              borderRadius:
                                stateBreadcrumbs.breadcrumbsBorderRadius,
                              boxShadow: stateBreadcrumbs.breadcrumbsShadow,
                              color: stateBreadcrumbs.breadcrumbsColor,
                              height: stateBreadcrumbs.breadcrumbsHeight,
                              filter: `blur(${stateBreadcrumbs.breadcrumbsFilterBlur})`,
                            }}
                          >
                            <li className="h-[25px] w-fit">
                              <button
                                className={`${
                                  currentTab === "breadcrumbsItem"
                                    ? "border border-red-500"
                                    : ""
                                } flex transition-all duration-300 cursor-pointer relative hover:border hover:border-red-500`}
                                onClick={() => handleTab("breadcrumbsItem")}
                              >
                                <span
                                  className="text-[#007bff] pl-[0.5rem]"
                                  style={{
                                    color:
                                      stateBreadcrumbs.breadcrumbsItemColor,
                                  }}
                                >
                                  Breadcrumb item
                                </span>
                                <span
                                  className="text-gray-600 pl-[0.5rem]"
                                  style={{
                                    paddingLeft:
                                      stateBreadcrumbs.breadcrumbsItemPaddingLeft,
                                    color:
                                      stateBreadcrumbs.breadcrumbsItemDividerColor,
                                  }}
                                >
                                  /
                                </span>
                                <span
                                  className="text-[#007bff] pl-[0.5rem]"
                                  style={{
                                    paddingLeft:
                                      stateBreadcrumbs.breadcrumbsItemPaddingLeft,
                                    color:
                                      stateBreadcrumbs.breadcrumbsItemColor,
                                  }}
                                >
                                  Breadcrumb item
                                </span>
                              </button>
                            </li>
                          </ol>
                        </nav>
                        {/* End breadcrumbs item */}

                        {/* breadcrumbs item active */}
                        <h2 className="text-2xl font-bold ">
                          BreadCrumbs Item Active
                        </h2>
                        <nav>
                          <ol
                            className={` flex gap-2 flex-wrap py-[0.75rem] mb-[1rem] transition-all duration-300`}
                            style={{
                              borderWidth: `${stateBreadcrumbs.breadcrumbsBorderWidth}px`,
                              borderColor:
                                stateBreadcrumbs.breadcrumbsBorderColor,
                              borderRadius:
                                stateBreadcrumbs.breadcrumbsBorderRadius,
                              boxShadow: stateBreadcrumbs.breadcrumbsShadow,
                              color: stateBreadcrumbs.breadcrumbsColor,
                              height: stateBreadcrumbs.breadcrumbsHeight,
                              filter: `blur(${stateBreadcrumbs.breadcrumbsFilterBlur})`,
                            }}
                          >
                            <li className="text-gray-600">
                              <div
                                className={`${
                                  currentTab === "breadcrumbsActive"
                                    ? "border border-red-500"
                                    : ""
                                } flex gap-2 transition-all duration-300 cursor-pointer hover:border hover:border-red-500`}
                                onClick={() => handleTab("breadcrumbsActive")}
                                style={{
                                  color:
                                    stateBreadcrumbs.breadcrumbsItemActiveColor,
                                }}
                              >
                                Breadcrumb Active
                              </div>
                            </li>
                          </ol>
                        </nav>
                        {/* End breadcrumbs item active */}

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
          {/* breadcrumbs */}
          <div
            className={`${
              currentTab === "breadcrumbs" ? "h-56" : "hidden"
            } overflow-y-scroll`}
          >
            {/* Dimension */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "breadcrumbs"
                ? tabComponent.breadcrumbs.dimension.map((component, index) => (
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
              {currentTab === "breadcrumbs"
                ? tabComponent.breadcrumbs.border.map((component, index) => (
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
              {currentTab === "breadcrumbs"
                ? tabComponent.breadcrumbs.font.map((component, index) => (
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
              {currentTab === "breadcrumbs"
                ? tabComponent.breadcrumbs.background.map(
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
              {currentTab === "breadcrumbs"
                ? tabComponent.breadcrumbs.upload.map((component, index) => (
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
          {/* End breadcrumbs */}
          {/* breadcrumbs item */}
          <div
            className={`${
              currentTab === "breadcrumbsItem" ? "h-56" : "hidden"
            } overflow-y-scroll`}
          >
            {/* Font */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "breadcrumbsItem"
                ? tabComponent.breadcrumbsItem.font.map((component, index) => (
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
            {/* End Font */}
          </div>
          {/* End breadcrumbs item */}
          {/* breadcrumbs item */}
          <div
            className={`${
              currentTab === "breadcrumbsActive" ? "h-56" : "hidden"
            } overflow-y-scroll`}
          >
            {/* Font */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "breadcrumbsActive"
                ? tabComponent.breadcrumbsItemActive.font.map(
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
            {/* End Font */}
          </div>
          {/* End breadcrumbs item */}

          {/* End Menu Bawah */}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
