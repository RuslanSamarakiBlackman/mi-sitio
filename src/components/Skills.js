import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCogs, FaDatabase, FaCodeBranch, FaCloud } from 'react-icons/fa';

const Skills = () => (
  <Container className="my-5">
    <Row>
      <Col>
        <h2>Skills</h2>
        <div className="mb-4">
          <h4><FaCogs /> .NET Platform</h4>
          <p>Proficient using .NET platform to build tools like APIs, service workers, WPF, etc. using C# coding language.</p>
        </div>
        <div className="mb-4">
          <h4><FaDatabase /> Database Design and Development</h4>
          <p>Capable of designing databases from scratch, proficient working with SQL databases like SQL Server.</p>
        </div>
        <div className="mb-4">
          <h4><FaCodeBranch /> CI/CD</h4>
          <p>Experience with Jenkins, TFS, GIT, BITBUCKET to deploy components to different environments.</p>
        </div>
        <div className="mb-4">
          <h4><FaCloud /> Cloud Computing</h4>
          <p>Some experience with some services from Azure.</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Skills;
