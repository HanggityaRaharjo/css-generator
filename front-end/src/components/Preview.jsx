import React, { useEffect, useState } from "react";
import useStyleStore from "../store/CssStore";

import InputSelect from "./InputSelect";
import InputRangeSlider from "./InputRangeSlider";
import InputStyle from "./InputStyle";
import InputFile from "../components/InputFile";

const Preview = () => {
  const stateMenu = useStyleStore((state) => state);
  const changeStyle = useStyleStore((state) => state.changeStyle);

  const [currentTab, setCurrentTab] = useState("header");
  const tabComponent = {
    header: {
      dimension: [
        {
          name: "Height",
          property: "headerHeight",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
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
      ],
      font: [
        {
          name: "Color",
          property: "headerColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
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
      ],
      background: [
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
          name: "Filter Blur",
          property: "headerFilterBlur",
          defaultValue: "",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "headerBackgroundImage",
          defaultValue: "",
          type: "file",
          placeholder: "",
        },
      ],
    },
    sidebar: {
      dimension: [
        {
          name: "Height",
          property: "sidebarHeight",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
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
          name: "Shadow",
          property: "sidebarShadow",
          defaultValue: "",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "sidebarColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
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
      ],
      background: [
        {
          name: "Background Color",
          property: "sidebarBackgroundColor",
          defaultValue: "#d3d3d3",
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
          name: "Filter Blur",
          property: "sidebarFilterBlur",
          defaultValue: "",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "headerBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
    content: {
      dimension: [
        {
          name: "Height",
          property: "contentHeight",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
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
          name: "Shadow",
          property: "contentShadow",
          defaultValue: "",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "contentColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
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
      ],
      background: [
        {
          name: "Background Color",
          property: "contentBackgroundColor",
          defaultValue: "#d3d3d3",
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
          name: "Filter Blur",
          property: "contentFilterBlur",
          defaultValue: "",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "contentBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },

    footer: {
      dimension: [
        {
          name: "Height",
          property: "footerHeight",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "footerBorderWidth",
          defaultValue: "0px",
          type: "number",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "footerBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "footerShadow",
          defaultValue: "",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "footerColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "footerFontFamily",
          defaultValue: "0px",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "footerFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "footerBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "footerBackgroundGradient",
          defaultValue: "",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "footerFilterBlur",
          defaultValue: "",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "footerBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
  };

  const tabComponentSlider = {
    header: [
      { name: "Border Radius", property: "headerBorderRadius", unit: "%" },
      { name: "Border Width", property: "headerBorderWidth", unit: "px" },
    ],
    sidebar: [
      { name: "Border Radius", property: "sidebarBorderRadius", unit: "%" },
      { name: "Border Width", property: "sidebarBorderWidth", unit: "px" },
    ],
    content: [
      { name: "Border Radius", property: "contentBorderRadius", unit: "%" },
      { name: "Border Width", property: "contentBorderWidth", unit: "px" },
    ],
    footer: [
      { name: "Border Radius", property: "footerBorderRadius", unit: "%" },
      { name: "Border Width", property: "footerBorderWidth", unit: "px" },
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
          <div className="flex justify-center">
            <div className=" relative w-[750px] ">
              {/* <img src="iMac.svg" alt="" className="w-full " /> */}
              {/* Imac */}
              <div>
                <svg
                  width="500"
                  height="422"
                  className="h-[500px]"
                  viewBox="0 0 500 422"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M308 336H192V375H308V336Z"
                    fill="url(#paint0_linear_202_195)"
                  />
                  <path
                    d="M192.27 375.843H307.731V379.953C307.731 380.219 307.513 380.437 307.248 380.437H192.753C192.486 380.437 192.27 380.219 192.27 379.953V375.843Z"
                    fill="#D5D6D8"
                  />
                  <path
                    d="M192.27 375.843H207.729V380.437H192.753C192.486 380.437 192.27 380.219 192.27 379.953V375.843Z"
                    fill="url(#paint1_linear_202_195)"
                  />
                  <path
                    d="M307.731 375.843H292.271V380.437H307.248C307.513 380.437 307.731 380.219 307.731 379.953V375.843Z"
                    fill="url(#paint2_linear_202_195)"
                  />
                  <path
                    d="M291.305 380.437H305.798V381.162C305.798 381.428 305.58 381.645 305.315 381.645H291.788C291.522 381.645 291.305 381.428 291.305 381.162V380.437Z"
                    fill="url(#paint3_linear_202_195)"
                  />
                  <path
                    d="M291.305 380.437H305.798V381.162C305.798 381.428 305.58 381.645 305.315 381.645H291.788C291.522 381.645 291.305 381.428 291.305 381.162V380.437Z"
                    fill="url(#paint4_linear_202_195)"
                  />
                  <path
                    d="M307.731 375.358H192.27V375.6H307.731V375.358Z"
                    fill="#707173"
                  />
                  <path
                    d="M307.731 375.601H192.27V375.842H307.731V375.601Z"
                    fill="#C7C8CA"
                  />
                  <path
                    d="M307.731 375.843H192.27V376.085H307.731V375.843Z"
                    fill="#EBECEE"
                  />
                  <path
                    d="M194.202 380.437H208.695V381.162C208.695 381.428 208.479 381.645 208.212 381.645H194.685C194.418 381.645 194.202 381.428 194.202 381.162V380.437Z"
                    fill="url(#paint5_linear_202_195)"
                  />
                  <path
                    d="M249.879 383.821C319.449 383.821 375.848 382.847 375.848 381.645C375.848 380.443 319.449 379.469 249.879 379.469C180.308 379.469 123.91 380.443 123.91 381.645C123.91 382.847 180.308 383.821 249.879 383.821Z"
                    fill="url(#paint6_radial_202_195)"
                    fillOpacity="0.75"
                  />
                  <g filter="url(#filter0_ii_202_195)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.7296 5C10.4607 5 7 8.46402 7 12.7371V289.338H493V12.7371C493 8.46402 489.539 5 485.27 5H14.7296ZM481.889 16.6056H18.1113V277.732H481.889V16.6056Z"
                      fill="#EDEEF0"
                    />
                  </g>
                  <mask
                    id="mask0_202_195"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="7"
                    y="5"
                    width="486"
                    height="285"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.7296 5C10.4607 5 7 8.46402 7 12.7371V289.338H493V12.7371C493 8.46402 489.539 5 485.27 5H14.7296ZM481.889 16.6056H18.1113V277.732H481.889V16.6056Z"
                      fill="url(#paint7_linear_202_195)"
                    />
                  </mask>
                  <g mask="url(#mask0_202_195)">
                    <mask id="path-14-inside-1_202_195" fill="white">
                      <path d="M7.00034 289.338H6.75879V289.579H7.00034V289.338ZM493 289.338V289.579H493.242V289.338H493ZM18.1117 16.6052V16.3634H17.8701V16.6052H18.1117ZM481.889 16.6052H482.131V16.3634H481.889V16.6052ZM18.1117 277.732H17.8701V277.974H18.1117V277.732ZM481.889 277.732V277.974H482.131V277.732H481.889ZM7.24189 12.7367C7.24189 8.59715 10.5944 5.24138 14.73 5.24138V4.75781C10.3276 4.75781 6.75879 8.33007 6.75879 12.7367H7.24189ZM7.24189 289.338V12.7367H6.75879V289.338H7.24189ZM493 289.096H7.00034V289.579H493V289.096ZM492.759 12.7367V289.338H493.242V12.7367H492.759ZM485.271 5.24138C489.406 5.24138 492.759 8.59715 492.759 12.7367H493.242C493.242 8.33007 489.674 4.75781 485.271 4.75781V5.24138ZM14.73 5.24138H485.271V4.75781H14.73V5.24138ZM18.1117 16.847H481.889V16.3634H18.1117V16.847ZM18.3532 277.732V16.6052H17.8701V277.732H18.3532ZM481.889 277.49H18.1117V277.974H481.889V277.49ZM481.647 16.6052V277.732H482.131V16.6052H481.647Z" />
                    </mask>
                    <path
                      d="M7.00034 289.338H6.75879V289.579H7.00034V289.338ZM493 289.338V289.579H493.242V289.338H493ZM18.1117 16.6052V16.3634H17.8701V16.6052H18.1117ZM481.889 16.6052H482.131V16.3634H481.889V16.6052ZM18.1117 277.732H17.8701V277.974H18.1117V277.732ZM481.889 277.732V277.974H482.131V277.732H481.889ZM7.24189 12.7367C7.24189 8.59715 10.5944 5.24138 14.73 5.24138V4.75781C10.3276 4.75781 6.75879 8.33007 6.75879 12.7367H7.24189ZM7.24189 289.338V12.7367H6.75879V289.338H7.24189ZM493 289.096H7.00034V289.579H493V289.096ZM492.759 12.7367V289.338H493.242V12.7367H492.759ZM485.271 5.24138C489.406 5.24138 492.759 8.59715 492.759 12.7367H493.242C493.242 8.33007 489.674 4.75781 485.271 4.75781V5.24138ZM14.73 5.24138H485.271V4.75781H14.73V5.24138ZM18.1117 16.847H481.889V16.3634H18.1117V16.847ZM18.3532 277.732V16.6052H17.8701V277.732H18.3532ZM481.889 277.49H18.1117V277.974H481.889V277.49ZM481.647 16.6052V277.732H482.131V16.6052H481.647Z"
                      fill="url(#paint8_linear_202_195)"
                    />
                    <path
                      d="M15.23 5.24138V4.75781H14.23V5.24138H15.23ZM6.75879 13.2367H7.24189V12.2367H6.75879V13.2367ZM493.242 12.2367H492.759V13.2367H493.242V12.2367ZM484.771 4.75781V5.24138H485.771V4.75781H484.771ZM7.00034 289.338H8.00034V288.338H7.00034V289.338ZM6.75879 289.579H5.75879V290.579H6.75879V289.579ZM493 289.338V288.338H492V289.338H493ZM493.242 289.579V290.579H494.242V289.579H493.242ZM18.1117 16.6052V17.6052H19.1117V16.6052H18.1117ZM17.8701 16.3634V15.3634H16.8701V16.3634H17.8701ZM481.889 16.6052H480.889V17.6052H481.889V16.6052ZM482.131 16.3634H483.131V15.3634H482.131V16.3634ZM18.1117 277.732H19.1117V276.732H18.1117V277.732ZM17.8701 277.974H16.8701V278.974H17.8701V277.974ZM481.889 277.732V276.732H480.889V277.732H481.889ZM482.131 277.974V278.974H483.131V277.974H482.131ZM7.24189 289.338V290.338H8.24189V289.338H7.24189ZM493 289.096H494V288.096H493V289.096ZM7.00034 289.096V288.096H6.00034V289.096H7.00034ZM492.759 289.338H491.759V290.338H492.759V289.338ZM18.1117 16.847H17.1117V17.847H18.1117V16.847ZM481.889 16.847V17.847H482.889V16.847H481.889ZM18.3532 277.732V278.732H19.3532V277.732H18.3532ZM18.3532 16.6052H19.3532V15.6052H18.3532V16.6052ZM481.889 277.49H482.889V276.49H481.889V277.49ZM18.1117 277.49V276.49H17.1117V277.49H18.1117ZM481.647 16.6052V15.6052H480.647V16.6052H481.647ZM481.647 277.732H480.647V278.732H481.647V277.732ZM7.00034 288.338H6.75879V290.338H7.00034V288.338ZM5.75879 289.338V289.579H7.75879V289.338H5.75879ZM6.75879 290.579H7.00034V288.579H6.75879V290.579ZM8.00034 289.579V289.338H6.00034V289.579H8.00034ZM492 289.338V289.579H494V289.338H492ZM493 290.579H493.242V288.579H493V290.579ZM494.242 289.579V289.338H492.242V289.579H494.242ZM493.242 288.338H493V290.338H493.242V288.338ZM19.1117 16.6052V16.3634H17.1117V16.6052H19.1117ZM18.1117 15.3634H17.8701V17.3634H18.1117V15.3634ZM16.8701 16.3634V16.6052H18.8701V16.3634H16.8701ZM17.8701 17.6052H18.1117V15.6052H17.8701V17.6052ZM481.889 17.6052H482.131V15.6052H481.889V17.6052ZM483.131 16.6052V16.3634H481.131V16.6052H483.131ZM482.131 15.3634H481.889V17.3634H482.131V15.3634ZM480.889 16.3634V16.6052H482.889V16.3634H480.889ZM18.1117 276.732H17.8701V278.732H18.1117V276.732ZM16.8701 277.732V277.974H18.8701V277.732H16.8701ZM17.8701 278.974H18.1117V276.974H17.8701V278.974ZM19.1117 277.974V277.732H17.1117V277.974H19.1117ZM480.889 277.732V277.974H482.889V277.732H480.889ZM481.889 278.974H482.131V276.974H481.889V278.974ZM483.131 277.974V277.732H481.131V277.974H483.131ZM482.131 276.732H481.889V278.732H482.131V276.732ZM8.24189 12.7367C8.24189 9.14852 11.1476 6.24138 14.73 6.24138V4.24138C10.0412 4.24138 6.24189 8.04578 6.24189 12.7367H8.24189ZM14.73 3.75781C9.77441 3.75781 5.75879 7.7787 5.75879 12.7367H7.75879C7.75879 8.88145 10.8808 5.75781 14.73 5.75781V3.75781ZM8.24189 289.338V12.7367H6.24189V289.338H8.24189ZM5.75879 12.7367V289.338H7.75879V12.7367H5.75879ZM6.75879 290.338H7.24189V288.338H6.75879V290.338ZM493 288.096H7.00034V290.096H493V288.096ZM6.00034 289.096V289.579H8.00034V289.096H6.00034ZM7.00034 290.579H493V288.579H7.00034V290.579ZM494 289.579V289.096H492V289.579H494ZM491.759 12.7367V289.338H493.759V12.7367H491.759ZM492.759 290.338H493.242V288.338H492.759V290.338ZM494.242 289.338V12.7367H492.242V289.338H494.242ZM485.271 6.24138C488.853 6.24138 491.759 9.14854 491.759 12.7367H493.759C493.759 8.04576 489.959 4.24138 485.271 4.24138V6.24138ZM494.242 12.7367C494.242 7.77879 490.227 3.75781 485.271 3.75781V5.75781C489.121 5.75781 492.242 8.88136 492.242 12.7367H494.242ZM14.73 6.24138H485.271V4.24138H14.73V6.24138ZM485.271 3.75781H14.73V5.75781H485.271V3.75781ZM18.1117 17.847H481.889V15.847H18.1117V17.847ZM482.889 16.847V16.3634H480.889V16.847H482.889ZM481.889 15.3634H18.1117V17.3634H481.889V15.3634ZM17.1117 16.3634V16.847H19.1117V16.3634H17.1117ZM19.3532 277.732V16.6052H17.3532V277.732H19.3532ZM18.3532 15.6052H17.8701V17.6052H18.3532V15.6052ZM16.8701 16.6052V277.732H18.8701V16.6052H16.8701ZM17.8701 278.732H18.3532V276.732H17.8701V278.732ZM481.889 276.49H18.1117V278.49H481.889V276.49ZM17.1117 277.49V277.974H19.1117V277.49H17.1117ZM18.1117 278.974H481.889V276.974H18.1117V278.974ZM482.889 277.974V277.49H480.889V277.974H482.889ZM480.647 16.6052V277.732H482.647V16.6052H480.647ZM481.647 278.732H482.131V276.732H481.647V278.732ZM483.131 277.732V16.6052H481.131V277.732H483.131ZM482.131 15.6052H481.647V17.6052H482.131V15.6052Z"
                      fill="url(#paint9_linear_202_195)"
                      mask="url(#path-14-inside-1_202_195)"
                    />
                  </g>
                  <g filter="url(#filter1_ii_202_195)">
                    <path
                      d="M7 289.338H493V330.441C493 334.714 489.539 338.178 485.27 338.178H14.7296C10.4606 338.178 7 334.714 7 330.441V289.338Z"
                      fill="#D4D5D7"
                    />
                  </g>
                  <path
                    d="M249.879 12.133C250.813 12.133 251.57 11.3753 251.57 10.4405C251.57 9.5058 250.813 8.74805 249.879 8.74805C248.945 8.74805 248.188 9.5058 248.188 10.4405C248.188 11.3753 248.945 12.133 249.879 12.133Z"
                    fill="#55575E"
                    stroke="#3B3B3B"
                  />
                  <mask
                    id="mask1_202_195"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="249"
                    y="9"
                    width="2"
                    height="3"
                  >
                    <path
                      d="M249.879 11.0449C250.213 11.0449 250.483 10.7742 250.483 10.4404C250.483 10.1066 250.213 9.83594 249.879 9.83594C249.546 9.83594 249.275 10.1066 249.275 10.4404C249.275 10.7742 249.546 11.0449 249.879 11.0449Z"
                      fill="#494C51"
                    />
                  </mask>
                  <g mask="url(#mask1_202_195)">
                    <path
                      d="M249.879 11.0449C250.213 11.0449 250.483 10.7742 250.483 10.4404C250.483 10.1066 250.213 9.83594 249.879 9.83594C249.546 9.83594 249.275 10.1066 249.275 10.4404C249.275 10.7742 249.546 11.0449 249.879 11.0449Z"
                      fill="#494C51"
                    />
                    <path
                      d="M249.517 9.83594H249.275V11.0449H249.517V9.83594Z"
                      fill="#617189"
                    />
                    <path
                      d="M250.483 9.83594H250.241V11.0449H250.483V9.83594Z"
                      fill="#617189"
                    />
                    <path
                      d="M249.879 10.8035C250.079 10.8035 250.241 10.6411 250.241 10.4408C250.241 10.2405 250.079 10.0781 249.879 10.0781C249.679 10.0781 249.517 10.2405 249.517 10.4408C249.517 10.6411 249.679 10.8035 249.879 10.8035Z"
                      fill="#7B6A77"
                    />
                    <path
                      d="M250 10.5617C250.134 10.5617 250.242 10.4534 250.242 10.3199C250.242 10.1864 250.134 10.0781 250 10.0781C249.867 10.0781 249.759 10.1864 249.759 10.3199C249.759 10.4534 249.867 10.5617 250 10.5617Z"
                      fill="white"
                      fillOpacity="0.2"
                    />
                  </g>
                  <path
                    d="M236.998 305.478L251.579 300.473L266.215 305.478L251.579 310.391L236.998 305.478Z"
                    fill="url(#paint10_linear_202_195)"
                  />
                  <path
                    d="M236.998 305.478L251.579 300.473L266.215 305.478L251.579 310.391L236.998 305.478Z"
                    fill="black"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M236.998 305.478L251.579 300.473L266.215 305.478L251.579 310.391L236.998 305.478Z"
                    stroke="url(#paint11_linear_202_195)"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M252.056 329.167V311.024L266.674 306.021V324.165L252.056 329.167Z"
                    fill="url(#paint12_linear_202_195)"
                  />
                  <path
                    d="M252.056 329.167V311.024L266.674 306.021V324.165L252.056 329.167Z"
                    fill="black"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M252.056 329.167V311.024L266.674 306.021V324.165L252.056 329.167Z"
                    stroke="url(#paint13_linear_202_195)"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M266.546 306.142L259.903 317.868L252.174 311.098L266.546 306.142Z"
                    fill="url(#paint14_linear_202_195)"
                  />
                  <path
                    d="M259.903 317.868L252.174 328.99L266.546 324.155L259.903 317.868Z"
                    fill="url(#paint15_linear_202_195)"
                  />
                  <path
                    d="M251.212 329.167V311.024L236.594 306.021V324.165L251.212 329.167Z"
                    fill="url(#paint16_linear_202_195)"
                  />
                  <path
                    d="M251.212 329.167V311.024L236.594 306.021V324.165L251.212 329.167Z"
                    fill="white"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M251.212 329.167V311.024L236.594 306.021V324.165L251.212 329.167Z"
                    stroke="url(#paint17_linear_202_195)"
                    strokeWidth="0.3"
                  />
                  <defs>
                    <filter
                      id="filter0_ii_202_195"
                      x="7"
                      y="4.5"
                      width="486"
                      height="285.838"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="0.5" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_202_195"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-0.5" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_innerShadow_202_195"
                        result="effect2_innerShadow_202_195"
                      />
                    </filter>
                    <filter
                      id="filter1_ii_202_195"
                      x="7"
                      y="287.338"
                      width="486"
                      height="51.8408"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="0.5" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_202_195"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-2" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_innerShadow_202_195"
                        result="effect2_innerShadow_202_195"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_202_195"
                      x1="250"
                      y1="336"
                      x2="250"
                      y2="375"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A4A5A7" />
                      <stop offset="0.504809" stopColor="#C8C9CB" />
                      <stop offset="0.931918" stopColor="#D0D1D3" />
                      <stop offset="0.957961" stopColor="#E8E9EB" />
                      <stop offset="1" stopColor="#727375" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_202_195"
                      x1="192.27"
                      y1="377.898"
                      x2="205.434"
                      y2="377.898"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#97989A" />
                      <stop offset="0.0366972" stopColor="#707173" />
                      <stop offset="0.110092" stopColor="#B9BABC" />
                      <stop offset="0.380734" stopColor="#E7E8EA" />
                      <stop offset="0.572521" stopColor="#D0D1D3" />
                      <stop offset="1" stopColor="#D1D2D4" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_202_195"
                      x1="307.731"
                      y1="377.898"
                      x2="294.566"
                      y2="377.898"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#97989A" />
                      <stop offset="0.0366972" stopColor="#707173" />
                      <stop offset="0.110092" stopColor="#B9BABC" />
                      <stop offset="0.380734" stopColor="#E7E8EA" />
                      <stop offset="0.572521" stopColor="#D0D1D3" />
                      <stop offset="1" stopColor="#D1D2D4" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_202_195"
                      x1="298.551"
                      y1="380.437"
                      x2="298.551"
                      y2="381.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#B39867" />
                      <stop offset="0.171456" stopColor="#D8BD86" />
                      <stop offset="0.364176" stopColor="#F3DDA6" />
                      <stop offset="1" stopColor="#EFD8A1" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_202_195"
                      x1="298.551"
                      y1="380.437"
                      x2="298.551"
                      y2="381.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#707173" />
                      <stop offset="0.171456" stopColor="#A0A1A3" />
                      <stop offset="0.364176" stopColor="#D5D6D8" />
                      <stop offset="1" stopColor="#D5D6D8" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_202_195"
                      x1="201.449"
                      y1="380.437"
                      x2="201.449"
                      y2="381.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#707173" />
                      <stop offset="0.171456" stopColor="#A0A1A3" />
                      <stop offset="0.364176" stopColor="#D5D6D8" />
                      <stop offset="1" stopColor="#D5D6D8" />
                    </linearGradient>
                    <radialGradient
                      id="paint6_radial_202_195"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(249.879 381.645) rotate(90) scale(2.17606 125.969)"
                    >
                      <stop />
                      <stop offset="0.619399" stopOpacity="0.1" />
                      <stop offset="1" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient
                      id="paint7_linear_202_195"
                      x1="250"
                      y1="5"
                      x2="250"
                      y2="289.338"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint8_linear_202_195"
                      x1="250"
                      y1="4.9996"
                      x2="250"
                      y2="289.338"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint9_linear_202_195"
                      x1="250"
                      y1="5"
                      x2="250"
                      y2="289.579"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="#C2C2C2" />
                    </linearGradient>
                    <linearGradient
                      id="paint10_linear_202_195"
                      x1="251.577"
                      y1="300.219"
                      x2="251.708"
                      y2="329.233"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EFF0F2" />
                      <stop offset="1" stopColor="#CDCED0" />
                    </linearGradient>
                    <linearGradient
                      id="paint11_linear_202_195"
                      x1="251.577"
                      y1="300.581"
                      x2="251.708"
                      y2="329.716"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A7A7A7" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint12_linear_202_195"
                      x1="251.819"
                      y1="300.219"
                      x2="263.11"
                      y2="323.835"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EFF0F2" />
                      <stop offset="1" stopColor="#CDCED0" />
                    </linearGradient>
                    <linearGradient
                      id="paint13_linear_202_195"
                      x1="259.365"
                      y1="300.098"
                      x2="259.365"
                      y2="329.337"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A7A7A7" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <linearGradient
                      id="paint14_linear_202_195"
                      x1="266.425"
                      y1="308.559"
                      x2="252.563"
                      y2="312.993"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A1A2A5" />
                      <stop offset="1" stopColor="#BEBEC0" />
                    </linearGradient>
                    <linearGradient
                      id="paint15_linear_202_195"
                      x1="266.305"
                      y1="322.341"
                      x2="252.171"
                      y2="327.41"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#C0C2C6" />
                      <stop offset="1" stopColor="#9E9E9E" />
                    </linearGradient>
                    <linearGradient
                      id="paint16_linear_202_195"
                      x1="251.449"
                      y1="300.219"
                      x2="240.158"
                      y2="323.835"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EFF0F2" />
                      <stop offset="1" stopColor="#CDCED0" />
                    </linearGradient>
                    <linearGradient
                      id="paint17_linear_202_195"
                      x1="243.904"
                      y1="300.46"
                      x2="243.904"
                      y2="329.337"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A7A7A7" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Imac */}
              <div className="absolute -left-[24px] top-[56px] w-[547px] px-[41px] ">
                <div className="h-full overflow-hidden">
                  <header
                    className={`${
                      currentTab == "header" ? "border border-red-500" : ""
                    } bg-primary h-10 cursor-pointer flex justify-center items-center hover:border hover:border-red-500 transition duration-300`}
                    style={{
                      background: `${
                        stateMenu.headerBackgroundGradient == null ||
                        stateMenu.headerBackgroundGradient == ""
                          ? stateMenu.headerBackgroundColor
                          : stateMenu.headerBackgroundGradient
                      }`,
                      borderWidth: `${stateMenu.headerBorderWidth}px`,
                      borderColor: stateMenu.headerBorderColor,
                      borderRadius: stateMenu.headerBorderRadius,
                      boxShadow: "10px 10px 8px #888888",
                      color: stateMenu.headerColor,
                      height: stateMenu.headerHeight,
                      filter: `blur(${stateMenu.headerFilterBlur})`,
                    }}
                    onClick={() => handleMenu("header")}
                  >
                    Header
                  </header>
                  <div className="flex">
                    <div
                      className={`${
                        currentTab === "sidebar" ? "border border-red-500" : ""
                      } w-[15%] h-[186px] bg-secondary cursor-pointer  flex justify-center items-center hover:border hover:border-red-500 transition duration-300`}
                      onClick={() => handleMenu("sidebar")}
                      style={{
                        background: `${
                          stateMenu.sidebarBackgroundGradient == null ||
                          stateMenu.sidebarBackgroundGradient == ""
                            ? stateMenu.sidebarBackgroundColor
                            : stateMenu.sidebarBackgroundGradient
                        }`,
                        borderWidth: `${stateMenu.sidebarBorderWidth}px`,
                        borderColor: stateMenu.sidebarBorderColor,
                        borderRadius: stateMenu.sidebarBorderRadius,
                        boxShadow: stateMenu.sidebarShadow,
                        color: stateMenu.sidebarColor,
                        height: stateMenu.sidebarHeight,
                        filter: `blur(${stateMenu.sidebarFilterBlur})`,
                      }}
                    >
                      Sidebar
                    </div>
                    <div
                      className={`${
                        currentTab === "content" ? "border border-red-500" : ""
                      } cursor-pointer flex w-full h-[186px] justify-center items-center hover:border hover:border-red-500 transition duration-300`}
                      style={{
                        background: `${
                          stateMenu.contentBackgroundGradient == null ||
                          stateMenu.contentBackgroundGradient == ""
                            ? stateMenu.contentBackgroundColor
                            : stateMenu.contentBackgroundGradient
                        }`,
                        borderWidth: `${stateMenu.contentBorderWidth}px`,
                        borderColor: stateMenu.contentBorderColor,
                        boxShadow: stateMenu.contentShadow,
                        color: stateMenu.contentColor,
                        height: stateMenu.contentHeight,
                        filter: `blur(${stateMenu.contentFilterBlur})`,
                        backgroundImage: `url(http://localhost:8000/bootstrap-test/assets/${stateMenu.contentBackgroundImage})`,
                      }}
                      onClick={() => handleMenu("content")}
                    >
                      Content
                    </div>
                  </div>
                  <footer
                    className={`${
                      currentTab == "footer" ? "border border-red-500" : ""
                    } bg-primary h-10 cursor-pointer flex justify-center items-center hover:border hover:border-red-500 transition duration-300`}
                    style={{
                      background: `${
                        stateMenu.footerBackgroundGradient == null ||
                        stateMenu.footerBackgroundGradient == ""
                          ? stateMenu.footerBackgroundColor
                          : stateMenu.footerBackgroundGradient
                      }`,
                      borderWidth: `${stateMenu.footerBorderWidth}px`,
                      borderColor: stateMenu.footerBorderColor,
                      boxShadow: stateMenu.footerShadow,
                      color: stateMenu.footerColor,
                      height: stateMenu.footerHeight,
                      filter: `blur(${stateMenu.footerFilterBlur})`,
                    }}
                    onClick={() => handleMenu("footer")}
                  >
                    Footer
                  </footer>
                </div>
              </div>
            </div>
          </div>
          {/* End Preview */}
        </div>
        {/* Pembatas */}
        {/* Menu Kanan */}
        {/* header */}
        <div
          className={`${
            currentTab === "header" ? "w-[20%] h-fit p-2" : "hidden"
          } `}
        >
          {currentTab === "header"
            ? tabComponentSlider.header.map((component, index) => (
                <InputRangeSlider
                  key={index}
                  name={component.name}
                  property={component.property}
                  unit={component.unit}
                />
              ))
            : null}
        </div>
        {/* End header */}
        {/* sidebar */}
        <div
          className={`${
            currentTab === "sidebar" ? "w-[20%] h-fit p-2" : "hidden"
          } `}
        >
          {currentTab === "sidebar"
            ? tabComponentSlider.sidebar.map((component, index) => (
                <InputRangeSlider
                  key={index}
                  name={component.name}
                  property={component.property}
                  unit={component.unit}
                />
              ))
            : null}
        </div>
        {/* End sidebar */}
        {/* content */}
        <div
          className={`${
            currentTab === "content" ? "w-[20%] h-fit p-2" : "hidden"
          } `}
        >
          {currentTab === "content"
            ? tabComponentSlider.content.map((component, index) => (
                <InputRangeSlider
                  key={index}
                  name={component.name}
                  property={component.property}
                  unit={component.unit}
                />
              ))
            : null}
        </div>
        {/* End content */}
        {/* footer */}
        <div
          className={`${
            currentTab === "footer" ? "w-[20%] h-fit p-2" : "hidden"
          } `}
        >
          {currentTab === "footer"
            ? tabComponentSlider.footer.map((component, index) => (
                <InputRangeSlider
                  key={index}
                  name={component.name}
                  property={component.property}
                  unit={component.unit}
                />
              ))
            : null}
        </div>
        {/* End footer */}
        {/* End Menu Kanan */}

        {/* End Pembatas */}
      </div>

      {/* Menu Bawah */}
      {/* Header */}
      <div
        className={`${
          currentTab === "header" ? "h-80" : "hidden"
        } overflow-y-scroll`}
      >
        {/* Dimension */}
        <div className="grid grid-cols-3 gap-1 text-sm p-2">
          {currentTab === "header"
            ? tabComponent.header.dimension.map((component, index) => (
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
          {currentTab === "header"
            ? tabComponent.header.border.map((component, index) => (
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
          {currentTab === "header"
            ? tabComponent.header.font.map((component, index) => (
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
          {currentTab === "header"
            ? tabComponent.header.background.map((component, index) => (
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
        <div className="grid grid-cols-3 gap-1 text-sm p-2">
          {currentTab === "header"
            ? tabComponent.header.upload.map((component, index) => (
                <InputFile
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
      {/* End Header */}
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Sidebar */}
      <div
        className={`${
          currentTab === "sidebar" ? "h-80" : "hidden"
        } overflow-y-scroll`}
      >
        {/* Dimension */}
        <div className="grid grid-cols-3 gap-1 text-sm p-2">
          {currentTab === "sidebar"
            ? tabComponent.sidebar.dimension.map((component, index) => (
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
          {currentTab === "sidebar"
            ? tabComponent.sidebar.border.map((component, index) => (
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
          {currentTab === "sidebar"
            ? tabComponent.sidebar.font.map((component, index) => (
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
          {currentTab === "sidebar"
            ? tabComponent.sidebar.background.map((component, index) => (
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
        <div className="grid grid-cols-3 gap-1 text-sm p-2">
          {currentTab === "sidebar"
            ? tabComponent.sidebar.upload.map((component, index) => (
                <InputFile
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
      {/* End Sidebar */}
      {/* content */}
      <div
        className={`${
          currentTab === "content" ? "h-80" : "hidden"
        } overflow-y-scroll`}
      >
        {/* Dimension */}
        <div className="grid grid-cols-3 gap-1 text-sm p-2">
          {currentTab === "content"
            ? tabComponent.content.dimension.map((component, index) => (
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
          {currentTab === "content"
            ? tabComponent.content.border.map((component, index) => (
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
          {currentTab === "content"
            ? tabComponent.content.font.map((component, index) => (
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
          {currentTab === "content"
            ? tabComponent.content.background.map((component, index) => (
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
        <div className="grid grid-cols-3 gap-1 text-sm p-2">
          {currentTab === "content"
            ? tabComponent.content.upload.map((component, index) => (
                <InputFile
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
      {/* End content */}
      {/* footer */}
      <div
        className={`${
          currentTab === "footer" ? "h-80" : "hidden"
        } overflow-y-scroll`}
      >
        {/* Dimension */}
        <div className="grid grid-cols-3 gap-1 text-sm p-2">
          {currentTab === "footer"
            ? tabComponent.footer.dimension.map((component, index) => (
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
          {currentTab === "footer"
            ? tabComponent.footer.border.map((component, index) => (
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
          {currentTab === "footer"
            ? tabComponent.footer.font.map((component, index) => (
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
          {currentTab === "footer"
            ? tabComponent.footer.background.map((component, index) => (
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
        <div className="grid grid-cols-3 gap-1 text-sm p-2">
          {currentTab === "footer"
            ? tabComponent.footer.upload.map((component, index) => (
                <InputFile
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
      {/* End footer */}
      {/* End Menu Bawah */}
    </div>
  );
};

export default Preview;
