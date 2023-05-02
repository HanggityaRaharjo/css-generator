import React, { useEffect, useState } from "react";
import useStyleStore from "../store/CssStore";

import InputSelect from "./InputSelect";
import InputRangeSlider from "./InputRangeSlider";
import InputStyle from "./InputStyle";

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
          name: "Background Image",
          property: "headerBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
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
          name: "Background Image",
          property: "sidebarBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },

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
          <div className="flex justify-center">
            <div className=" relative w-[750px] ">
              {/* <img src="iMac.svg" alt="" className="w-full " /> */}
              {/* Imac */}
              <div>
                <svg
                  className="h-[600px] w-[742px]"
                  viewBox="0 0 500 422"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_202_195)">
                    <path
                      className="text-[#EDEEF0] dark:text-[#1F2324]"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.7296 5C10.4607 5 7 8.46402 7 12.7371V289.338H493V12.7371C493 8.46402 489.539 5 485.27 5H14.7296ZM481.889 16.6056H18.1113V277.732H481.889V16.6056Z"
                      fill="currentColor"
                    />
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
                        fill="url(#paint0_linear_202_195)"
                      />
                    </mask>
                    <g mask="url(#mask0_202_195)">
                      <path
                        d="M7.00034 289.338H6.75879V289.579H7.00034V289.338ZM493 289.338V289.579H493.242V289.338H493ZM18.1117 16.6052V16.3634H17.8701V16.6052H18.1117ZM481.889 16.6052H482.131V16.3634H481.889V16.6052ZM18.1117 277.732H17.8701V277.974H18.1117V277.732ZM481.889 277.732V277.974H482.131V277.732H481.889ZM7.24189 12.7367C7.24189 8.59715 10.5944 5.24138 14.73 5.24138V4.75781C10.3276 4.75781 6.75879 8.33007 6.75879 12.7367H7.24189ZM7.24189 289.338V12.7367H6.75879V289.338H7.24189ZM493 289.096H7.00034V289.579H493V289.096ZM492.759 12.7367V289.338H493.242V12.7367H492.759ZM485.271 5.24138C489.406 5.24138 492.759 8.59715 492.759 12.7367H493.242C493.242 8.33007 489.674 4.75781 485.271 4.75781V5.24138ZM14.73 5.24138H485.271V4.75781H14.73V5.24138ZM18.1117 16.847H481.889V16.3634H18.1117V16.847ZM18.3532 277.732V16.6052H17.8701V277.732H18.3532ZM481.889 277.49H18.1117V277.974H481.889V277.49ZM481.647 16.6052V277.732H482.131V16.6052H481.647Z"
                        fill="url(#paint1_linear_202_195)"
                      />
                    </g>
                    <path
                      className="text-[#D4D5D7] dark:text-[#151616]"
                      d="M7 289.338H493V330.441C493 334.714 489.539 338.178 485.27 338.178H14.7296C10.4606 338.178 7 334.714 7 330.441V289.338Z"
                      fill="currentColor"
                    />
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
                      d="M307.731 338.179H192.27V408.538H307.731V338.179Z"
                      fill="url(#paint2_linear_202_195)"
                    />
                    <path
                      d="M192.27 409.021H307.731V413.132C307.731 413.398 307.513 413.615 307.248 413.615H192.753C192.486 413.615 192.27 413.398 192.27 413.132V409.021Z"
                      fill="#D5D6D8"
                    />
                    <path
                      d="M192.27 409.021H207.729V413.615H192.753C192.486 413.615 192.27 413.398 192.27 413.132V409.021Z"
                      fill="url(#paint3_linear_202_195)"
                    />
                    <path
                      d="M307.731 409.021H292.271V413.615H307.248C307.513 413.615 307.731 413.398 307.731 413.132V409.021Z"
                      fill="url(#paint4_linear_202_195)"
                    />
                    <path
                      d="M291.305 413.615H305.798V414.341C305.798 414.607 305.58 414.824 305.315 414.824H291.788C291.522 414.824 291.305 414.607 291.305 414.341V413.615Z"
                      fill="url(#paint5_linear_202_195)"
                    />
                    <path
                      d="M291.305 413.615H305.798V414.341C305.798 414.607 305.58 414.824 305.315 414.824H291.788C291.522 414.824 291.305 414.607 291.305 414.341V413.615Z"
                      fill="url(#paint6_linear_202_195)"
                    />
                    <path
                      d="M307.731 408.537H192.27V408.779H307.731V408.537Z"
                      fill="#707173"
                    />
                    <path
                      d="M307.731 408.779H192.27V409.021H307.731V408.779Z"
                      fill="#C7C8CA"
                    />
                    <path
                      d="M307.731 409.021H192.27V409.263H307.731V409.021Z"
                      fill="#EBECEE"
                    />
                    <path
                      d="M194.202 413.615H208.695V414.341C208.695 414.607 208.479 414.824 208.212 414.824H194.685C194.418 414.824 194.202 414.607 194.202 414.341V413.615Z"
                      fill="url(#paint7_linear_202_195)"
                    />
                    <path
                      d="M236.998 305.478L251.579 300.473L266.215 305.478L251.579 310.391L236.998 305.478Z"
                      fill="url(#paint8_linear_202_195)"
                    />
                    <path
                      d="M236.998 305.478L251.579 300.473L266.215 305.478L251.579 310.391L236.998 305.478Z"
                      fill="black"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M236.998 305.478L251.579 300.473L266.215 305.478L251.579 310.391L236.998 305.478Z"
                      stroke="url(#paint9_linear_202_195)"
                      strokeWidth="0.3"
                    />
                    <path
                      d="M252.056 329.167V311.024L266.674 306.021V324.165L252.056 329.167Z"
                      fill="url(#paint10_linear_202_195)"
                    />
                    <path
                      d="M252.056 329.167V311.024L266.674 306.021V324.165L252.056 329.167Z"
                      fill="black"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M252.056 329.167V311.024L266.674 306.021V324.165L252.056 329.167Z"
                      stroke="url(#paint11_linear_202_195)"
                      strokeWidth="0.3"
                    />
                    <path
                      d="M266.546 306.142L259.903 317.868L252.174 311.098L266.546 306.142Z"
                      fill="url(#paint12_linear_202_195)"
                    />
                    <path
                      d="M259.903 317.868L252.174 328.99L266.546 324.155L259.903 317.868Z"
                      fill="url(#paint13_linear_202_195)"
                    />
                    <path
                      d="M251.212 329.167V311.024L236.594 306.021V324.165L251.212 329.167Z"
                      fill="url(#paint14_linear_202_195)"
                    />
                    <path
                      d="M251.212 329.167V311.024L236.594 306.021V324.165L251.212 329.167Z"
                      fill="white"
                      fillOpacity="0.25"
                    />
                    <path
                      d="M251.212 329.167V311.024L236.594 306.021V324.165L251.212 329.167Z"
                      stroke="url(#paint15_linear_202_195)"
                      strokeWidth="0.3"
                    />
                    <path
                      d="M249.879 417C319.449 417 375.848 416.025 375.848 414.824C375.848 413.622 319.449 412.647 249.879 412.647C180.308 412.647 123.91 413.622 123.91 414.824C123.91 416.025 180.308 417 249.879 417Z"
                      fill="url(#paint16_radial_202_195)"
                      fillOpacity="0.75"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_202_195"
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
                      id="paint1_linear_202_195"
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
                      id="paint2_linear_202_195"
                      x1="250"
                      y1="338.179"
                      x2="250"
                      y2="408.538"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A4A5A7" />
                      <stop offset="0.504809" stopColor="#C8C9CB" />
                      <stop offset="0.931918" stopColor="#D0D1D3" />
                      <stop offset="0.957961" stopColor="#E8E9EB" />
                      <stop offset="1" stopColor="#727375" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_202_195"
                      x1="192.27"
                      y1="411.077"
                      x2="205.434"
                      y2="411.077"
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
                      id="paint4_linear_202_195"
                      x1="307.731"
                      y1="411.077"
                      x2="294.566"
                      y2="411.077"
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
                      id="paint5_linear_202_195"
                      x1="298.551"
                      y1="413.615"
                      x2="298.551"
                      y2="414.824"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#B39867" />
                      <stop offset="0.171456" stopColor="#D8BD86" />
                      <stop offset="0.364176" stopColor="#F3DDA6" />
                      <stop offset="1" stopColor="#EFD8A1" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_202_195"
                      x1="298.551"
                      y1="413.615"
                      x2="298.551"
                      y2="414.824"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#707173" />
                      <stop offset="0.171456" stopColor="#A0A1A3" />
                      <stop offset="0.364176" stopColor="#D5D6D8" />
                      <stop offset="1" stopColor="#D5D6D8" />
                    </linearGradient>
                    <linearGradient
                      id="paint7_linear_202_195"
                      x1="201.449"
                      y1="413.615"
                      x2="201.449"
                      y2="414.824"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#707173" />
                      <stop offset="0.171456" stopColor="#A0A1A3" />
                      <stop offset="0.364176" stopColor="#D5D6D8" />
                      <stop offset="1" stopColor="#D5D6D8" />
                    </linearGradient>
                    <linearGradient
                      id="paint8_linear_202_195"
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
                      id="paint9_linear_202_195"
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
                      id="paint10_linear_202_195"
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
                      id="paint11_linear_202_195"
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
                      id="paint12_linear_202_195"
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
                      id="paint13_linear_202_195"
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
                      id="paint14_linear_202_195"
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
                      id="paint15_linear_202_195"
                      x1="243.904"
                      y1="300.46"
                      x2="243.904"
                      y2="329.337"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A7A7A7" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                    <radialGradient
                      id="paint16_radial_202_195"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(249.879 414.824) rotate(90) scale(2.17606 125.969)"
                    >
                      <stop />
                      <stop offset="0.619399" stopOpacity="0.1" />
                      <stop offset="1" stopOpacity="0" />
                    </radialGradient>
                    <clipPath id="clip0_202_195">
                      <rect
                        width="486"
                        height="412"
                        fill="white"
                        transform="translate(7 5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* Imac */}
              <div className="absolute -left-[2px] top-[23px] w-[746px] px-[43px] h-[372px] overflow-hidden">
                <div className="h-full overflow-hidden">
                  <header
                    className="bg-primary h-10 cursor-pointer flex justify-center items-center hover:border hover:border-red-500"
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
                      height: stateMenu.headerHeight,
                    }}
                    onClick={() => handleMenu("header")}
                  >
                    Header
                  </header>
                  <div className="flex">
                    <div
                      className="w-[15%] h-[300px] bg-secondary cursor-pointer  flex justify-center items-center hover:border hover:border-red-500"
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
                      className="w-[85%] cursor-pointer  flex justify-center items-center hover:border hover:border-red-500 bg-white"
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
                  <footer className="bg-primary h-8  flex justify-center items-center">
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
      {/* Header */}
      <div className="h-56 overflow-y-scroll">
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
        <div className="grid grid-cols-1 gap-1 text-sm p-2">
          {currentTab === "header"
            ? tabComponent.header.upload.map((component, index) => (
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
      {/* End Header */}
      {/* End Menu Bawah */}
    </div>
  );
};

export default Preview;
