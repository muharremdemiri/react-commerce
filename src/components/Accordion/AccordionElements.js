import styled from "styled-components";

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 5px;
`

export const AccordionButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 1px 1px 5px gray;
  height: 80px;
  border-radius: 5px;
  transition: all 0.6s ease;
  font-size: 16px;
  position: relative;
  
  @media (max-width: 1000px) {
    font-size: 14px;    
  }

  @media (max-width: 450px) {
    height: 100px;
  }

  background-color: ${({hasBeenClicked}) => hasBeenClicked ? '#cee3f6' : 'white'};
  
  &:active {
    background-color: white;
  }
`

export const AccordionImage = styled.img`
  width: 140px;
  max-height: 70px;
  border-radius: 5px;
  object-fit: cover;
  
  @media(max-width: 800px) {
    width: 100px;
  }

  @media (max-width: 450px) {
    max-height: 90px;
  }
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease;
  background-color: white;
  z-index: 2;
  border-radius: 0 0 5px 5px;
  margin-bottom: ${({isActive}) => isActive ? '15px' : '0'};
`

export const AccordionPriceDateSmallScreen = styled.div`
  text-align: start;
  display: flex;
  margin: 0 10px;
  justify-content: space-between;
  
  @media (min-width: 600px) {
    display: none;
  }
`



export const IconContainer = styled.div`
  display: flex;
  padding-left: 15px;
  max-width: 200px;
`

export const AccordionTextWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  word-wrap: break-word;
  word-break: break-word;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 50% 25% 15% 10%;
  }
  
  @media (max-width: 800px) {
    grid-template-columns: 50% 20% 22% 1fr;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

export const AccordionHeadText = styled.p`
  font-size: 1em;
  padding: 0 5px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #b9b9b9;
  @media (max-width: 600px) {
    justify-content: start;
    align-items: start;
    text-align: start;
    border: none;
    font-weight: 500;
  }
`

export const CheckBox = styled.input`
  width: 17px;
  height: 17px;
  @media (max-width: 600px) {
    margin-right: 10px;
    display: none;
  }
`

export const SmallScreenCheckBox = styled.input`
  width: 17px;
  height: 17px;
  position: absolute;
  left: 40px;
  top: 10px;
  @media (min-width: 600px) {
    display: none;
  }
`

export const DateText = styled.div`
  color: #5d5d5d;
  
  @media(min-width: 600px) {
    padding-top: 5px;
  }
`

export const PriceDateColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid #b9b9b9;

  @media (max-width: 600px) {
    display: none;
  }
`

export const ContentImage = styled.img`
  max-width: 90%;
  height: 400px;
  object-fit: cover;
`

export const ContentContainer = styled.div`
  width: 1200px;
  padding-bottom: 10px;
  max-width: 90%;
  margin: 0 auto;
`

export const ContentTitle = styled.div`
  padding: 10px 0 5px 0;
  font-weight: bold;
  border-bottom: 1px solid #afafaf;
  margin-bottom: 10px;
`

export const Description = styled.div`
  padding-bottom: 15px;
`

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  flex-wrap: wrap;

`

export const InfoWrapper = styled.div`
  padding: 5px 30px 10px 0;
`

export const InfoTitle = styled.div`
  font-weight: 500;
`

export const InfoText = styled.div`
    
`