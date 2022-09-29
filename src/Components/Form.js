import React, { useEffect, useState } from "react";
import FormOk from "./FormOk";
import {
  CardCVCContainer,
  CardDateCVCContainer,
  CardForm,
  CardFormContainer,
  CardFormInput,
  CardFormLabel,
  Button,
  Error,
  CardDateContainer,
  DateContainer,
} from "./styles";

const Form = ({ setters, propsInfo }) => {
  const { setName, setNumber, setYear, setMonth, setCVC} = setters;
  const { name, number, year, month, cvc} = propsInfo;
  const [formOk, setFormOk] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [nameError, setNameError] = useState("");
  const [dateError, setDateError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [cvcError, setCVCError] = useState("");

  // Remove white spaces and divide in groups of 4 digits
  function formatCardNumber(number) {
    return number
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  }

  //Check form
  useEffect(() => {
    if (
      nameError === "" &&
      dateError === "" &&
      numberError === "" &&
      cvcError === "" &&
      submited
    ) {
      setFormOk(true);
    }
  }, [nameError, dateError, numberError, cvcError, submited]);

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    verifyInputs();
    setSubmited(true);
  };
  //Verify inputs
  const verifyInputs = () => {
    name === "" ? setNameError("Can't be blank") : setNameError("");
    if (month === "" || year === "") {
      setDateError("Can't be blank");
    } else if (month > 12 || year < 22) {
      setDateError("Invalid date");
    } else setDateError("");
    verifyNan(cvc, setCVCError);
    verifyNan(number, setNumberError);
  };
  //verify if there are only numbers in cvc and number card
  const verifyNan = (value, callback) => {
    const format = value.replace(/\s/g, "");
    format === ""
      ? callback("Cant be blank")
      : isNaN(format)
      ? callback("Wrong format, numbers only")
      : callback("");
  };

  //Form ok message
  if(formOk) {
    return <FormOk />
  } else {
    return (
    <CardFormContainer>
      <CardForm onSubmit={handleSubmit}>
        <CardFormLabel for="name">CARDHOLDER NAME</CardFormLabel>
        <CardFormInput
          placeholder="e.g Jane Applessed"
          type="text"
          name="name"
          value={name}
          maxLength={25}
          onChange={(e) => setName(e.target.value)}
          error={nameError ? "hsl(0, 100%, 66%)" : "rgba(221,221,221, 0.0)"}
        />
        <Error>{nameError}</Error>
      </CardForm>
      <CardForm>
        <CardFormLabel for="name">CARD NUMBER</CardFormLabel>
        <CardFormInput
          placeholder="e.g 1234 5678 9123 0000"
          type="text"
          name="card"
          value={number}
          maxLength={19}
          onChange={(e) => setNumber(formatCardNumber(e.target.value))}
          error={numberError ? "hsl(0, 100%, 66%)" : "rgba(221,221,221, 0.0)"}
        />
        <Error>{numberError}</Error>

        <CardDateCVCContainer>
          <CardDateContainer>
            <CardFormLabel>EXP.DATE(MM/YY)</CardFormLabel>
            <DateContainer>
              <CardFormInput
                placeholder="MM"
                type="number"
                name="card"
                value={month}
                maxLength={2}
                onInput={(e) => e.target.value = e.target.value.slice(0, 2)}
                minLength={2}
                onChange={(e) => setMonth(e.target.value)}
                error={
                  dateError ? "hsl(0, 100%, 66%)" : "rgba(221,221,221, 0.0)"
                }
              />

              <CardFormInput
                placeholder="YY"
                type="number"
                name="number"
                value={year}
                maxLength={2}
                onInput={(e) => e.target.value = e.target.value.slice(0, 2)}
                minLength={2}
                onChange={(e) => setYear(e.target.value)}
                error={
                  dateError ? "hsl(0, 100%, 66%)" : "rgba(221,221,221, 0.0)"
                }
              />
            </DateContainer>
            <Error>{dateError}</Error>
          </CardDateContainer>
          <CardCVCContainer>
            <CardFormLabel>CVC</CardFormLabel>
            <CardFormInput
              placeholder="e.g 123"
              type="number"
              name="card"
              value={cvc}
              maxLength={3}
              onInput={(e) => e.target.value = e.target.value.slice(0, 3)}
              minLength={3}
              onChange={(e) => setCVC(e.target.value)}
              error={
                dateError ? "hsl(0, 100%, 66%)" : "rgba(221,221,221, 0.0)"
              }
            />
            <Error>{cvcError}</Error>
          </CardCVCContainer>
        </CardDateCVCContainer>
        <Button type="submit" onClick={handleSubmit}>
          Confirm
        </Button>
      </CardForm>
    </CardFormContainer>
  );
  }

  
};

export default Form;
