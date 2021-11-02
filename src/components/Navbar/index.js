import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';


const Navbar = ({ toggle }) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
              <NavLogo to='/'>
                <img src='./Logo.png' width="80px" alt="prop"/>
              </NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='/'>HOME</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='About'>ABOUT</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='Roadmap'>ROADMAP</NavLinks>
                      </NavItem>
                      
                      <NavItem>
                          <NavLinks to='Rarity'>RARITY</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='Team'>TEAM</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='FAQ'>FAQ</NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to="/connectwallet">CONNECT WALLET</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
        </>
    );
};

export default Navbar
