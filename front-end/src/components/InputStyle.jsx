import useStyleStore from "../store/CssStore";
import InputColor from "react-input-color";
import React, { useEffect, useState } from "react";
const InputStyle = (props) => {
  const changeStyle = useStyleStore((state) => state.changeStyle);
  const handleSidebarValue = (value, componenStore) => {
    changeStyle({
      property: componenStore,
      value: value,
    });
  };
  const [color, setColor] = React.useState({});
  useEffect(() => {
    changeStyle({
      property: props.property,
      value: color.rgba,
    });
  }, [color]);
  console.log(color);
  return (
    <>
      <div className="form-control transition-all duration-300">
        <label className="input-group h-12">
          <span className="bg-gray-300 w-32">{props.name}</span>
          {props.type == "color" ? (
            <input
              id="field-background"
              type={props.type}
              defaultValue={props.defaultValue}
              className="w-[300px] border px-4 h-12"
              placeholder={props.placeholder}
              onChange={(e) =>
                handleSidebarValue(e.target.value, props.property)
              }
            />
          ) : (
            <input
              id="field-background"
              type={props.type}
              defaultValue={props.defaultValue}
              className="w-[300px] border px-4 h-12"
              placeholder={props.placeholder}
              onChange={(e) =>
                handleSidebarValue(e.target.value, props.property)
              }
            />
          )}
        </label>
      </div>
    </>
  );
};
export default InputStyle;
