// src/components/Home.js
import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaHandshake, FaUsers, FaExclamationCircle, FaTachometerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import profilePicture from '../assets/profile-picture.jpg';
import resumeEN from '../assets/Rafael_Leon_Resume_EN.pdf'; // CV en inglés
import resumeES from '../assets/Rafael_Leon_Resume_ES.pdf'; // CV en español
import '../components/style.css'

const Home = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Determina el archivo de CV a descargar según el idioma
  const getResume = () => {
    if (currentLanguage === 'es') {
      return resumeES;
    }
    return resumeEN; // Valor por defecto si no es español
  };

  return (
    <Container className="text-center my-5">
      <Row>
        <Col>
          <Image src={profilePicture} roundedCircle className="mb-3 w-25" />
          <h1>{t('home.title')}</h1>
          <p>{t('home.description')}</p>
          <div className="skills-container mb-3">
            <div className="skill-circle leadership">
              <FaHandshake className="skill-icon" />
              <p>{t('home.leadership')}</p>
            </div>
            <div className="skill-circle teamwork">
              <FaUsers className="skill-icon" />
              <p>{t('home.teamwork')}</p>
            </div>
            <div className="skill-circle problem-resolution">
              <FaExclamationCircle className="skill-icon" />
              <p>{t('home.problemResolution')}</p>
            </div>
            <div className="skill-circle persistence">
              <FaTachometerAlt className="skill-icon" />
              <p>{t('home.persistence')}</p>
            </div>
          </div>
          <Button variant="primary" href={getResume()} download>{t('home.myResume')}</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
