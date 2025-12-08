import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavLink,
  CTAButtons,
  Button
} from '../styles/Header.styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // if (location.pathname === '/support') {
    //   return;
    // }
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector('#contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleCustomerCareClick = () => {
    navigate('/support');
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <svg viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" fill="#10b981" opacity="0.1"/>
            <path d="M12 10C11.45 10 11 10.45 11 11V12C11 12.55 11.45 13 12 13H13.5L16 20L17.5 24H25.5L28 18L29 15H15L14 12H12Z" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="18" cy="27" r="1.5" fill="#10b981"/>
            <circle cx="24" cy="27" r="1.5" fill="#10b981"/>
            <path d="M16 20H26M17.5 24H25.5" stroke="#34d399" strokeWidth="1.2" strokeLinecap="round"/>
            <circle cx="20" cy="20" r="12" stroke="#10b981" strokeWidth="1.5" opacity="0.3"/>
            <path d="M22 9L24 11L28 7" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {process.env.REACT_APP_BRAND_NAME || 'Voxerra'}
        </Logo>
        <NavLinks>
          <NavLink href="#features" onClick={(e) => handleNavClick(e, '#features')}>What We Do</NavLink>
          <NavLink href="#stats" onClick={(e) => handleNavClick(e, '#stats')}>How It Works</NavLink>
          <NavLink href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>Results</NavLink>
          <NavLink href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>Who We Serve</NavLink>
          <NavLink href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact Sales</NavLink>
        </NavLinks>
        <CTAButtons>
          <Button onClick={handleCustomerCareClick}>Customer Care</Button>
          <Button $primary onClick={handleButtonClick}>Get Started</Button>
        </CTAButtons>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
