import React from "react";
import useStyleStore from "../store/CssStore";
import axios from "axios";
import useThemeStore from "../store/themeStore";

const Navbar = () => {
  const stateComponents = useStyleStore((state) => state);
  const stateTheme = useThemeStore((state) => state);
  const handleThemeSwitch = () => {
    stateTheme.changeTheme(
      stateTheme.currentTheme === "light" ? "dark" : "light"
    );
    if (stateTheme.currentTheme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  const handleSaveButton = () => {
    const components = {
      input: {
        inputLabelColor: stateComponents.inputLabelColor,
        inputTextBackground: stateComponents.inputTextBackground,
        inputTextColor: stateComponents.inputTextColor,
      },
      login: {
        loginButtonBackground: stateComponents.loginButtonBackground,
        loginButtonTextColor: stateComponents.loginButtonTextColor,
        loginInputBackground: stateComponents.loginInputBackground,
        loginInputTextColor: stateComponents.loginInputTextColor,
        loginLabelColor: stateComponents.loginLabelColor,
      },
      monitor: {
        monitorBorderBackground: stateComponents.monitorBorderBackground,
      },
      navbar: {
        navbarBackground: stateComponents.navbarBackground,
        navbarBorderColor: stateComponents.navbarBorderColor,
        navbarBorderRadius: stateComponents.navbarBorderRadius,
        navbarBorderStyle: stateComponents.navbarBorderStyle,
        navbarBorderWidth: stateComponents.navbarBorderWidth,
        navbarTextColor: stateComponents.navbarTextColor,
        navbarTextHover: stateComponents.navbarTextHover,
      },
      popup: {
        popUpBtnBackground: stateComponents.popUpBtnBackground,
        popUpBtnTextColor: stateComponents.popUpBtnTextColor,
        popUpCardBackground: stateComponents.popUpCardBackground,
        popUpFailedBackground: stateComponents.popUpFailedBackground,
        popUpFailedColor: stateComponents.popUpFailedColor,
        popUpSuccessBackground: stateComponents.popUpSuccessBackground,
        popUpSuccessColor: stateComponents.popUpSuccessColor,
        popUpTextColor: stateComponents.popUpTextColor,
      },
      select: {
        selectLabelColor: stateComponents.selectLabelColor,
        selectTextBackground: stateComponents.selectTextBackground,
        selectTextColor: stateComponents.selectTextColor,
      },
      sidebar: {
        BackgroundColor: stateComponents.sidebarBackgroundColor,
        sidebarBorderColor: stateComponents.sidebarBorderColor,
        sidebarBorderRadius: stateComponents.sidebarBorderRadius,
        sidebarBorderStyle: stateComponents.sidebarBorderStyle,
        sidebarBorderWidth: stateComponents.sidebarBorderWidth,
        sidebarLinkBackgroundActive:
          stateComponents.sidebarLinkBackgroundActive,
        sidebarLinkBorderColor: stateComponents.sidebarLinkBorderColor,
        sidebarLinkBorderRadius: stateComponents.sidebarLinkBorderRadius,
        sidebarLinkBorderStyle: stateComponents.sidebarLinkBorderStyle,
        sidebarLinkBorderWidth: stateComponents.sidebarLinkBorderWidth,
        sidebarLinkTextColor: stateComponents.sidebarLinkTextColor,
        Color: stateComponents.sidebarColor,
      },

      header: {
        BackgroundColor: stateComponents.headerBackgroundColor,
        BackgroundGradient: stateComponents.headerBackgroundGradient,
        BorderWidth: stateComponents.headerBorderWidth,
        BorderColor: stateComponents.headerBorderColor,
        Shadow: stateComponents.headerShadow,
        Color: stateComponents.headerColor,
        Height: stateComponents.headerHeight,
      },
      content: {
        BackgroundColor: stateComponents.contentBackgroundColor,
        BackgroundGradient: stateComponents.contentBackgroundGradient,
        BackgroundImage: stateComponents.contentBackgroundImage,
        Color: stateComponents.contentColor,
      },
      button: {
        Primary: {
          BackgroundColor: stateComponents.btnPrimaryBackground,
        },
        Secondary: {
          BackgroundColor: stateComponents.btnSecondaryBackground,
        },
        Success: {
          BackgroundColor: stateComponents.btnSuccessBackground,
        },
        Error: {
          BackgroundColor: stateComponents.btnErrorBackground,
        },
        Warning: {
          BackgroundColor: stateComponents.btnWarningBackground,
        },
        Info: {
          BackgroundColor: stateComponents.btnInfoBackground,
        },
      },
      modal: {
        modalHeader: {
          BackgroundColor: stateComponents.modalHeaderBackgroundColor,
        },
        modalBody: {
          BackgroundColor: stateComponents.modalBodyBackgroundColor,
        },
        modalFooter: {
          BackgroundColor: stateComponents.modalFooterBackgroundColor,
        },
      },
      card: {
        cardHeader: {
          BackgroundColor: stateComponents.cardHeaderBackgroundColor,
        },
        cardBody: {
          BackgroundColor: stateComponents.cardContentBackgroundColor,
        },
        cardFooter: {
          BackgroundColor: stateComponents.cardFooterBackgroundColor,
        },
      },
      table: {
        pageButton: {
          BackgroundColor: stateComponents.tableBackgroundButton,
          BackgroundHover: stateComponents.tableBackgroundButtonHover,
        },
      },
      themeColor: {
        colorPrimary: stateComponents.colorPrimary,
        colorSecondary: stateComponents.colorSecondary,
        colorSuccess: stateComponents.colorSuccess,
        colorWarning: stateComponents.colorWarning,
        colorInfo: stateComponents.colorInfo,
        colorDanger: stateComponents.colorDanger,
      },
      breadcrumbs: {
        backgroundColor: stateComponents.breadcrumbsBackgroundColor,
        breadcrumbsItem: {
          color: stateComponents.breadcrumbsItemColor,
          dividerColor: stateComponents.breadcrumbsItemDividerColor,
          itemSpace: stateComponents.breadcrumbsItemPaddingLeft,
        },
        breadcrumbsItemActive: {
          color: stateComponents.breadcrumbsItemActiveColor,
        },
      },
    };

    axios
      .post("http://localhost:8000/api/tes", {
        components: components,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(components);
  };

  return (
    <div className="navbar bg-white border-b border-gray-200 dark:border-b dark:border-slate-800 dark:bg-[#0f172a] fixed z-[50]">
      <div className="flex-1">
        <a className=" normal-case text-xl dark:text-white font-bold">
          <p className="text-[#35b1e9] px-5 dark:bg-[#162a43] dark:hover:bg-[#173953] bg-[#ebf8fe] hover:bg-[#d7f2fe] rounded-full transition duration-300 p-2">
            CSS GENERATOR
          </p>
        </a>
        <div className="ml-32 w-96 text-lg h-10 overflow-hidden bg-[#ebf8fe] text-[#35b1e9] font-bold p-2 rounded-full  flex justify-center items-center hover:bg-[#d7f2fe] cursor-pointer dark:bg-[#162a43] dark:hover:bg-[#173953] transition duration-300">
          <p>CODE-11-2222-421-234</p>
        </div>
      </div>
      <div className="flex gap-5">
        {/* Toggle Dark Mode */}
        <div className="flex gap-1 items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-yellow-300 dark:text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>
          <input
            id="toggleTheme"
            type="checkbox"
            className="toggle bg-transparent"
            checked={stateTheme.currentTheme === "dark" ? true : false}
            onChange={handleThemeSwitch}
          />
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </div>
        </div>
        {/* End Toggle Dark Mode */}
        <button className="btn btn-primary text-white bg-[#35b3ed] dark:border-primary dark:text-primary flex gap-1 dark:bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Preview All
        </button>
        <button
          className="btn btn-primary text-white bg-[#35b3ed] dark:border-primary dark:text-primary flex gap-1 dark:bg-transparent"
          onClick={handleSaveButton}
        >
          <svg
            fill="currentColor"
            className="w-5 h-5"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 14v-4H5v4H3V8h10v6h-2 3V2H4v4h8V2h-2v2H6V2H2v12h3zM0 0h16v16H0V0z"
              fillRule="evenodd"
            />
          </svg>
          Save
        </button>
        <button className="btn btn-primary text-white bg-[#35b3ed] dark:border-primary dark:text-primary flex gap-1 dark:bg-transparent">
          <svg
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 512 512"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M64,256H34A222,222,0,0,1,430,118.15V85h30V190H355V160h67.27A192.21,192.21,0,0,0,256,64C150.13,64,64,150.13,64,256Zm384,0c0,105.87-86.13,192-192,192A192.21,192.21,0,0,1,89.73,352H157V322H52V427H82V393.85A222,222,0,0,0,478,256Z" />
          </svg>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Navbar;
