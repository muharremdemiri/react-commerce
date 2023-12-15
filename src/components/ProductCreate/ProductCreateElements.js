import styled from "styled-components";

export const ProductCreateContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
  padding: 20px 0;
`

export const CardContainer = styled.div`
  width: 95%;
  border-radius: 7px;
  background-color: white;
  box-shadow: 2px 2px 5px #a2a2a2;
  max-width: 1200px;
  margin: 10px 0;
  padding: 20px 0;
`

export const CardTitle = styled.h2`
  font-weight: normal;
  padding-left: 15px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`

export const CardNumber = styled.div`
  margin-left: 20px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 20px;
  outline: 3px solid deepskyblue;
  color: deepskyblue;
`
export const CardContent = styled.div`
  margin: 20px 10px 0 10px;
`

export const DisplayFlexDiv = styled.div`
  display: flex;
  @media(min-width: 600px) {
    > * {
      margin: 10px;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const InputLabel = styled.p`
  margin-bottom: 4px;
  font-size: 15px;
  font-weight: 500;
  margin-top: 10px;

  @media (min-width: 600px) {
    margin-left: 10px;
    margin-bottom: -5px;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 4px;
  border: solid 1px #bcbfc2;
  padding: 5px 10px;

  &:focus {
    outline: none;
  }
`

export const UploadImagesWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 0;

  @media(max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 600px) {
    gap: 20px 0;
  }
`
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  margin: auto;

  @media(max-width:600px) {
    flex-direction: column;
    width: 100%;
  }
`

export const HeaderDescription = styled.p`
  width: 100%;
  padding-right:15px;
  @media(max-width: 600px) {
    padding: 0 10px 20px 20px;    
  }
`

export const AddContactButton = styled.div`
  color: deepskyblue;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
  @media(max-width: 600px) {
    margin-top: 10px;
    margin-left: 0;
  }
`
export const CheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  @media(max-width: 600px) {
    margin-left: 10px;
    margin-bottom: 10px;
  }
`

export const Checkbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`

export const CheckboxLabel = styled.label`
  font-weight: 600;
  cursor: pointer;
`

export const TermsAndConditions = styled.a`
  color: deepskyblue;
  margin-left: 5px;
`

export const SubmitButton = styled.button`
  padding: 5px 20px;
  background-color: deepskyblue;
  color: white;
  border: solid 1px #afacac;
  border-radius: 5px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 15px 0 0 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 10px gray;
  }
`