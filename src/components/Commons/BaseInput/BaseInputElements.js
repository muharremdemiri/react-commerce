import styled from "styled-components";

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
  @media (max-width: 600px) {
    margin-top: 10px;
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