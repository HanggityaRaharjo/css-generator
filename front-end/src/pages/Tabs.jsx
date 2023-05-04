import Navbar from "../components/Navbar";
import { useState } from "react";
import Side from "../components/Side";
import useStyleStore from "../store/CssStore";
import InputStyle from "../components/InputStyle";
import InputSelect from "../components/InputSelect";
import InputFile from "../components/InputFile";
import InputRangeSlider from "../components/InputRangeSlider";
const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("tabsActive");
  const stateForm = useStyleStore((state) => state);

  const handleTab = (elementClass) => {
    setCurrentTab(elementClass);
  };

  const tabComponent = {
    tabsActive: {
      dimension: [
        {
          name: "Height",
          property: "tabsActiveHeight",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "tabsActiveBorderWidth",
          defaultValue: "0px",
          type: "number",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "tabsActiveBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "tabsActiveShadow",
          defaultValue: "",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "tabsActiveColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "tabsActiveFontFamily",
          defaultValue: "0px",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "tabsActiveFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "tabsActiveBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "tabsActiveBackgroundGradient",
          defaultValue: "",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "tabsActiveFilterBlur",
          defaultValue: "",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "tabsActiveBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
    tabsItem: {
      dimension: [
        {
          name: "Height",
          property: "tabsItemHeight",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "tabsItemBorderWidth",
          defaultValue: "0px",
          type: "number",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "tabsItemBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "tabsItemShadow",
          defaultValue: "",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "tabsItemColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "tabsItemFontFamily",
          defaultValue: "0px",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "tabsItemFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "tabsItemBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "tabsItemBackgroundGradient",
          defaultValue: "",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "tabsItemFilterBlur",
          defaultValue: "",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "tabsItemBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
  };

  const tabComponentSelect = {
    label: [
      {
        name: "Font Style",
        property: "formLabelFontStyle",
        value: [
          { childName: "Normal", value: "normal" },
          { childName: "Italic", value: "italic" },
          { childName: "Oblique", value: "oblique" },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] dark:text-slate-200">
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
                        <div className="mt-5">
                          <h4 className="text-2xl font-bold">Tab Active</h4>
                          <div className="flex">
                            <div
                              className={` rounded-t-md bg-white w-20 py-4 px-1 cursor-pointer hover:border-red-500 ${
                                currentTab === "tabsActive"
                                  ? "border border-red-500"
                                  : "border border-gray-400 border-b-0"
                              }`}
                              onClick={() => handleTab("tabsActive")}
                            >
                              Tab Active
                            </div>
                            <div
                              className={`border-b hover:border border-gray-400 rounded-t-md cursor-pointer w-fit py-4 p-2 hover:border-red-500 ${
                                currentTab === "tabsItem"
                                  ? "border border-red-500"
                                  : ""
                              }`}
                              onClick={() => handleTab("tabsItem")}
                            >
                              Tab Item
                            </div>
                            <div
                              className={`border-b hover:border border-gray-400 rounded-t-md cursor-pointer w-fit py-4 p-2 hover:border-red-500 ${
                                currentTab === "tabsItem"
                                  ? "border border-red-500"
                                  : ""
                              }`}
                              onClick={() => handleTab("tabsItem")}
                            >
                              Tab Item
                            </div>
                            <div
                              className={`border-b hover:border border-gray-400 rounded-t-md cursor-pointer w-fit py-4 p-2 hover:border-red-500 ${
                                currentTab === "tabsItem"
                                  ? "border border-red-500"
                                  : ""
                              }`}
                              onClick={() => handleTab("tabsItem")}
                            >
                              Tab Item
                            </div>
                            <div
                              className={`border-b hover:border border-gray-400 rounded-t-md cursor-pointer w-fit py-4 p-2 hover:border-red-500 ${
                                currentTab === "tabsItem"
                                  ? "border border-red-500"
                                  : ""
                              }`}
                              onClick={() => handleTab("tabsItem")}
                            >
                              Tab Item
                            </div>
                            <div className="w-[650px] border-b border-gray-400"></div>
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
              {/* Select */}
              {currentTab === "label"
                ? tabComponentSelect.label.map((component, index) => (
                    <InputSelect
                      key={index}
                      name={component.name}
                      value={component.value}
                    />
                  ))
                : ""}
              {/* End Select */}
            </div>
            {/* End Menu Kanan */}
            {/* End Pembatas */}
          </div>

          {/* Menu Bawah */}
          {/* Tabs Active */}
          <div
            className={`${
              currentTab === "tabsActive" ? "h-80" : "hidden"
            } overflow-y-scroll`}
          >
            {/* Dimension */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "tabsActive"
                ? tabComponent.tabsActive.dimension.map((component, index) => (
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
              {currentTab === "tabsActive"
                ? tabComponent.tabsActive.border.map((component, index) => (
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
              {currentTab === "tabsActive"
                ? tabComponent.tabsActive.font.map((component, index) => (
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
              {currentTab === "tabsActive"
                ? tabComponent.tabsActive.background.map((component, index) => (
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
              {currentTab === "tabsActive"
                ? tabComponent.tabsActive.upload.map((component, index) => (
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
          {/* End Tabs Active */}
          {/* Tabs Item */}
          <div
            className={`${
              currentTab === "tabsItem" ? "h-80" : "hidden"
            } overflow-y-scroll`}
          >
            {/* Dimension */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "tabsItem"
                ? tabComponent.tabsItem.dimension.map((component, index) => (
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
              {currentTab === "tabsItem"
                ? tabComponent.tabsItem.border.map((component, index) => (
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
              {currentTab === "tabsItem"
                ? tabComponent.tabsItem.font.map((component, index) => (
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
              {currentTab === "tabsItem"
                ? tabComponent.tabsItem.background.map((component, index) => (
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
              {currentTab === "tabsItem"
                ? tabComponent.tabsItem.upload.map((component, index) => (
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
          {/* End Tabs Item */}

          {/* End Menu Bawah */}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
