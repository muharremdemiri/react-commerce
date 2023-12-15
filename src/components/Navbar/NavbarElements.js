import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Nav = styled.nav`
  background-color: #171717;
  height: 80px;
  //margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`
export const NavLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  margin-left: 24px;
`

export const NavImg = styled.img`
  cursor: pointer;
  width: 2rem;
  filter: hue-rotate(300deg);
`

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.1);
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #0b6e9d;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`

export const Divider = styled.div`
  border-right: #fff solid 1px ;
  margin: 0 5px;
  height: 35%;
`

export const StateImage = styled.img`
  width:40px
`

export const LanguagePicker = styled.div`
    padding-right:20px;
`

export const NavDropdownLinks = styled(LinkR)`
  padding: 10px 10px;
  background: #fff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  font-weight: bold;
  height: 100%;
  cursor: pointer;
  border-bottom: 1px solid gray;
`

export const NavDropdownLinkGroup = styled.div`
  visibility: hidden;
  opacity:0;
  position: absolute;
  flex-direction: column; 
  width: 150px;
  top:60px;
  left: 10px;
  transition:visibility 0.3s linear,opacity 0.3s linear;
  outline: 1px solid black;
`
export const NavDropdown = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  position: relative;
  text-align: start;
`


export const NavDropdownTitle = styled.div`
  display: flex;

  &:hover .arrowIcon {
    transform: rotate(90deg);
    transition: transform 0.6s ease;

  }
`
