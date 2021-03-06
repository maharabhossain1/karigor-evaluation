import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import useStepStates from "../../../hooks/useStepStates";
import "./FormInput.css";

export default function FormInput(props) {
  const { userData, setUserData } = useStepStates();
  const [imageFile, setImageFile] = useState("");
  const { label, handleOnBlur, value, ...others } = props;
  const handleImageUpload = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setImageFile(newFile);
      const field = e.target.name;
      const value = e.target.value;
      const newValue = { ...userData };
      newValue[field] = value;
      setUserData(newValue);
    }
  };
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
        <div className="file-container">
          <label htmlFor="text">{label}</label>
          <div className="upload-box">
            <div className="image-upload-box">
              <div className="text-about-upload">
                <AiOutlineCloudUpload
                  style={{
                    fontSize: "4rem",
                    marginTop: "5px",
                    color: "#008AD9",
                  }}
                />
                <p>Click to choose your image file</p>
              </div>
              <input
                onChange={handleImageUpload}
                defaultValue={value || ""}
                {...others}
              />
            </div>
            {imageFile && (
              <div style={{ marginTop: "20px" }}>
                <small>{imageFile.name}</small>
              </div>
            )}
          </div>
        </div>
      ) : others.type === "select" ? (
        <div>
          <label htmlFor="text">{label}</label>
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
