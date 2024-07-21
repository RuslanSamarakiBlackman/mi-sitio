import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => (
  <Container className="text-center my-5">
    <Row>
      <Col>
        <h2>Contact me</h2>
        <p>
          <FaEnvelope /> r.leontorres1988@gmail.com
        </p>
        <p>
          <FaPhone /> +52 5518263805
        </p>
      </Col>
    </Row>
  </Container>
);

export default Contact;
