import { AiFillCaretDown } from "react-icons/ai";
import useStepStates from "../hooks/useStepStates";
import "./FormInput.css";

export default function FormInput(props) {
  const { userData, setUserData } = useStepStates();
  const { label, handleOnBlur, value, ...others } = props;
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newValue = { ...userData };
    newValue[field] = value;
    setUserData(newValue);
  };
  return (
    <div className="input-field">
      {others.type === "file" ? (
        // for farther implimentation
        <div></div>
      ) : others.type === "select" ? (
        <div>
          <label htmlFor="text">{label}</label>
          <div className="custom-select-container">
            <select
              id="custom-select"
              name={others.name}
              onChange={handleOnChange}
            >
              <option value=""> Select an Option</option>
              {others.options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="custom-arrow">
              {" "}
              <AiFillCaretDown
                style={{
                  verticalAlign: "middle",
                  fontSize: "1.5rem",
                }}
              />
            </span>
          </div>
        </div>
      ) : (
        <div>
          <label htmlFor="text">{label}</label>
          <input onBlur={handleOnBlur} defaultValue={value || ""} {...others} />
        </div>
      )}
    </div>
  );
}
