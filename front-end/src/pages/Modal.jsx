import { useState } from "react";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import useStyleStore from "../store/CssStore";
import InputStyle from "../components/InputStyle";
import InputFile from "../components/InputFile";

const Modal = () => {
  const stateModal = useStyleStore((state) => state);

  const [currentTab, setCurrentTab] = useState("modalHeader");

  const handleTab = (elementClass) => {
    setCurrentTab(elementClass);
  };

  const tabComponent = {
    modalHeader: {
      dimension: [
        {
          name: "Height",
          property: "modalHeaderHeight",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "modalHeaderBorderWidth",
          defaultValue: "0px",
          type: "number",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "modalHeaderBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "modalHeaderShadow",
          defaultValue: "",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "modalHeaderColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "modalHeaderFontFamily",
          defaultValue: "0px",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "modalHeaderFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "modalHeaderBackgroundColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "modalHeaderBackgroundGradient",
          defaultValue: "",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "modalHeaderFilterBlur",
          defaultValue: "",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "modalHeaderBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
    modalContent: {
      dimension: [
        {
          name: "Height",
          property: "modalContentHeight",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "modalContentBorderWidth",
          defaultValue: "0px",
          type: "number",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "modalContentBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "modalContentShadow",
          defaultValue: "",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "modalContentColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "modalContentFontFamily",
          defaultValue: "0px",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "modalContentFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "modalContentBackgroundColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "modalContentBackgroundGradient",
          defaultValue: "",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "modalContentFilterBlur",
          defaultValue: "",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "modalContentBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
    modalFooter: {
      dimension: [
        {
          name: "Height",
          property: "modalFooterHeight",
          defaultValue: "",
          type: "text",
          placeholder: "0rem",
        },
      ],
      border: [
        {
          name: "Border Width",
          property: "modalFooterBorderWidth",
          defaultValue: "0px",
          type: "number",
          placeholder: "0px",
        },
        {
          name: "Border Color",
          property: "modalFooterBorderColor",
          defaultValue: "",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Shadow",
          property: "modalFooterShadow",
          defaultValue: "",
          type: "text",
          placeholder: "0px 20px 50px grey",
        },
      ],
      font: [
        {
          name: "Color",
          property: "modalFooterColor",
          defaultValue: "0px",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Font Family",
          property: "modalFooterFontFamily",
          defaultValue: "0px",
          type: "text",
          placeholder: "Arial,mono-thin,reguler",
        },
        {
          name: "Font Size",
          property: "modalFooterFontSize",
          defaultValue: "0px",
          type: "text",
          placeholder: "0px",
        },
      ],
      background: [
        {
          name: "Background Color",
          property: "modalFooterBackgroundColor",
          defaultValue: "#d3d3d3",
          type: "color",
          placeholder: "none",
        },
        {
          name: "Background Gradient",
          property: "modalFooterBackgroundGradient",
          defaultValue: "",
          type: "text",
          placeholder: "linear-gradient(red, yellow)",
        },
        {
          name: "Filter Blur",
          property: "modalFooterFilterBlur",
          defaultValue: "",
          type: "text",
          placeholder: "0px",
        },
      ],
      upload: [
        {
          name: "Background Image",
          property: "modalFooterBackgroundImage",
          defaultValue: "Test",
          type: "text",
          placeholder: "URL/Link",
        },
      ],
    },
  };
  return (
    <div className=" min-h-screen bg-white dark:bg-[#0f172a] dark:text-slate-200">
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
              <div className="mockup-window border bg-[#f8fafc] border-base-300 rounded-t-none">
                <div className="border-t border-base-300">
                  <div className="h-[550px] rounded-md">
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
                        <div className="bg-black bg-opacity-30 backdrop-blur-sm absolute left-0 top-0 h-full w-full flex justify-center items-center">
                          <div className="w-96 h-48 overflow-hidden rounded-md bg-white  flex flex-col justify-between">
                            {/* Modal Header */}
                            <div
                              className={`${
                                currentTab === "modalHeader"
                                  ? "border border-red-500"
                                  : ""
                              } order-b h-[30%] flex justify-between p-3 cursor-pointer hover:border hover:border-red-500`}
                              style={{
                                background:
                                  stateModal.modalHeaderBackgroundColor,
                              }}
                              onClick={() => handleTab("modalHeader")}
                            >
                              <p className="text-lg font-semibold">
                                Modal Title
                              </p>
                              <button className="text-lg text-gray-500 font-semibold">
                                x
                              </button>
                            </div>
                            {/* END Modal Header */}
                            {/* Modal Content */}
                            <div
                              className={`${
                                currentTab === "modalContent"
                                  ? "border border-red-500"
                                  : ""
                              } h-[40%] p-2 hover:border hover:border-red-500 cursor-pointer`}
                              style={{
                                background:
                                  stateModal.modalContentBackgroundColor,
                              }}
                              onClick={() => handleTab("modalContent")}
                            >
                              <span>. . .</span>
                            </div>
                            {/* End Modal Body */}
                            {/* Modal Footer */}
                            <div
                              className={`${
                                currentTab === "modalFooter"
                                  ? "border border-red-500"
                                  : ""
                              } border-t h-[30%] flex justify-end items-center gap-2 px-2 hover:border hover:border-red-500 cursor-pointer`}
                              style={{
                                background:
                                  stateModal.modalFooterBackgroundColor,
                              }}
                              onClick={() => handleTab("modalFooter")}
                            >
                              <button className="btn btn-sm btn-secondary">
                                Cancel
                              </button>
                              <button
                                className="btn btn-sm btn-primary"
                                style={{
                                  background: stateModal.btnPrimaryBackground,
                                }}
                              >
                                Save Changes
                              </button>
                            </div>
                            {/* End Modal Footer */}
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
            <div className="w-[20%] h-fit p-2">kanan</div>
            {/* End Pembatas */}
          </div>
          {/* Menu Bawah */}
          {/* modalHeader */}
          <div
            className={`${
              currentTab === "modalHeader" ? "h-56" : "hidden"
            } overflow-y-scroll`}
          >
            {/* Dimension */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "modalHeader"
                ? tabComponent.modalHeader.dimension.map((component, index) => (
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
              {currentTab === "modalHeader"
                ? tabComponent.modalHeader.border.map((component, index) => (
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
              {currentTab === "modalHeader"
                ? tabComponent.modalHeader.font.map((component, index) => (
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
              {currentTab === "modalHeader"
                ? tabComponent.modalHeader.background.map(
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
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "modalHeader"
                ? tabComponent.modalHeader.upload.map((component, index) => (
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
          {/* End modalHeader */}
          {/* modalContent */}
          <div
            className={`${
              currentTab === "modalContent" ? "h-56" : "hidden"
            } overflow-y-scroll`}
          >
            {/* Dimension */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "modalContent"
                ? tabComponent.modalContent.dimension.map(
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
            {/* End Dimension */}
            {/* border */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "modalContent"
                ? tabComponent.modalContent.border.map((component, index) => (
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
              {currentTab === "modalContent"
                ? tabComponent.modalContent.font.map((component, index) => (
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
              {currentTab === "modalContent"
                ? tabComponent.modalContent.background.map(
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
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "modalContent"
                ? tabComponent.modalContent.upload.map((component, index) => (
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
          {/* End modalContent */}
          {/* modalFooter */}
          <div
            className={`${
              currentTab === "modalFooter" ? "h-56" : "hidden"
            } overflow-y-scroll`}
          >
            {/* Dimension */}
            <div className="grid grid-cols-3 gap-1 text-sm p-2">
              {currentTab === "modalFooter"
                ? tabComponent.modalFooter.dimension.map((component, index) => (
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
              {currentTab === "modalFooter"
                ? tabComponent.modalFooter.border.map((component, index) => (
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
              {currentTab === "modalFooter"
                ? tabComponent.modalFooter.font.map((component, index) => (
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
              {currentTab === "modalFooter"
                ? tabComponent.modalFooter.background.map(
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
              {currentTab === "modalFooter"
                ? tabComponent.modalFooter.upload.map((component, index) => (
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
          {/* End modalFooter */}
          {/* End Menu Bawah */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
