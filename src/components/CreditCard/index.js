import {useState} from 'react'

import {
  AppContainer,
  BgContainer,
  BlueContainer,
  Heading,
  CardContainer,
  Card,
  CardNumber,
  WhiteContainer,
  PaymentCard,
  PaymentHeading,
  CardNumberInput,
  CardNameInput,
  HorizontalLine,
  CardHolderNameHeading,
  CardHolderName,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const cardholderNameUpperCase = cardHolderName.toUpperCase()

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardName = event => {
    setCardHolderName(event.target.value)
  }
  return (
    <AppContainer>
      <BgContainer>
        <BlueContainer>
          <Heading>CREDIT CARD</Heading>
          <HorizontalLine />
          <CardContainer>
            <Card data-testid="creditCard">
              <CardNumber>{cardNumber}</CardNumber>
              <CardHolderNameHeading>CARDHOLDER NAME</CardHolderNameHeading>
              <CardHolderName>{cardholderNameUpperCase}</CardHolderName>
            </Card>
          </CardContainer>
        </BlueContainer>
        <WhiteContainer>
          <PaymentCard>
            <PaymentHeading>Payment Method</PaymentHeading>
            <CardNumberInput
              placeholder="Card Number"
              onChange={onChangeCardNumber}
              value={cardNumber}
              type="text"
            />
            <CardNameInput
              placeholder="Cardholder Name"
              onChange={onChangeCardName}
              value={cardHolderName}
              type="text"
            />
          </PaymentCard>
        </WhiteContainer>
      </BgContainer>
    </AppContainer>
  )
}

export default CreditCard
