import React, { useState } from "react";
import useStyleStore from "../store/CssStore";
import InputSelect from "./InputSelect";
import InputRangeSlider from "./InputRangeSlider";
import InputStyle from "./InputStyle";

const Preview = () => {
  const stateMenu = useStyleStore((state) => state);
  const changeStyle = useStyleStore((state) => state.changeStyle);

  const [currentTab, setCurrentTab] = useState("header");
  console.log(stateMenu);
  const tabComponent = {
    header: [
      {
        name: "Background Color",
        property: "headerBackgroundColor",
        defaultValue: "#d3d3d3",
        type: "color",
        placeholder: "none",
      },
      {
        name: "Background Gradient",
        property: "headerBackgroundGradient",
        defaultValue: "",
        type: "text",
        placeholder: "linear-gradient(red, yellow)",
      },
      {
        name: "Background Image",
        property: "headerBackgroundImage",
        defaultValue: "Test",
        type: "text",
        placeholder: "URL/Link",
      },
      {
        name: "Border Width",
        property: "headerBorderWidth",
        defaultValue: "0px",
        type: "number",
        placeholder: "0px",
      },
      {
        name: "Border Color",
        property: "headerBorderColor",
        defaultValue: "",
        type: "color",
        placeholder: "none",
      },
      {
        name: "Shadow",
        property: "headerShadow",
        defaultValue: "",
        type: "text",
        placeholder: "0px 20px 50px grey",
      },
      {
        name: "Color",
        property: "headerColor",
        defaultValue: "0px",
        type: "color",
        placeholder: "none",
      },
      {
        name: "Filter Blur",
        property: "headerFilter",
        defaultValue: "0px",
        type: "text",
        placeholder: "0px",
      },
      {
        name: "Font Family",
        property: "headerFontFamily",
        defaultValue: "0px",
        type: "text",
        placeholder: "Arial,mono-thin,reguler",
      },
      {
        name: "Font Size",
        property: "headerFontSize",
        defaultValue: "0px",
        type: "text",
        placeholder: "0px",
      },
      {
        name: "Height",
        property: "headerHeight",
        defaultValue: "0px",
        type: "text",
        placeholder: "0px",
      },
    ],
    sidebar: [
      {
        name: "Background Color",
        property: "sidebarBackgroundColor",
        defaultValue: "",
        type: "color",
        placeholder: "none",
      },
      {
        name: "Background Gradient",
        property: "sidebarBackgroundGradient",
        defaultValue: "",
        type: "text",
        placeholder: "linear-gradient(red, yellow)",
      },
      {
        name: "Background Image",
        property: "sidebarBackgroundImage",
        defaultValue: "Test",
        type: "text",
        placeholder: "URL/Link",
      },
      {
        name: "Border Width",
        property: "sidebarBorderWidth",
        defaultValue: "0px",
        type: "number",
        placeholder: "0px",
      },
      {
        name: "Border Color",
        property: "sidebarBorderColor",
        defaultValue: "",
        type: "color",
        placeholder: "none",
      },
      {
        name: "Shadow Thick",
        property: "sidebarShadowThick",
        defaultValue: "0px",
        type: "text",
        placeholder: "0px",
      },
      {
        name: "Shadow Gradient",
        property: "sidebarShadowGradient",
        defaultValue: "0px",
        type: "text",
        placeholder: "0px",
      },
      {
        name: "Color",
        property: "sidebarColor",
        defaultValue: "0px",
        type: "color",
        placeholder: "none",
      },
      {
        name: "Filter Blur",
        property: "sidebarFilter",
        defaultValue: "0px",
        type: "text",
        placeholder: "0px",
      },
      {
        name: "Font Family",
        property: "sidebarFontFamily",
        defaultValue: "0px",
        type: "text",
        placeholder: "Arial,mono-thin,reguler",
      },
      {
        name: "Font Size",
        property: "sidebarFontSize",
        defaultValue: "0px",
        type: "text",
        placeholder: "0px",
      },
      {
        name: "Height",
        property: "sidebarHeight",
        defaultValue: "0px",
        type: "text",
        placeholder: "0px",
      },
    ],
    content: [
      {
        name: "Background Color",
        property: "contentBackgroundColor",
        defaultValue: "",
        type: "color",
        placeholder: "none",
      },
      {
        name: "Background Gradient",
        property: "contentBackgroundGradient",
        defaultValue: "",
        type: "text",
        placeholder: "linear-gradient(red, yellow)",
      },
      {
        name: "Background Image",
        property: "contentBackgroundImage",
        defaultValue: "Test",
        type: "text",
        placeholder: "URL/Link",
      },
      {
        name: "Border Width",
        property: "contentBorderWidth",
        defaultValue: "0px",
        type: "number",
        placeholder: "0px",
      },
      {
        name: "Border Color",
        property: "contentBorderColor",
        defaultValue: "",
        type: "color",
        placeholder: "none",
      },
      {
        name: "Shadow Thick",
        property: "contentShadowThick",
        defaultValue: "0px",
        type: "text",
        placeholder: "0px",
      },
      {
        name: "Shadow Gradient",
        property: "contentShadowGradient",
        defaultValue: "0px",
        type: "text",
        placeholder: "0px",
      },
      {
        name: "Color",
        property: "contentColor",
        defaultValue: "0px",
        type: "color",
        placeholder: "none",
      },
      {
        name: "Filter Blur",
        property: "contentFilter",
        defaultValue: "0px",
        type: "text",
        placeholder: "0px",
      },
      {
        name: "Font Family",
        property: "contentFontFamily",
        defaultValue: "0px",
        type: "text",
        placeholder: "Arial,mono-thin,reguler",
      },
      {
        name: "Font Size",
        property: "contentFontSize",
        defaultValue: "0px",
        type: "text",
        placeholder: "0px",
      },
      {
        name: "Height",
        property: "contentHeight",
        defaultValue: "0px",
        type: "text",
        placeholder: "0px",
      },
    ],
  };

  const tabComponentSlider = {
    sidebar: [
      { name: "Border Radius", property: "sidebarBorderRadius", unit: "%" },
      { name: "Border Width", property: "sidebarBorderWidth", unit: "px" },
    ],
    breadcrumbs: [
      { name: "Border Radius", property: "breadcrumbBorderRadius", unit: "%" },
      { name: "Border Width", property: "breadcrumbBorderWidth", unit: "px" },
    ],
    linkBgActive: [
      { name: "Border Radius", property: "sidebarLinkBorderRadius", unit: "%" },
      { name: "Border Width", property: "sidebarLinkBorderWidth", unit: "px" },
    ],
    cubexcard: [
      { name: "Border Radius", property: "cardBorderRadius", unit: "%" },
      { name: "Border Width", property: "cardBorderWidth", unit: "px" },
    ],
    navigation: [
      { name: "Border Radius", property: "navbarBorderRadius", unit: "%" },
      { name: "Border Width", property: "navbarBorderWidth", unit: "px" },
    ],
  };

  const tabComponentSelect = {
    sidebar: [
      {
        name: "Border Style",
        property: "sidebarBorderStyle",
        value: [
          { childName: "Solid", value: "solid" },
          { childName: "Dotted", value: "dotted" },
          { childName: "Dashed", value: "dashed" },
          { childName: "Double", value: "double" },
          { childName: "Groove", value: "groove" },
          { childName: "Ridge", value: "ridge" },
        ],
      },
    ],
    breadcrumbs: [
      {
        name: "Border Style",
        property: "breadcrumbBorderStyle",
        value: [
          { childName: "Solid", value: "solid" },
          { childName: "Dotted", value: "dotted" },
          { childName: "Dashed", value: "dashed" },
          { childName: "Double", value: "double" },
          { childName: "Groove", value: "groove" },
          { childName: "Ridge", value: "ridge" },
        ],
      },
    ],
    linkBgActive: [
      {
        name: "Border Style",
        property: "sidebarLinkBorderStyle",
        value: [
          { childName: "Solid", value: "solid" },
          { childName: "Dotted", value: "dotted" },
          { childName: "Dashed", value: "dashed" },
          { childName: "Double", value: "double" },
          { childName: "Groove", value: "groove" },
          { childName: "Ridge", value: "ridge" },
        ],
      },
    ],
    cubexcard: [
      {
        name: "Border Style",
        property: "cardBorderStyle",
        value: [
          { childName: "Solid", value: "solid" },
          { childName: "Dotted", value: "dotted" },
          { childName: "Dashed", value: "dashed" },
          { childName: "Double", value: "double" },
          { childName: "Groove", value: "groove" },
          { childName: "Ridge", value: "ridge" },
        ],
      },
    ],
    navigation: [
      {
        name: "Border Style",
        property: "navbarBorderStyle",
        value: [
          { childName: "Solid", value: "solid" },
          { childName: "Dotted", value: "dotted" },
          { childName: "Dashed", value: "dashed" },
          { childName: "Double", value: "double" },
          { childName: "Groove", value: "groove" },
          { childName: "Ridge", value: "ridge" },
        ],
      },
    ],
  };

  const handleSidebarValue = (value, componenStore) => {
    changeStyle({
      property: componenStore,
      value: value,
    });
  };

  const handleMenu = (menu) => {
    setCurrentTab(menu);
  };

  return (
    <div className="w-[85%] p-2">
      <div className="flex mb-2">
        <div className="w-[80%] h-fit">
          {/* Preview */}
          {/* Tab */}
          <div className="flex justify-between">
            <h5 className="text-xl font-bold"> Preview Page</h5>
          </div>

          {/* Windows Preview */}
          <div className="border flex justify-center">
            <div className=" relative w-[750px] border ">
              <img src="blank-computer.png" alt="" className="w-full " />
              <div className="absolute left-0 top-[39px] w-full px-[43px] h-[382px] overflow-hidden">
                <div className="h-full overflow-hidden">
                  <header
                    className="bg-primary h-10 cursor-pointer"
                    style={{
                      background: `${
                        stateMenu.headerBackgroundGradient == null ||
                        stateMenu.headerBackgroundGradient == ""
                          ? stateMenu.headerBackgroundColor
                          : stateMenu.headerBackgroundGradient
                      }`,
                      borderWidth: `${stateMenu.headerBorderWidth}px`,
                      borderColor: stateMenu.headerBorderColor,
                      boxShadow: stateMenu.headerShadow,
                      color: stateMenu.headerColor,
                    }}
                    onClick={() => handleMenu("header")}
                  >
                    Header
                  </header>
                  <div className="flex">
                    <div
                      className="w-[15%] h-[300px] bg-secondary cursor-pointer"
                      onClick={() => handleMenu("sidebar")}
                      style={{
                        background: `${
                          stateMenu.sidebarBackgroundGradient == null ||
                          stateMenu.sidebarBackgroundGradient == ""
                            ? stateMenu.sidebarBackgroundColor
                            : stateMenu.sidebarBackgroundGradient
                        }`,
                        color: stateMenu.sidebarColor,
                      }}
                    >
                      Sidebar
                    </div>
                    <div
                      className="w-[85%] cursor-pointer"
                      onClick={() => handleMenu("content")}
                      style={{
                        background: `${
                          stateMenu.contentBackgroundGradient == null ||
                          stateMenu.contentBackgroundGradient == ""
                            ? stateMenu.contentBackgroundColor
                            : stateMenu.contentBackgroundGradient
                        }`,
                        color: stateMenu.contentColor,
                      }}
                    >
                      Content
                    </div>
                  </div>
                  <footer className="bg-primary h-10">Footer</footer>
                </div>
              </div>
            </div>
          </div>
          {/* End Preview */}
        </div>
        {/* Pembatas */}
        {/* Menu Kanan */}

        <div className="w-[20%] h-fit p-2">
          {/* Color Picker */}
          <div className="border h-10 relative rounded-md">
            <input type="text" className="w-full h-full" />
            <div className="bg-primary absolute w-full h-56 hidden">bl</div>
          </div>
          {/* End Color Picker */}
          {/* Sidebar */}
          {currentTab == "sidebar"
            ? tabComponentSlider.sidebar.map((components, index) => (
                <InputRangeSlider
                  key={index}
                  name={components.name}
                  property={components.property}
                  unit={components.unit}
                />
              ))
            : null}
          {/* End Sidebar */}
          {/* Breadcrumbs */}
          {currentTab == "cubexbreadcrumbs"
            ? tabComponentSlider.breadcrumbs.map((components, index) => (
                <InputRangeSlider
                  key={index}
                  name={components.name}
                  property={components.property}
                  unit={components.unit}
                />
              ))
            : null}
          {/* End Breadcrumbs */}
          {/* Link Bg Active */}
          {currentTab == "link-bg-active"
            ? tabComponentSlider.linkBgActive.map((components, index) => (
                <InputRangeSlider
                  key={index}
                  name={components.name}
                  property={components.property}
                  unit={components.unit}
                />
              ))
            : null}
          {/* End Link Bg Active */}
          {/* Cubex Card */}
          {currentTab == "cubex-card"
            ? tabComponentSlider.cubexcard.map((components, index) => (
                <InputRangeSlider
                  key={index}
                  name={components.name}
                  property={components.property}
                  unit={components.unit}
                />
              ))
            : null}
          {/* End Cubex Card */}
          {/* Navigation */}
          {currentTab == "navigation"
            ? tabComponentSlider.navigation.map((components, index) => (
                <InputRangeSlider
                  key={index}
                  name={components.name}
                  property={components.property}
                  unit={components.unit}
                />
              ))
            : null}
          {/* End Navigation */}
          {/* Select */}
          {/* Sidebar */}
          {currentTab == "sidebar"
            ? tabComponentSelect.sidebar.map((components, index) => (
                <InputSelect
                  key={index}
                  property={components.property}
                  name={components.name}
                  value={components.value}
                />
              ))
            : null}
          {/* Breadcrumbs */}
          {currentTab == "cubexbreadcrumbs"
            ? tabComponentSelect.breadcrumbs.map((components, index) => (
                <InputSelect
                  key={index}
                  property={components.property}
                  name={components.name}
                  value={components.value}
                />
              ))
            : null}
          {currentTab == "link-bg-active"
            ? tabComponentSelect.linkBgActive.map((components, index) => (
                <InputSelect
                  key={index}
                  property={components.property}
                  name={components.name}
                  value={components.value}
                />
              ))
            : null}
          {currentTab == "cubex-card"
            ? tabComponentSelect.cubexcard.map((components, index) => (
                <InputSelect
                  key={index}
                  property={components.property}
                  name={components.name}
                  value={components.value}
                />
              ))
            : null}
          {currentTab == "navigation"
            ? tabComponentSelect.navigation.map((components, index) => (
                <InputSelect
                  key={index}
                  property={components.property}
                  name={components.name}
                  value={components.value}
                />
              ))
            : null}
        </div>
        {/* End Pembatas */}
      </div>

      {/* <div className="flex justify-center">
        <div className="tabs translate-y-[1px]">
          <button
            className="tab tab-lifted sidebar tab-active"
            onClick={() => handleTab("sidebar")}
          >
            Sidebar
          </button>
          <button
            className="tab tab-lifted link-bg-active "
            onClick={() => handleTab("link-bg-active")}
          >
            Link Active Backround
          </button>
          <button
            className="tab tab-lifted cubex-card"
            onClick={() => handleTab("cubex-card")}
          >
            Card
          </button>
          <button
            className="tab tab-lifted cubexbreadcrumbs"
            onClick={() => handleTab("cubexbreadcrumbs")}
          >
            Breadcrumbs
          </button>
          <button
            className="tab tab-lifted form navigation"
            onClick={() => handleTab("navigation")}
          >
            Navigation
          </button>
        </div>
      </div> */}

      {/* Menu Bawah */}
      <div className="grid grid-cols-4 gap-1 text-sm border-4 h-56 p-2 overflow-y-scroll">
        {/* Header */}
        {currentTab == "header"
          ? tabComponent.header.map((component, index) => (
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
        {/* End Header */}
        {/* Sidebar */}
        {currentTab == "sidebar"
          ? tabComponent.sidebar.map((component, index) => (
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
        {/* End Sidebar */}
        {/* Sidebar */}
        {currentTab == "content"
          ? tabComponent.content.map((component, index) => (
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
        {/* End Sidebar */}
      </div>
      {/* End Menu Bawah */}
    </div>
  );
};

export default Preview;
