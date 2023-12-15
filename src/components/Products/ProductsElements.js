import styled from "styled-components";

export const ProductsContainer = styled.section`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 50px;
  border-radius: 5px;
`

export const OptionsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`

export const Option = styled.button`
  padding: 7px 15px;
  margin-bottom: 2px;
  border: none;
  border-radius: 2px;
  font-size: 0.9rem;
  cursor: pointer;
  background-color: ${({isActive}) => isActive ? 'white' : '#f1f1f1'};
  outline: ${({isActive}) => isActive ? '1px solid gray' : '#f1f1f1'};
  font-weight: ${({isActive}) => isActive ? '500' : '400'};
`
export const SortingModal = styled.div`
  position: absolute;
  border-radius: 5px;
  background-color: #f5f5f5;
  right: -2px;
  z-index: 4;
  box-shadow: 0 4px 10px #7db5c9;
`

export const SortTitle = styled.p`
  text-align: center;
  margin-top: 15px
`

export const RadioButtonsWrapper = styled.div`
  padding: 10px 20px 20px 20px;
`

export const RadioButtonContainer = styled.div`
  padding: 10px 5px;
  display: flex;
`

export const RadioButton = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  cursor: pointer;
`

export const RadioLabel = styled.label`
  cursor: pointer;
`

export const EmptyCell = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 1px 1px 5px gray;
  height: 80px;
  border-radius: 5px;
  font-size: 16px;
  &:active {
    background-color: white;
  }
`