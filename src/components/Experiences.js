// src/components/Experiences.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Experiences = () => {
  const { t } = useTranslation();

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2>{t('experiences.title')}</h2>
          <div>
            <h3>{t('experiences.solutionsTeamLeader.title')}</h3>
            <p>{t('experiences.solutionsTeamLeader.company')}</p>
            <p>{t('experiences.solutionsTeamLeader.period')}</p>
            <p>{t('experiences.solutionsTeamLeader.description')}</p>
            <ul>
              <li>{t('experiences.solutionsTeamLeader.task1')}</li>
              <li>{t('experiences.solutionsTeamLeader.task2')}</li>
              <li>{t('experiences.solutionsTeamLeader.task3')}</li>
              <li>{t('experiences.solutionsTeamLeader.task4')}</li>
              <li>{t('experiences.solutionsTeamLeader.task5')}</li>
              <li>{t('experiences.solutionsTeamLeader.task6')}</li>
            </ul>
          </div>
          <div>
            <h3>{t('experiences.dotNetDeveloper.title')}</h3>
            <p>{t('experiences.dotNetDeveloper.company')}</p>
            <p>{t('experiences.dotNetDeveloper.period')}</p>
            <p>{t('experiences.dotNetDeveloper.description')}</p>
            <ul>
              <li>{t('experiences.dotNetDeveloper.task1')}</li>
              <li>{t('experiences.dotNetDeveloper.task2')}</li>
              <li>{t('experiences.dotNetDeveloper.task3')}</li>
              <li>{t('experiences.dotNetDeveloper.task4')}</li>
              <li>{t('experiences.dotNetDeveloper.task5')}</li>
              <li>{t('experiences.dotNetDeveloper.task6')}</li>
              <li>{t('experiences.dotNetDeveloper.task7')}</li>
            </ul>
          </div>
          <div>
            <h3>{t('experiences.juniorDeveloper.title')}</h3>
            <p>{t('experiences.juniorDeveloper.company')}</p>
            <p>{t('experiences.juniorDeveloper.period')}</p>
            <p>{t('experiences.juniorDeveloper.description')}</p>
            <ul>
              <li>{t('experiences.juniorDeveloper.task1')}</li>
              <li>{t('experiences.juniorDeveloper.task2')}</li>
              <li>{t('experiences.juniorDeveloper.task3')}</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Experiences;
