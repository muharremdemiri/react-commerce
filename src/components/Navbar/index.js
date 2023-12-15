import React, {useEffect, useState} from "react";
import {Link, useLocation} from 'react-router-dom'
import { Nav, NavbarContainer, NavLogoWrapper, StateImage, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, Divider, LanguagePicker, NavDropdownLinks, NavDropdown, NavDropdownTitle, NavDropdownLinkGroup} from "./NavbarElements";
import { FaBars } from  'react-icons/fa'
import { IconContext } from "react-icons/lib";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import { animateScroll as scroll } from 'react-scroll'
import Kosova from '../images/svg/kosovo.svg'
import Albania from '../images/svg/albania.svg'
const Navbar = () => {
    const [scrollNav, setScrollNav] = useState(false)

    const location = useLocation()


    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }



    return (
        <>
            <IconContext.Provider value={{color: '#fff'}} >
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogoWrapper>
                            <Link to='/'>
                                {/*<NavImg  onClick={toggleHome} src={require('../../images/logo_only.svg').default} alt='Bezep Solutions Logo'/>*/}
                            </Link>
                            <NavLogo onClick={toggleHome} to='/'>LOGO</NavLogo>
                        </NavLogoWrapper>
                        <MobileIcon>
                            <FaBars/>
                        </MobileIcon>
                        {location.pathname === '/' &&
                            <NavMenu>
                                <NavItem>
                                    <NavLinks to='/'>
                                        <span>KOSOVE</span>
                                        <StateImage src={Kosova} alt=""/>
                                    </NavLinks>
                                </NavItem>
                                <Divider/>
                                <NavItem>
                                    <NavLinks to='/'>
                                        <span>SHQIPERI</span>
                                        <StateImage src={Albania} alt=""/>
                                    </NavLinks>
                                </NavItem>
                            </NavMenu>
                        }
                        <NavBtn>
                            <NavDropdown className='dropdown_button'>
                                <NavDropdownTitle><span style={{marginRight: '2px'}}>Albanian</span> <MdOutlineKeyboardArrowRight className='arrowIcon'/> </NavDropdownTitle>
                                <NavDropdownLinkGroup className='dropdown_links'>
                                    <NavDropdownLinks to='/'> <div>Albanian</div> <TiTick style={{color:'black'}}/></NavDropdownLinks>
                                    <NavDropdownLinks to='/'>English</NavDropdownLinks>
                                </NavDropdownLinkGroup>
                            </NavDropdown>
                            <NavBtnLink to='/login'>Kyqu</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;