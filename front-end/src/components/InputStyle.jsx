import useStyleStore from "../store/CssStore";
import React, { useEffect, useState } from "react";

const InputStyle = (props) => {
  const changeStyle = useStyleStore((state) => state.changeStyle);
  const handleSidebarValue = (value, componenStore) => {
    changeStyle({
      property: componenStore,
      value: value,
    });
  };

  return (
    <>
      <div className="form-control transition-all duration-300 ">
        <label className="input-group h-12 rounded-md">
          <span className="bg-gray-300  w-32  border dark:border-slate-700 dark:bg-slate-700 dark:text-slate-200">
            {props.name}
          </span>
          {props.type == "color" ? (
            <input
              id="field-background"
              type={props.type}
              defaultValue={props.defaultValue}
              className="w-[300px] px-4 h-full dark:bg-[#1F2324] bg-white dark:text-white  border dark:border-slate-700"
              placeholder={props.placeholder}
              onChange={(e) =>
                handleSidebarValue(e.target.value, props.property)
              }
            />
          ) : null}
          {props.type == "text" || props.type == "number" ? (
            <input
              id="field-background"
              type={props.type}
              defaultValue={props.defaultValue}
              className="w-[300px] px-4 h-12 dark:bg-[#1F2324] dark:text-white  border dark:border-slate-700"
              placeholder={props.placeholder}
              onChange={(e) =>
                handleSidebarValue(e.target.value, props.property)
              }
            />
          ) : null}
        </label>
      </div>
    </>
  );
};
export default InputStyle;
