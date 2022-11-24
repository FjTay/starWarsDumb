/* eslint-disable no-nested-ternary */
import React, { useContext } from "react";
import FormHelpers from "./formHelpers";
import ConnexionContext from "../contexts/connexionContext";

function FormTextInput({ data, setData, field, isEditMode }) {
  const { userInfo } = useContext(ConnexionContext);

  return (
    // rajout d'une classe
    <div className="formtextInput"> 
      <label htmlFor={field.name}>
        {field.label} : {!data[field.name].isRequired && <i>- optional -</i>}
      </label>
      {/* rajout d'un div */}
      <div>
        <input
          placeholder={isEditMode ? userInfo.info[field.name] : ""}
          id={field.name}
          type={data[field.name].type}
          name={field.name}
          onFocus={(e) => FormHelpers.handleBlur(e, data, setData, isEditMode)}
          onChange={(e) => FormHelpers.handleChange(e, data, setData, isEditMode)}
        />
        <span className="spanValidation">
          {data[field.name].isValid
            ? " ✓"
            : !data[field.name].isValid && data[field.name].value
            ? "✕"
            : ""}
        </span>
      </div>
      <span className="spanDisplayMsg">
        {data[field.name].touched && data[field.name].displayMsg}
      </span>
    </div>
  );
}

export default FormTextInput;
