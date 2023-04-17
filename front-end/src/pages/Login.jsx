import Navbar from "../components/Navbar";
import Side from "../components/Side";
import useStyleStore from "../store/CssStore";
import InputStyle from "../components/InputStyle";
import InputSelect from "../components/InputSelect";
import InputRangeSlider from "../components/InputRangeSlider";
import { useState } from "react";

const Login = () => {
  const [currentTab, setCurrentTab] = useState("popup-success");

  const stateLogin = useStyleStore((state) => state);

  const handleTab = (elementClass) => {
    let tabActive = document.querySelector(".tab-active");
    if (tabActive !== null) {
      tabActive.classList.remove("tab-active");
    }
    setCurrentTab(elementClass);
    document.querySelector(`.${elementClass}`).classList.add("tab-active");
  };

  const tabComponent = {
    login: [
      { name: "Background Card", property: "cardLoginBackground" },
      { name: "Text Color", property: "cardLoginTextColor" },
      { name: "Heading Color", property: "cardLoginHeading" },
      { name: "Label Color", property: "loginLabelColor" },
      { name: "Background Input", property: "loginInputBackground" },
      { name: "Color Input", property: "loginInputTextColor" },
      { name: "Button Background", property: "loginButtonBackground" },
      { name: "Button Text", property: "loginButtonTextColor" },
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
                    <div className="flex justify-center items-center gap-2 h-full">
                      <div
                        className="bg-gray-200 py-[20px] px-[45px] rounded-md scale-90"
                        style={{
                          background: stateLogin.cardLoginBackground,
                          color: stateLogin.cardLoginTextColor,
                        }}
                      >
                        <p className="w-56 text-center mb-[15px]">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia cum, temporib
                        </p>
                        <h5
                          className="text-center mb-[15px] font-[600] text-[24px]"
                          style={{ color: stateLogin.cardLoginHeading }}
                        >
                          Login
                        </h5>
                        <div className="flex flex-col">
                          <label
                            className="mb-[9px]"
                            style={{ color: stateLogin.loginLabelColor }}
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            className="mb-2 w-full h-10 rounded-md px-2"
                            placeholder="Username"
                            style={{
                              background: stateLogin.loginInputBackground,
                              color: stateLogin.loginInputTextColor,
                            }}
                          />
                        </div>
                        <div className="flex flex-col mb-[15px]">
                          <label
                            className="mb-[9px]"
                            style={{ color: stateLogin.loginLabelColor }}
                          >
                            Password
                          </label>
                          <input
                            type="text"
                            className="mb-2 w-full h-10 rounded-md px-2"
                            placeholder="Password"
                            style={{
                              background: stateLogin.loginInputBackground,
                              color: stateLogin.loginInputTextColor,
                            }}
                          />
                        </div>
                        <button
                          className="btn w-full"
                          style={{
                            background: stateLogin.loginButtonBackground,
                            borderColor: stateLogin.loginButtonBackground,
                            color: stateLogin.loginButtonTextColor,
                          }}
                        >
                          Login
                        </button>
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
          {/* Tabs */}
          <div className="flex justify-center">
            <div className="tabs translate-y-[1px]">
              <button
                className="tab tab-lifted card-login tab-active"
                onClick={() => handleTab("card-login")}
              >
                Login Card
              </button>
            </div>
          </div>
          {/* End Tabs */}
          {/* Menu Bawah */}
          <div className="grid grid-cols-6 gap-1 text-sm border-4 h-40 p-2 overflow-y-scroll">
            {tabComponent.login.map((components, index) => (
              <InputStyle
                key={index}
                name={components.name}
                property={components.property}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
