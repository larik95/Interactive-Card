import styled from "styled-components";
import frontCardImg from "../desing/bg-card-front.png";
// FORM STYLE
export const CardFormContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 59%;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    left: 0;
    top: 40%;
    position: fixed;
    width: 100%;
  }
`;

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`;
export const CardFormLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2.7px;
  word-spacing: 5px;
  margin: 0px 0px 5px 0px;
  color: var(--v-dark-violet);
  width: 100%;
`;
export const CardFormInput = styled.input`
  font-family: var(--f-family);
  border: 2px solid var(--l-grayish-violet);
  height: 30px;
  border-radius: 5px;
  padding: 18px 0px 18px 10px;
  font-weight: var(--fw);
  &::placeholder {
    color: var(--l-grayish-violet);
    font-size: var(--fs);
  }
  &:focus {
    outline: none;
    border: 1px solid;
    border-image-source: linear-gradient(
      to left,
      var(--linear-border-from),
      var(--linear-border-to)
    );
    border-image-slice: 1;
    border-radius: inherit;
  }
`;
export const CardDateCVCContainer = styled.div`
  display: flex;
  align-content: center;
  font-size: 12px;
  margin-top: 10px;
`;
export const CardDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;
export const Button = styled.button`
  font-family: "Space Grotesk", sans-serif;
  height: 40px;
  width: 100%;
  background-color: var(--v-dark-violet);
  color: var(--white);
  border-radius: 7px;
  cursor: pointer;
  margin-top: 20px;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;
export const DateContainer = styled.div`
  display: flex;
  input {
    width: 60px;
  }
  input:nth-child(2) {
    margin-left: 10px;
  }
`;
export const CardCVCContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const Error = styled.p`
    color: hsl(0, 100%, 66%);
    font-size: 10px;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 10px;
    font-weight: bold;`

    // FRONT CARD STYLE 

export const FrontCardContainer = styled.div`
  font-family: var(--f-family);
  position: absolute;
  background-image: url(${frontCardImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 447px;
  height: 245px;
  z-index: 1;
  left: 11%;
  top: 17%;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.1) 24px 5px 15px;

  @media (max-width: 500px) {
    scale: 0.7;
    top: 12%;
    left: -35px;
    z-index: 2;
  }
`;

export const CardLogo = styled.div`
  position: absolute;
  left: 7%;
  top: 10%;
  width: 80px;
  height: 45px;
`;

export const CardNumber = styled.p`
  color: var(--white);
  letter-spacing: 3px;
  word-spacing: 5px;
  font-size: 26px;
  position: absolute;
  left: 7%;
  top: 55%;
`;

export const CardName = styled.p`
  color: var(--white);
  letter-spacing: 2px;
  word-spacing: 5px;
  position: absolute;
  left: 7%;
  top: 80%;
`;

export const CardDate = styled.p`
  color: var(--white);
  position: absolute;
  right: 8%;
  top: 80%;
  letter-spacing: 1px;
`;
