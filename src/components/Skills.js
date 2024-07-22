// src/components/Skills.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCogs, FaDatabase, FaCodeBranch, FaCloud } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2>{t('skills.title')}</h2>
          <div className="mb-4">
            <h4><FaCogs /> {t('skills.dotNet')}</h4>
            <p>{t('skills.dotNetDescription')}</p>
          </div>
          <div className="mb-4">
            <h4><FaDatabase /> {t('skills.database')}</h4>
            <p>{t('skills.databaseDescription')}</p>
          </div>
          <div className="mb-4">
            <h4><FaCodeBranch /> {t('skills.ciCd')}</h4>
            <p>{t('skills.ciCdDescription')}</p>
          </div>
          <div className="mb-4">
            <h4><FaCloud /> {t('skills.cloud')}</h4>
            <p>{t('skills.cloudDescription')}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
