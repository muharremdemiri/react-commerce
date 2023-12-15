import styled from "styled-components";
import { Link } from 'react-router-dom'

export const HeroContainer = styled.section`
  width: 100%;
  min-height: 480px;
  background-color: deepskyblue;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CategoriesContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  gap: 20px 10px;
  margin: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px 0;

  }
  @media (max-width: 730px) {
    justify-content: space-around;
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

export const Category = styled(Link)`
  width: 100%;
  height: 80px;
  background: #ffffff;
  outline: 1px solid gray;
  display: grid;
  grid-template-columns: 60% 20%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  border-radius: 5px;
  &:last-of-type{
    @media (max-width: 1000px) and (min-width: 600px) {
      grid-column: 2;

    }
  }
  
  @media (max-width: 1000px) {
    width: 90%;
    margin: auto;
  }
    
  &:hover {
    box-shadow: 1px 1px 10px #00506b;
  }
`

export const CategoryText = styled.div`
  color: #151414;
  font-size: 18px;
`