/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Title from "./Title";
import ConnexionContext from "./contexts/connexionContext";
import FormFields from "./connexionHelpers/formFields";
import FormSubmitter from "./connexionHelpers/formSubmitter";
import FormHelpers from "./connexionHelpers/formHelpers";
import FormTextInputList from "./FormTextInputList";
import CrossIcon from "./CrossIcon";

function Connexion() {
  const navigate = useNavigate();
  const { userInfo } = useContext(ConnexionContext);
  const { mail, password, connexionError } = FormFields;
  const [isResetMode, setIsResetMode] = useState(false);
  const [connexionData, setConnexionData] = useState({
    connexionError,
    mail,
    password,
  });
  const [_, ...fieldsToCheck] = Object.values(connexionData);

  const onFormSubmit = async () => {
    await FormSubmitter.login(
      userInfo.auth,
      connexionData.mail.value,
      connexionData.password.value,
      setConnexionData,
      connexionData,
      navigate
    );
  };

  const handleReinitPassword = () => {
    FormSubmitter.reinitPassWord(
      userInfo.auth,
      connexionData.mail.value,
      navigate
    );
  };

  return (
    // classe rajoutée
    <div className="page connexion-page">
      <Title>Connexion</Title>
      <CrossIcon></CrossIcon>
      {!isResetMode ? (
        <>
          <FormTextInputList
            fields={fieldsToCheck}
            data={connexionData}
            setData={setConnexionData}
            isEditMode={false}
          />
          <i>* required</i>
          <span className="spanDisplayMsg">{connexionData.connexionError}</span>
          <button
            type="button"
            onClick={() =>
              FormHelpers.allowValidation(fieldsToCheck, true) && onFormSubmit()
            }
          >
            Log in
          </button>
          <i>password forgotten ?</i>
          <button type="button" onClick={() => setIsResetMode(true)}>
            Reinit password
          </button>
        </>
      ) : (
        <>
          <FormTextInputList
            fields={[fieldsToCheck[0]]}
            data={connexionData}
            setData={setConnexionData}
            isEditMode={false}
          />
          <button type="button" onClick={() => handleReinitPassword()}>
            Reinit password
          </button>
          <button type="button" onClick={() => setIsResetMode(false)}>
            Back to connexion
          </button>
        </>
      )}
      <button type="button" onClick={() => navigate("/account/")}>
        Back to account
      </button>
    </div>
  );
}

export default Connexion;
