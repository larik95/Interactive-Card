import React from 'react'
import {Button, CardFormContainer} from './styles'
import okLogo from '../desing/icon-complete.svg'
import styled from 'styled-components'

const FormOk = () => {
  return (
    <CardFormContainer>
        <img src={okLogo} alt="Confirmed" />
        <Title>
    Thank you!
        </Title>
        <Subtitle>
            We've added your card details
        </Subtitle>
        <Button onClick={() => document.location.reload()}>Continue</Button>
    </CardFormContainer>
  )
}

export default FormOk

const Title = styled.h1 `
color: var(--v-dark-violet);
text-transform: uppercase;
font-size: 28px;
margin-top: 20px;
`
const Subtitle =styled.p `
color: var(--d-grayish-violet);
margin-top: 20px;
`