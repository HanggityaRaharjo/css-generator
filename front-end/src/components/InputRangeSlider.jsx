import useStyleStore from "../store/CssStore";

const InputRangeSlider = (props) => {
  const changeStyle = useStyleStore((state) => state.changeStyle);
  const handleSidebarValue = (value, componenStore) => {
    changeStyle({
      property: componenStore,
      value: value,
    });
  };
  return (
    <div className="form-control flex justify-center items-center gap-1">
      <label className="bg-gray-300  px-2 rounded-md">{props.name}</label>
      <input
        type="range"
        className="w-full"
        defaultValue="0"
        onChange={(e) =>
          handleSidebarValue(`${e.target.value}${props.unit}`, props.property)
        }
      />
    </div>
  );
};

export default InputRangeSlider;
