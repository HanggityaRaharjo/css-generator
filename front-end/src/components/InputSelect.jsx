import useStyleStore from "../store/CssStore";
const InputSelect = (props) => {
  const selectState = useStyleStore((state) => state.changeStyle);

  const handleSelected = (value) => {
    selectState({
      property: props.property,
      value: value,
    });
  };

  return (
    <select
      className="select select-bordered w-full my-2"
      defaultValue={"none"}
      onChange={(e) => handleSelected(e.target.value)}
    >
      <option value="none" disabled>
        {props.name}
      </option>
      {props.value.map((option, index) => (
        <option key={index} value={option.value}>
          {option.childName}
        </option>
      ))}
    </select>
  );
};

export default InputSelect;
