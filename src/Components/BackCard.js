import React from "react";
import styled from "styled-components";
import backCardImg from "../desing/bg-card-back.png";
const BackCard = (props) => {
  return (
    <BackCardContainer>
      <CardCVC>{props.cvc ? props.cvc : '000'}</CardCVC>
    </BackCardContainer>
  );
};

export default BackCard;

const BackCardContainer = styled.div`
  font-family: var(--f-family);
  position: absolute;
  background-image: url(${backCardImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 447px;
  height: 245px;
  z-index: 1;
  left: 17%;
  top: 54%;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.1) 15px 5px 12px;

  @media (max-width: 600px) {
    top: -15px;
    left: 5px;
    scale: 0.6;
  }
`;

const CardCVC = styled.p`
  position: absolute;
  right: 12%;
  top: 45%;
  color: var(--white);
`;
