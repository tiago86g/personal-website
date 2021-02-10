import React, { useState, useEffect } from 'react';
import { VscChromeClose, VscListSelection } from 'react-icons/vsc';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavMobileIcon,
  NavLogoName,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from './Navbar.elements';
import { Button } from '../../theme/globalStyles';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              <NavLogoName>
                Tiago<strong>Gonçalves</strong>
              </NavLogoName>
            </NavLogo>
            <NavMobileIcon onClick={handleClick}>
              {click ? <VscChromeClose /> : <VscListSelection />}
            </NavMobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">HOME</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services">SERVICES</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products">PRODUCTS</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/contact">
                    <Button primary>CONTACT</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink>
                    <Button fontBig primary>
                      CONTACT
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
