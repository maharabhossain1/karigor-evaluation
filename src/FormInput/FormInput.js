import { FormControl, MenuItem, Select } from "@mui/material";
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
        <div id="form-control">
          <label htmlFor="text">{label}</label>
          <FormControl sx={{ width: "70%", mx: 3 }}>
            <Select
              onChange={handleOnChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {others.options.map((option, i) => (
                <MenuItem key={i} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
