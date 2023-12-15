import styled from "styled-components";

export const FilterWrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  background-color: white;
  box-shadow: 2px 5px 10px gray;
  margin: 20px auto;
  border-radius: 5px;
`

export const Label = styled.p`
  font-size: 1.5rem;
  padding: 15px;
  margin-left: 10px;

`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin: 0 auto;
  grid-column: span 2;
`

export const InputLabel = styled.p`
  margin-bottom: 4px;
  font-size: 15px;
  font-weight: 500;
  @media (max-width: 550px) {
    margin-top: 0 !important;
  }
`

export const SelectContainer = styled.div`
  padding: 5px 15px 15px 15px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(8, 1fr);
  @media(max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media(max-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
  gap: 10px 20px;  
`

export const SearchButton = styled.button`
  border-radius: 5px;
  border: #969696 solid 1px;
  font-weight: bold;
  font-size: 1rem;
  height: 30px;
  margin-bottom: 2px;
  background-color: deepskyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Ubuntu Light" ,serif;
  &:hover {
    box-shadow: 1px 1px 5px gray;
  }
`

export const SearchInput = styled.input`
  border-radius: 5px;
  border: #c2c2c2 solid 1px;
  font-size: 0.9rem;
  padding-left: 10px;
  color: black;
  width: 100%;
  height: 30px;
  margin-bottom: 2px;

  
  &:focus {
    outline: skyblue solid 3px;
    border:none;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  grid-column: span 2;
`

export const StatesContainer = styled.div`
  grid-column: span 4;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 550px) {
    grid-column: span 2;
  }
`

export const CheckboxWrapper = styled.div`
  display: flex;
  width: 120px;
  align-items: center;
`

export const CheckBox = styled.input`
  display: flex;
  cursor: pointer;
`

export const CheckBoxLabel = styled.label`
  font-size: 15px;
  cursor: pointer;
  margin: 0 0 0 10px;

  @media (max-width: 550px) {
    font-size: 14px;
    margin: 0 0 0 5px;

  }
`