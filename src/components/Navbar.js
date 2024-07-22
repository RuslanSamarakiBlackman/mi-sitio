// src/components/MyNavbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const MyNavbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">{t('navbar.brand')}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/skills">{t('navbar.skills')}</Nav.Link>
          <Nav.Link href="/experiences">{t('navbar.experiences')}</Nav.Link>        
          <Nav.Link href="/posts">{t('navbar.posts')}</Nav.Link>
          <Nav.Link href="/contact">{t('navbar.contact')}</Nav.Link>
          <NavDropdown title={t('navbar.language')} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => changeLanguage('en')}>{t('navbar.english')}</NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage('es')}>{t('navbar.spanish')}</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
