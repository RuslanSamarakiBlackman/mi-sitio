import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Experiences = () => (
  <Container className="my-5">
    <Row>
      <Col>
        <h2>Experiences</h2>
        <div>
          <h3>Solutions Team Leader</h3>
          <p>NTT DATA Europe & Latam | May 2022 - May 2024</p>
          <p>
            I worked with the client CITIBANAMEX on behalf of NTT DATA on desktop applications and APIs for the bank's applications. The tasks I performed include the following:
            <ul>
              <li>Adding functionality to the bank's applications (application and database objects).</li>
              <li>Change analysis to validate impacts.</li>
              <li>Bug resolution and QA team support.</li>
              <li>Deployment of applications and DB components using Jenkins.</li>
              <li>Collaborating with people from other countries to resolve various issues that arise during development (specialized teams have server access, and we must raise tickets to resolve these issues).</li>
              <li>Other tasks related to software development.</li>
            </ul>
          </p>
        </div>
        <div>
          <h3>.NET Software Developer</h3>
          <p>Cecoban | March 2019 - April 2022</p>
          <p>
            I worked on digital billing for banks, focusing on the analysis and design of components for different clients. I participated in the migration of CFDI from version 3.3 to 4.0 for billing, as well as in the process for the Carta Porte 2.0 complement, among other projects for generating invoices for various banks.
            <ul>
              <li>Requirements analysis.</li>
              <li>Implementation and deployment of new components.</li>
              <li>Adding functionality and modifications to existing components.</li>
              <li>Bug resolution and QA team support for new requirements.</li>
              <li>Analysis, design, and development of DB components.</li>
              <li>Performance improvement of invoice processing.</li>
              <li>Using more modern frameworks, SOLID principles, and design patterns for new components and improving existing ones.</li>
            </ul>
          </p>
        </div>
        <div>
          <h3>Junior Developer</h3>
          <p>TOWA Software | January 2018 - March 2019</p>
          <p>
            I attended an intensive course on JAVA and C#, where we were taught best programming practices in these languages. We learned to analyze technical requirements to simplify their implementation in code, delegating responsibilities to functions and classes, making them smaller and easier to maintain. We also covered databases in SQL Server and, finally, web services.
            <ul>
              <li>Course on best software practices in JAVA, .NET, and SQL Server.</li>
              <li>Web services.</li>
              <li>Various projects to improve programming skills.</li>
            </ul>
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Experiences;
