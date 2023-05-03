import Navbar from "../components/Navbar";
import { useState } from "react";
import Side from "../components/Side";
import useStyleStore from "../store/CssStore";
import InputStyle from "../components/InputStyle";
import InputSelect from "../components/InputSelect";
import InputRangeSlider from "../components/InputRangeSlider";
const Form = () => {
  const [currentTab, setCurrentTab] = useState("label");
  const stateForm = useStyleStore((state) => state);

  const handleTab = (elementClass) => {
    setCurrentTab(elementClass);
  };

  const tabComponent = {
    label: {
      font: [
        {
          name: "Color",
          property: "formLabelColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "formLabelFontFamily",
          defaultValue: "0px",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "formLabelFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
        {
          name: "Font Weight",
          property: "formLabelFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
    },
    input: {
      dimension: [
        {
          name: "Height",
          property: "formInputHeight",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "formInputBorderWidth",
          defaultValue: "0px",
          type: "number",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "formInputBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "formInputShadow",
          defaultValue: "",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "formInputColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "formInputFontFamily",
          defaultValue: "0px",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "formInputFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "formInputBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "formInputBackgroundGradient",
          defaultValue: "",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "formInputFilterBlur",
          defaultValue: "",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "formInputBackgroundImage",
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
              <div className="mockup-window border border-base-300 rounded-t-none">
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
                        {/* Konten */}
                        <div className="border bg-white p-5 rounded-md shadow-md">
                          {/* Input */}
                          <div className="flex flex-col mb-5">
                            <label
                              className={`${
                                currentTab === "label"
                                  ? "border border-red-500 w-fit"
                                  : ""
                              } hover:border hover:border-red-500 cursor-pointer`}
                            >
                              Label
                            </label>
                            <input
                              type="text"
                              className="border rounded-sm h-10 cursor-pointer"
                            />
                          </div>
                          {/* End Input */}
                          {/* Input */}
                          <div className="flex flex-col mb-2">
                            <label
                              className={`${
                                currentTab === "label"
                                  ? "border border-red-500 w-fit"
                                  : ""
                              } hover:border hover:border-red-500 cursor-pointer`}
                            >
                              Label
                            </label>
                            <input
                              type="text"
                              className="border rounded-sm h-10 cursor-pointer"
                            />
                          </div>
                          {/* End Input */}
                          <div className="mb-2 flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <span>Check Me Out</span>
                          </div>
                          {/* Button */}
                          <button className="bg-[#007bff] p-2 rounded-md text-white">
                            Submit
                          </button>
                          {/* End Button */}
                        </div>
                        {/* End Konten */}
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
          {/* label */}
          <div
            className={`${
              currentTab === "label" ? "h-56" : "hidden"
            } overflow-y-scroll`}
          >
            {/* font */}
            <h3 className="text-lg ml-2 font-bold">Font</h3>
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "label"
                ? tabComponent.label.font.map((component, index) => (
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
          </div>
          {/* End label */}
          {/* input */}
          <div
            className={`${
              currentTab === "label" ? "h-56" : "hidden"
            } overflow-y-scroll`}
          >
            {/* font */}
            <h3 className="text-lg ml-2 font-bold">Font</h3>
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "label"
                ? tabComponent.label.font.map((component, index) => (
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
          </div>
          {/* End input */}

          {/* End Menu Bawah */}
        </div>
      </div>
    </div>
  );
};

export default Form;
