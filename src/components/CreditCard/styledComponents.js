import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
`

export const BgContainer = styled.div`
  display: flex;
  border: solid 2px blue;
`
export const BlueContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  background-color: #3b4b69;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Card = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 170px;
  width: 270px;
  border-radius: 10px;
  padding: 15px;
`
export const WhiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: white;
  font-size: 20px;
`
export const PaymentHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: #344e7a;
  font-size: 20px;
`

export const CardNumber = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  color: white;
  font-size: 20px;
  padding-top: 20px;
`
export const CardHolderName = styled.p`
  font-family: 'Roboto';
  font-weight: 600;
  color: #d3d9e0;
  font-size: 10px;
`
export const HorizontalLine = styled.hr`
  width: 118px;
  border: 2px solid #ffd773;
  margin: 0;
`
export const CardHolderNameHeading = styled.p`
  font-family: 'Roboto';
  font-weight: 600;
  color: #c3cad9;
  font-size: 10px;
  padding-top: 15px;
`

export const CardNumberInput = styled.input`
  outline: none;
  margin-bottom: 5px;
  border: 1px solid #475569;
  font-size: 10px;
  padding: 5px;
`

export const CardNameInput = styled.input`
  outline: none;
  border: 1px solid #475569;
  font-size: 10px;
  padding: 5px;
`

export const PaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 16px #d3d9e0;
  height: 170px;
  width: 270px;
  padding: 15px;
`
