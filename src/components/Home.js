import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaHandshake, FaUsers, FaExclamationCircle, FaTachometerAlt } from 'react-icons/fa';
import profilePicture from '../assets/profile-picture.jpg';
import resume from '../assets/Rafael_Leon_Resume.pdf';
import './style.css';; // Asegúrate de importar el archivo CSS

const Home = () => (
  <Container className="text-center my-5">
    <Row>
      <Col>
        <Image src={profilePicture} roundedCircle className="mb-3 w-25" />
        <h1>Hello, I’m Rafael León</h1>
        <p>
          I’m a Systems Engineer with 6 years of experience as a backend developer.
          <br />
          I specialize in .NET C# and have worked in all stages of the software development lifecycle: requirements gathering, analysis, coding, testing, production deployment, and support.
          <br />
          I’ve worked in the financial industry at CECOBAN (Authorized Certification Provider) and in the banking industry at CITIBANAMEX.
          <br />
          I was part of the team that carried out the regulatory process for transitioning from CFDI version 3.3 to 4.0, as well as the implementation of the Carta Porte 2.0 add-on. I worked on various projects related to invoice generation for different banks within CECOBAN.
          <br />
          Additionally, I contributed to CITI’s bank separation efforts, migrating components to new infrastructure, making necessary adjustments, and conducting deployments and testing to ensure proper functionality across different environments.
        </p>
        <div className="skills-container mb-3">
          <div className="skill-circle leadership">
            <FaHandshake className="skill-icon" />
            <p>Leadership</p>
          </div>
          <div className="skill-circle teamwork">
            <FaUsers className="skill-icon" />
            <p>Team Work</p>
          </div>
          <div className="skill-circle problem-resolution">
            <FaExclamationCircle className="skill-icon" />
            <p>Problem Resolution</p>
          </div>
          <div className="skill-circle persistence">
            <FaTachometerAlt className="skill-icon" />
            <p>Persistence</p>
          </div>
        </div>
        <Button variant="primary" href={resume} download>My Resume</Button>
      </Col>
    </Row>
  </Container>
);

export default Home;
