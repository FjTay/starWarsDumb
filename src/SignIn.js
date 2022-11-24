import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Title from "./Title";
import ConnexionContext from "./contexts/connexionContext";
import FormHelpers from "./connexionHelpers/formHelpers";
import FormFields from "./connexionHelpers/formFields";
import FormTextInputList from "./FormTextInputList";
import FormSubmitter from "./connexionHelpers/formSubmitter";
import CrossIcon from "./CrossIcon";

function SignIn() {
  const { userInfo } = useContext(ConnexionContext);
  const navigate = useNavigate();
  const {
    gender,
    mail,
    password,
    name,
    surname,
    phone,
    birth,
    passwordConfirmation,
  } = FormFields;
  const [signInData, setSignInData] = useState({
    gender,
    name,
    surname,
    mail,
    phone,
    birth,
    password,
    passwordConfirmation,
  });
  const [_, ...fieldsToCheck] = Object.values(signInData);

  const isFormValid = () => {
    if (
      FormHelpers.allowValidation(fieldsToCheck, signInData.gender) &&
      signInData.password.value === signInData.passwordConfirmation.value
    ) {
      return true;
    }
  };

  return (
    //ajout d'une classe
    <div className="page connexion-page">
    <CrossIcon></CrossIcon>
      <Title>Sign In</Title>
      <FormTextInputList
        fields={fieldsToCheck}
        data={signInData}
        setData={setSignInData}
        isEditMode={false}
      />
      <label htmlFor="civ">Gender * :</label>
      <div id="dropdown">
        <div className="dropdown">
          <button type="button" className="dropbtn" id="dropbtn">
          {!signInData.gender
          ? "Select : "
          : signInData.gender === 1
          ? "Mr"
          : signInData.gender === 2
          ? "Mrs"
          : "Other"}
          </button>
          <ul className="dropdown-content">
          {["Male", "Female", "Other"].map((gend, index) => (
            <li
              onClick={(e) =>
                FormHelpers.assignGender(index + 1, setSignInData, signInData)
              }
            >
              {gend}
            </li>
          ))}
          </ul>
        </div>
      </div>
      <i>* required</i>
      <button
        type="button"
        onClick={() =>
          isFormValid() &&
          FormSubmitter.register(
            userInfo.auth,
            signInData.mail.value,
            signInData.password.value,
            setSignInData,
            signInData,
            navigate
          )
        }
      >
        Sign In
      </button>
    </div>
  );
}

export default SignIn;
