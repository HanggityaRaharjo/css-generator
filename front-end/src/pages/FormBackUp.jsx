import Navbar from "../components/Navbar";
import { useState } from "react";
import Side from "../components/Side";
import useStyleStore from "../store/CssStore";
import InputStyle from "../components/InputStyle";
import InputSelect from "../components/InputSelect";
import InputRangeSlider from "../components/InputRangeSlider";
const Form = () => {
  const [currentTab, setCurrentTab] = useState("form-card");
  const stateForm = useStyleStore((state) => state);

  const handleTab = (elementClass) => {
    let tabActive = document.querySelector(".tab-active");
    if (tabActive !== null) {
      tabActive.classList.remove("tab-active");
    }
    setCurrentTab(elementClass);
    document.querySelector(`.${elementClass}`).classList.add("tab-active");
  };

  const tabComponent = {
    formCard: [
      { name: "Background", property: "cardFormBackground" },
      { name: "Color", property: "cardFormColor" },
    ],
    inputText: [
      { name: "Background Input", property: "inputTextBackground" },
      { name: "Input Color", property: "inputTextColor" },
      { name: "Label Color", property: "inputLabelColor" },
    ],
    inputSelect: [
      { name: "Background Select", property: "selectTextBackground" },
      { name: "select Color", property: "selectTextColor" },
      { name: "Label Color", property: "selectLabelColor" },
    ],
    textArea: [
      { name: "Background", property: "textAreaBackground" },
      { name: "Text Color", property: "textAreaColor" },
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
                        <div className="border bg-white p-5 rounded-md shadow-md">
                          {/* Input */}
                          <div className="flex flex-col mb-5">
                            <label>Label</label>
                            <input
                              type="text"
                              className="border rounded-sm h-10"
                            />
                          </div>
                          {/* End Input */}
                          {/* Input */}
                          <div className="flex flex-col mb-2">
                            <label>Label</label>
                            <input
                              type="text"
                              className="border rounded-sm h-10"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* End Preview */}
            </div>
            {/* Pembatas */}
            {/* Menu Kanan */}
            <div className="w-[20%] h-fit p-2">kanan</div>
            {/* End Pembatas */}
          </div>
          <div className="flex justify-center">
            <div className="tabs translate-y-[1px]">
              <button
                className="tab tab-lifted form-card tab-active"
                onClick={() => handleTab("form-card")}
              >
                Form Card
              </button>
              <button
                className="tab tab-lifted input-text"
                onClick={() => handleTab("input-text")}
              >
                Input Text
              </button>
              <button
                className="tab tab-lifted input-select"
                onClick={() => handleTab("input-select")}
              >
                Input Select
              </button>
              <button
                className="tab tab-lifted text-area"
                onClick={() => handleTab("text-area")}
              >
                Text Area
              </button>
            </div>
          </div>
          {/* Menu Bawah */}
          <div className="grid grid-cols-6 gap-1 text-sm border-4 h-40 p-2 overflow-y-scroll">
            {/* Form Card */}
            {currentTab == "form-card"
              ? tabComponent.formCard.map((components, index) => (
                  <InputStyle
                    key={index}
                    name={components.name}
                    property={components.property}
                  />
                ))
              : null}
            {/* End Form Card */}
            {/* Input Text */}
            {currentTab == "input-text"
              ? tabComponent.inputText.map((components, index) => (
                  <InputStyle
                    key={index}
                    name={components.name}
                    property={components.property}
                  />
                ))
              : null}
            {/* End Input Text */}
            {/* Input Text */}
            {currentTab == "input-select"
              ? tabComponent.inputSelect.map((components, index) => (
                  <InputStyle
                    key={index}
                    name={components.name}
                    property={components.property}
                  />
                ))
              : null}
            {/* End Input Text */}
            {/* Input Text */}
            {currentTab == "text-area"
              ? tabComponent.textArea.map((components, index) => (
                  <InputStyle
                    key={index}
                    name={components.name}
                    property={components.property}
                  />
                ))
              : null}
            {/* End Input Text */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
