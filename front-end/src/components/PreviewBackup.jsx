{
  /* Windows Preview */
}
<div className="mockup-window border border-base-300 rounded-t-none">
  <div className="border-t border-base-300">
    <div className="h-[550px]  rounded-md">
      <div className="flex gap-2 h-full">
        {/* Sidebar */}
        <div
          id="sidebar-view"
          className={`w-[15%] bg-gradient-to-tr from-base-300 via-base-200 to-base-300 p-2 text-black text-xs h-full ${
            currentTab == "sidebar" ? "border border-primary" : ""
          }`}
          style={{
            background: stateSidebar.sidebarBackground,
            color: stateSidebar.sidebarTextColor,
            borderRadius: stateSidebar.sidebarBorderRadius,
            borderColor: stateSidebar.sidebarBorderColor,
            borderWidth: stateSidebar.sidebarBorderWidth,
            borderStyle: stateSidebar.sidebarBorderStyle,
          }}
        >
          <div className=" rounded-md h-5 mb-1 px-2 mt-3">Lorem</div>
          <div className=" rounded-md h-5 mb-1 px-2">Lorem</div>
          <div className=" rounded-md h-5 mb-1 px-2">Lorem</div>
          <div
            className={`bg-[#adadad] rounded-md h-5 mb-1 px-2 ${
              currentTab == "link-bg-active" ? "border border-primary" : ""
            }`}
            style={{
              background: stateLink.sidebarLinkBackgroundActive,
              color: stateLink.sidebarLinkTextColor,
              borderRadius: stateLink.sidebarLinkBorderRadius,
              borderWidth: stateLink.sidebarLinkBorderWidth,
              borderColor: stateLink.sidebarLinkBorderColor,
              borderStyle: stateLink.sidebarLinkBorderStyle,
            }}
          >
            Lorem
          </div>
        </div>
        <div className="w-[85%] flex flex-col text-sm pr-2 pt-2">
          {/* Navigation */}
          <div
            className={`flex justify-between mb-2 ${
              currentTab == "navigation" ? "border border-primary" : ""
            }`}
            style={{
              background: stateNav.navbarBackground,
              color: stateNav.navbarTextColor,
              borderRadius: stateNav.navbarBorderRadius,
              borderColor: stateNav.navbarBorderColor,
              borderWidth: stateNav.navbarBorderWidth,
              borderStyle: stateNav.navbarBorderStyle,
            }}
          >
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
            className={`bg-gradient-to-tr from-base-300 via-base-200 to-base-300 rounded-md w-32 h-12 mb-2  text-black flex justify-between ${
              currentTab == "cubexbreadcrumbs" ? "border border-primary" : ""
            }`}
            style={{
              background: stateBreadcrumbs.breadcrumbBackground,
              borderColor: stateBreadcrumbs.breadcrumbBorderColor,
              borderRadius: stateBreadcrumbs.breadcrumbBorderRadius,
              borderWidth: stateBreadcrumbs.breadcrumbBorderWidth,
              borderStyle: stateBreadcrumbs.breadcrumbBorderStyle,
            }}
          >
            <div className="w-1/2 flex justify-center items-center">
              <div className="h-5 w-5 bg-white rounded-full"></div>
            </div>
            <div
              className="w-11/12"
              style={{
                color: stateBreadcrumbs.breadcrumbTextColor,
              }}
            >
              <p>Lorem</p>
              <p className="text-xs">
                Lorem <span>/</span>{" "}
                <span
                  style={{
                    color: stateBreadcrumbs.breadcrumbTextActive,
                  }}
                >
                  Lorem
                </span>
              </p>
            </div>
          </div>

          {/* Cubex Card */}
          <div className="grid grid-cols-2 gap-2 text-black">
            {/* Cubex Card */}
            <div
              className={`h-44 rounded-md flex justify-between gap-5 items-center px-10 bg-gradient-to-tr from-base-300 via-base-200 to-base-300 ${
                currentTab == "cubex-card" ? "border border-primary" : ""
              }`}
              style={{
                background: stateCard.cardBackground,
                color: stateCard.cardTextColorPrimary,
                borderRadius: stateCard.cardBorderRadius,
                borderWidth: stateCard.cardBorderWidth,
                borderStyle: stateCard.cardBorderStyle,
                borderColor: stateCard.cardBorderColor,
              }}
            >
              <div className="w-4/12">
                <div className="w-16 h-16 bg-white rounded-full"></div>
              </div>
              <div className="w-8/12">
                <p className="text-lg">lorem</p>
                <p>lorem</p>
                <p>lorem</p>
              </div>
            </div>
            {/* End Cubex Card */}
            {/* Cubex Card */}
            <div
              className={`h-44 rounded-md flex justify-between gap-5 items-center px-10 bg-gradient-to-tr from-base-300 via-base-200 to-base-300 ${
                currentTab == "cubex-card" ? "border border-primary" : ""
              }`}
              style={{
                background: stateCard.cardBackground,
                color: stateCard.cardTextColorPrimary,
                borderRadius: stateCard.cardBorderRadius,
                borderWidth: stateCard.cardBorderWidth,
                borderStyle: stateCard.cardBorderStyle,
                borderColor: stateCard.cardBorderColor,
              }}
            >
              <div className="w-4/12">
                <div className="w-16 h-16 bg-white rounded-full"></div>
              </div>
              <div className="w-8/12">
                <p className="text-lg">lorem</p>
                <p>lorem</p>
                <p>lorem</p>
              </div>
            </div>
            {/* End Cubex Card */}
            {/* Cubex Card */}
            <div
              className={`h-44 rounded-md flex justify-between gap-5 items-center px-10 bg-gradient-to-tr from-base-300 via-base-200 to-base-300 ${
                currentTab == "cubex-card" ? "border border-primary" : ""
              }`}
              style={{
                background: stateCard.cardBackground,
                color: stateCard.cardTextColorPrimary,
                borderRadius: stateCard.cardBorderRadius,
                borderWidth: stateCard.cardBorderWidth,
                borderStyle: stateCard.cardBorderStyle,
                borderColor: stateCard.cardBorderColor,
              }}
            >
              <div className="w-4/12">
                <div className="w-16 h-16 bg-white rounded-full"></div>
              </div>
              <div className="w-8/12">
                <p className="text-lg">lorem</p>
                <p>lorem</p>
                <p>lorem</p>
              </div>
            </div>
            {/* End Cubex Card */}
            {/* Cubex Card */}
            <div
              className={`h-44 rounded-md flex justify-between gap-5 items-center px-10 bg-gradient-to-tr from-base-300 via-base-200 to-base-300 ${
                currentTab == "cubex-card" ? "border border-primary" : ""
              }`}
              style={{
                background: stateCard.cardBackground,
                color: stateCard.cardTextColorPrimary,
                borderRadius: stateCard.cardBorderRadius,
                borderWidth: stateCard.cardBorderWidth,
                borderStyle: stateCard.cardBorderStyle,
                borderColor: stateCard.cardBorderColor,
              }}
            >
              <div className="w-4/12">
                <div className="w-16 h-16 bg-white rounded-full"></div>
              </div>
              <div className="w-8/12">
                <p className="text-lg">lorem</p>
                <p>lorem</p>
                <p>lorem</p>
              </div>
            </div>
            {/* End Cubex Card */}
          </div>
          {/* End Cubex Card */}
        </div>
      </div>
    </div>
  </div>
</div>;

{
  /* End Preview */
}
{
  /* <input
            id="field-background"
            type={props.type}
            defaultValue={props.defaultValue}
            className="input input-bordered w-full"
            onChange={(e) => handleSidebarValue(e.target.value, props.property)}
          /> */
}
