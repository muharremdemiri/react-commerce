import styled from "styled-components";

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