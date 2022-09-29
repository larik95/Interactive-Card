import React from "react";
import {FrontCardContainer, CardLogo, CardNumber, CardName, CardDate} from "./styles";
import cardLogo from "../desing/card-logo.svg";

function FrontCard(props) {

  return (
    <div className="frontcard-container">
      <FrontCardContainer>
        <CardLogo>
          <img src={cardLogo} alt="card log" />
        </CardLogo>
        <CardNumber>
         {props.number ? props.number : '0000 0000 0000 0000'}
        </CardNumber>
        <CardName>{props.name ? props.name.toUpperCase() : 'JANE APPLESSED'}</CardName>
        <CardDate>{props.month ? props.month : '00'}/{props.year ? props.year : '00'}</CardDate>
      </FrontCardContainer>
    </div>
  );
}

export default FrontCard;

