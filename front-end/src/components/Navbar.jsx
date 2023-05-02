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
      breadcrumbs: {
        breadcrumbBackground: stateComponents.breadcrumbBackground,
        breadcrumbBorderColor: stateComponents.breadcrumbBorderColor,
        breadcrumbBorderRadius: stateComponents.breadcrumbBorderRadius,
        breadcrumbBorderStyle: stateComponents.breadcrumbBorderStyle,
        breadcrumbBorderWidth: stateComponents.breadcrumbBorderWidth,
        breadcrumbTextActive: stateComponents.breadcrumbTextActive,
        breadcrumbTextColor: stateComponents.breadcrumbTextColor,
        breadcrumbTextTitle: stateComponents.breadcrumbTextTitle,
      },
      card: {
        cardBackground: stateComponents.cardBackground,
        cardBackgroundProgress: stateComponents.cardBackgroundProgress,
        cardBorderColor: stateComponents.cardBorderColor,
        cardBorderRadius: stateComponents.cardBorderRadius,
        cardBorderStyle: stateComponents.cardBorderStyle,
        cardBorderWidth: stateComponents.cardBorderWidth,
        cardContentBackground: stateComponents.cardContentBackground,
        cardContentBorderColor: stateComponents.cardContentBorderColor,
        cardContentBorderRadius: stateComponents.cardContentBorderRadius,
        cardContentBorderStyle: stateComponents.cardContentBorderStyle,
        cardContentBorderWidth: stateComponents.cardContentBorderWidth,
        cardContentColor: stateComponents.cardContentColor,
        cardFormBackground: stateComponents.cardFormBackground,
        cardFormColor: stateComponents.cardFormColor,
        cardGaugeBackground: stateComponents.cardGaugeBackground,
        cardGaugeValueColor: stateComponents.cardGaugeValueColor,
        cardLoginBackground: stateComponents.cardLoginBackground,
        cardLoginHeading: stateComponents.cardLoginHeading,
        cardLoginTextColor: stateComponents.cardLoginTextColor,
        cardMonitorBackground: stateComponents.cardMonitorBackground,
        cardMonitorColor: stateComponents.cardMonitorColor,
        cardTextColorPrimary: stateComponents.cardTextColorPrimary,
      },
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
    <div className="navbar bg-base-200 dark:bg-gradient-to-r dark:from-[#905923] dark:to-[#533314] fixed">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl dark:text-white">
          Dashboard CSS Generator
        </a>
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
              className="w-6 h-6 text-yellow-300 dark:text-white"
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
              className="w-5 h-5 dark:text-white text-primary"
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
        <button className="btn btn-primary" onClick={handleSaveButton}>
          Save
        </button>
        <button className="btn btn-primary">Reset</button>
      </div>
    </div>
  );
};

export default Navbar;
