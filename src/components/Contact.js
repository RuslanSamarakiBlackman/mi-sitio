// src/components/Contact.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Container className="text-center my-5">
      <Row>
        <Col>
          <h2>{t('contact.title')}</h2>
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
};

export default Contact;
