import React, { useState } from "react";
import useStyleStore from "../store/CssStore";
import InputSelect from "./InputSelect";
import InputRangeSlider from "./InputRangeSlider";
import InputStyle from "./InputStyle";
import WindowsPreview from "./WindowsPreview";

const Preview = () => {
  const stateSidebar = useStyleStore((state) => state);
  const stateBreadcrumbs = useStyleStore((state) => state);
  const stateLink = useStyleStore((state) => state);
  const stateCard = useStyleStore((state) => state);
  const stateNav = useStyleStore((state) => state);
  const changeStyle = useStyleStore((state) => state.changeStyle);

  const [currentTab, setCurrentTab] = useState("sidebar");

  console.log(currentTab);
  const tabComponent = {
    sidebar: [
      { name: "Background", property: "sidebarBackground" },
      { name: "Color", property: "sidebarTextColor" },
      { name: "Border Color", property: "sidebarBorderColor" },
    ],
    cubexbreadcrumbs: [
      { name: "Background", property: "breadcrumbBackground" },
      { name: "Color", property: "breadcrumbTextColor" },
      { name: "Breadcrumbs Active", property: "breadcrumbTextActive" },
      { name: "Border Color", property: "breadcrumbBorderColor" },
    ],
    linkBgActive: [
      { name: "Background", property: "sidebarLinkBackgroundActive" },
      { name: "Color", property: "sidebarLinkTextColor" },
      { name: "Border Color", property: "sidebarLinkBorderColor" },
    ],
    cubexcard: [
      { name: "Background", property: "cardBackground" },
      { name: "Color", property: "cardTextColorPrimary" },
      { name: "Border Color", property: "cardBorderColor" },
    ],
    navigation: [
      { name: "Background", property: "navbarBackground" },
      { name: "Color", property: "navbarTextColor" },
      { name: "Border Color", property: "navbarBorderColor" },
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

  const handleTab = (elementClass) => {
    let tabActive = document.querySelector(".tab-active");
    if (tabActive !== null) {
      tabActive.classList.remove("tab-active");
    }

    setCurrentTab(elementClass);
    document.querySelector(`.${elementClass}`).classList.add("tab-active");
  };

  return (
    <div className="w-[85%] p-2">
      <div className="flex mb-2">
        <div className="w-[80%] h-fit">
          {/* Preview */}
          {/* Tab */}
          <div className="flex justify-between">
            <h5 className="text-xl font-bold"> Preview Page</h5>
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
          </div>

          {/* Windows Preview */}
          <div className="mockup-window border border-base-300 rounded-t-none">
            <div className="border-t border-base-300">
              <div className="h-[550px]  rounded-md">
                <div className="flex gap-2 h-full">
                  {/* Sidebar */}
                  <div
                    id="sidebar-view"
                    className={`w-[15%] bg-gradient-to-tr from-base-300 via-base-200 to-base-300 p-2 text-black text-xs h-full ${
                      currentTab == "sidebar" ? "border border-primary" : ""
                    }`}
                    style={{
                      background: stateSidebar.sidebarBackground,
                      color: stateSidebar.sidebarTextColor,
                      borderRadius: stateSidebar.sidebarBorderRadius,
                      borderColor: stateSidebar.sidebarBorderColor,
                      borderWidth: stateSidebar.sidebarBorderWidth,
                      borderStyle: stateSidebar.sidebarBorderStyle,
                    }}
                  >
                    <div className=" rounded-md h-5 mb-1 px-2 mt-3">Lorem</div>
                    <div className=" rounded-md h-5 mb-1 px-2">Lorem</div>
                    <div className=" rounded-md h-5 mb-1 px-2">Lorem</div>
                    <div
                      className={`bg-[#adadad] rounded-md h-5 mb-1 px-2 ${
                        currentTab == "link-bg-active"
                          ? "border border-primary"
                          : ""
                      }`}
                      style={{
                        background: stateLink.sidebarLinkBackgroundActive,
                        color: stateLink.sidebarLinkTextColor,
                        borderRadius: stateLink.sidebarLinkBorderRadius,
                        borderWidth: stateLink.sidebarLinkBorderWidth,
                        borderColor: stateLink.sidebarLinkBorderColor,
                        borderStyle: stateLink.sidebarLinkBorderStyle,
                      }}
                    >
                      Lorem
                    </div>
                  </div>
                  <div className="w-[85%] flex flex-col text-sm pr-2 pt-2">
                    {/* Navigation */}
                    <div
                      className={`flex justify-between mb-2 ${
                        currentTab == "navigation"
                          ? "border border-primary"
                          : ""
                      }`}
                      style={{
                        background: stateNav.navbarBackground,
                        color: stateNav.navbarTextColor,
                        borderRadius: stateNav.navbarBorderRadius,
                        borderColor: stateNav.navbarBorderColor,
                        borderWidth: stateNav.navbarBorderWidth,
                        borderStyle: stateNav.navbarBorderStyle,
                      }}
                    >
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
                      className={`bg-gradient-to-tr from-base-300 via-base-200 to-base-300 rounded-md w-32 h-12 mb-2  text-black flex justify-between ${
                        currentTab == "cubexbreadcrumbs"
                          ? "border border-primary"
                          : ""
                      }`}
                      style={{
                        background: stateBreadcrumbs.breadcrumbBackground,
                        borderColor: stateBreadcrumbs.breadcrumbBorderColor,
                        borderRadius: stateBreadcrumbs.breadcrumbBorderRadius,
                        borderWidth: stateBreadcrumbs.breadcrumbBorderWidth,
                        borderStyle: stateBreadcrumbs.breadcrumbBorderStyle,
                      }}
                    >
                      <div className="w-1/2 flex justify-center items-center">
                        <div className="h-5 w-5 bg-white rounded-full"></div>
                      </div>
                      <div
                        className="w-11/12"
                        style={{
                          color: stateBreadcrumbs.breadcrumbTextColor,
                        }}
                      >
                        <p>Lorem</p>
                        <p className="text-xs">
                          Lorem <span>/</span>{" "}
                          <span
                            style={{
                              color: stateBreadcrumbs.breadcrumbTextActive,
                            }}
                          >
                            Lorem
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Cubex Card */}
                    <div className="grid grid-cols-2 gap-2 text-black">
                      {/* Cubex Card */}
                      <div
                        className={`h-44 rounded-md flex justify-between gap-5 items-center px-10 bg-gradient-to-tr from-base-300 via-base-200 to-base-300 ${
                          currentTab == "cubex-card"
                            ? "border border-primary"
                            : ""
                        }`}
                        style={{
                          background: stateCard.cardBackground,
                          color: stateCard.cardTextColorPrimary,
                          borderRadius: stateCard.cardBorderRadius,
                          borderWidth: stateCard.cardBorderWidth,
                          borderStyle: stateCard.cardBorderStyle,
                          borderColor: stateCard.cardBorderColor,
                        }}
                      >
                        <div className="w-4/12">
                          <div className="w-16 h-16 bg-white rounded-full"></div>
                        </div>
                        <div className="w-8/12">
                          <p className="text-lg">lorem</p>
                          <p>lorem</p>
                          <p>lorem</p>
                        </div>
                      </div>
                      {/* End Cubex Card */}
                      {/* Cubex Card */}
                      <div
                        className={`h-44 rounded-md flex justify-between gap-5 items-center px-10 bg-gradient-to-tr from-base-300 via-base-200 to-base-300 ${
                          currentTab == "cubex-card"
                            ? "border border-primary"
                            : ""
                        }`}
                        style={{
                          background: stateCard.cardBackground,
                          color: stateCard.cardTextColorPrimary,
                          borderRadius: stateCard.cardBorderRadius,
                          borderWidth: stateCard.cardBorderWidth,
                          borderStyle: stateCard.cardBorderStyle,
                          borderColor: stateCard.cardBorderColor,
                        }}
                      >
                        <div className="w-4/12">
                          <div className="w-16 h-16 bg-white rounded-full"></div>
                        </div>
                        <div className="w-8/12">
                          <p className="text-lg">lorem</p>
                          <p>lorem</p>
                          <p>lorem</p>
                        </div>
                      </div>
                      {/* End Cubex Card */}
                      {/* Cubex Card */}
                      <div
                        className={`h-44 rounded-md flex justify-between gap-5 items-center px-10 bg-gradient-to-tr from-base-300 via-base-200 to-base-300 ${
                          currentTab == "cubex-card"
                            ? "border border-primary"
                            : ""
                        }`}
                        style={{
                          background: stateCard.cardBackground,
                          color: stateCard.cardTextColorPrimary,
                          borderRadius: stateCard.cardBorderRadius,
                          borderWidth: stateCard.cardBorderWidth,
                          borderStyle: stateCard.cardBorderStyle,
                          borderColor: stateCard.cardBorderColor,
                        }}
                      >
                        <div className="w-4/12">
                          <div className="w-16 h-16 bg-white rounded-full"></div>
                        </div>
                        <div className="w-8/12">
                          <p className="text-lg">lorem</p>
                          <p>lorem</p>
                          <p>lorem</p>
                        </div>
                      </div>
                      {/* End Cubex Card */}
                      {/* Cubex Card */}
                      <div
                        className={`h-44 rounded-md flex justify-between gap-5 items-center px-10 bg-gradient-to-tr from-base-300 via-base-200 to-base-300 ${
                          currentTab == "cubex-card"
                            ? "border border-primary"
                            : ""
                        }`}
                        style={{
                          background: stateCard.cardBackground,
                          color: stateCard.cardTextColorPrimary,
                          borderRadius: stateCard.cardBorderRadius,
                          borderWidth: stateCard.cardBorderWidth,
                          borderStyle: stateCard.cardBorderStyle,
                          borderColor: stateCard.cardBorderColor,
                        }}
                      >
                        <div className="w-4/12">
                          <div className="w-16 h-16 bg-white rounded-full"></div>
                        </div>
                        <div className="w-8/12">
                          <p className="text-lg">lorem</p>
                          <p>lorem</p>
                          <p>lorem</p>
                        </div>
                      </div>
                      {/* End Cubex Card */}
                    </div>
                    {/* End Cubex Card */}
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
      {/* Menu Bawah */}
      <div className="grid grid-cols-6 gap-1 text-sm border-4 h-40 p-2 overflow-y-scroll">
        {/* Sidebar */}
        {currentTab == "sidebar"
          ? tabComponent.sidebar.map((component, index) => (
              <InputStyle
                key={index}
                name={component.name}
                property={component.property}
              />
            ))
          : null}
        {/* End Sidebar */}
        {/* cubex-breadcrumbs */}
        {currentTab == "cubexbreadcrumbs"
          ? tabComponent.cubexbreadcrumbs.map((component, index) => (
              <InputStyle
                key={index}
                name={component.name}
                property={component.property}
              />
            ))
          : null}
        {/* End cubex-breadcrumbs*/}
        {/* cubex-breadcrumbs */}
        {currentTab == "link-bg-active"
          ? tabComponent.linkBgActive.map((component, index) => (
              <InputStyle
                key={index}
                name={component.name}
                property={component.property}
              />
            ))
          : ""}
        {/* End cubex-breadcrumbs*/}
        {/* cubex-card */}
        {currentTab == "cubex-card"
          ? tabComponent.cubexcard.map((component, index) => (
              <InputStyle
                key={index}
                name={component.name}
                property={component.property}
              />
            ))
          : ""}
        {/* End cubex-card*/}
        {/* cubex-card */}
        {currentTab == "navigation"
          ? tabComponent.navigation.map((component, index) => (
              <InputStyle
                key={index}
                name={component.name}
                property={component.property}
              />
            ))
          : ""}
        {/* End cubex-card*/}
      </div>
      {/* End Menu Bawah */}
    </div>
  );
};

export default Preview;
