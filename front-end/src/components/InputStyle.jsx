import useStyleStore from "../store/CssStore";
const InputStyle = (props) => {
  const changeStyle = useStyleStore((state) => state.changeStyle);
  const handleSidebarValue = (value, componenStore) => {
    changeStyle({
      property: componenStore,
      value: value,
    });
  };
  return (
    <div className="form-control transition-all duration-300">
      <label className="input-group">
        <span className="bg-gray-300">{props.name}</span>
        <input
          id="field-background"
          type="color"
          className="input input-bordered w-full"
          onChange={(e) => handleSidebarValue(e.target.value, props.property)}
        />
      </label>
    </div>
  );
};
export default InputStyle;
