import { useState } from "react";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import useStyleStore from "../store/CssStore";
import InputStyle from "../components/InputStyle";

const Modal = () => {
  const stateModal = useStyleStore((state) => state);

  const [currentTab, setCurrentTab] = useState("modal-header");

  const handleTab = (elementClass) => {
    setCurrentTab(elementClass);
  };

  const tabComponent = {
    modalHeader: [
      {
        name: "Background Color",
        property: "modalHeaderBackgroundColor",
        defaultValue: "#ffffff",
        type: "color",
        placeholder: "none",
      },
    ],
    modalBody: [
      {
        name: "Background Color",
        property: "modalBodyBackgroundColor",
        defaultValue: "#ffffff",
        type: "color",
        placeholder: "none",
      },
    ],
    modalFooter: [
      {
        name: "Background Color",
        property: "modalFooterBackgroundColor",
        defaultValue: "#ffffff",
        type: "color",
        placeholder: "none",
      },
    ],
  };
  return (
    <div className=" min-h-screen">
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
                        <div className="bg-black bg-opacity-30 backdrop-blur-sm absolute left-0 top-0 h-full w-full flex justify-center items-center">
                          <div className="w-96 h-48 overflow-hidden rounded-md bg-white  flex flex-col justify-between">
                            {/* Modal Header */}
                            <div
                              className="border-b h-[30%] flex justify-between p-3 cursor-pointer hover:border hover:border-red-500"
                              style={{
                                background:
                                  stateModal.modalHeaderBackgroundColor,
                              }}
                              onClick={() => handleTab("modal-header")}
                            >
                              <p className="text-lg font-semibold">
                                Modal Title
                              </p>
                              <button className="text-lg text-gray-500 font-semibold">
                                x
                              </button>
                            </div>
                            {/* END Modal Header */}
                            {/* Modal Body */}
                            <div
                              className="h-[40%] p-2 hover:border hover:border-red-500 cursor-pointer"
                              style={{
                                background: stateModal.modalBodyBackgroundColor,
                              }}
                              onClick={() => handleTab("modal-body")}
                            >
                              <span>. . .</span>
                            </div>
                            {/* End Modal Body */}
                            {/* Modal Footer */}
                            <div
                              className="border-t h-[30%] flex justify-end items-center gap-2 px-2 hover:border hover:border-red-500 cursor-pointer"
                              style={{
                                background:
                                  stateModal.modalFooterBackgroundColor,
                              }}
                              onClick={() => handleTab("modal-footer")}
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

          <div className="grid grid-cols-6 gap-1 text-sm border-4 h-40 p-2 overflow-y-scroll">
            {currentTab == "modal-header"
              ? tabComponent.modalHeader.map((components, index) => (
                  <InputStyle
                    key={index}
                    name={components.name}
                    property={components.property}
                    defaultValue={components.defaultValue}
                    type={components.type}
                    placeholder={components.placeholder}
                  />
                ))
              : null}
            {currentTab == "modal-body"
              ? tabComponent.modalBody.map((components, index) => (
                  <InputStyle
                    key={index}
                    name={components.name}
                    property={components.property}
                    defaultValue={components.defaultValue}
                    type={components.type}
                    placeholder={components.placeholder}
                  />
                ))
              : null}
            {currentTab == "modal-footer"
              ? tabComponent.modalFooter.map((components, index) => (
                  <InputStyle
                    key={index}
                    name={components.name}
                    property={components.property}
                    defaultValue={components.defaultValue}
                    type={components.type}
                    placeholder={components.placeholder}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
