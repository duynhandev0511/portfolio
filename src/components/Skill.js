import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SlideUp from './SlideUp';
import '../stylesheet/Skill.css';

import FigmaIcon from '../assets/figma.png';
import HTMLIcon from '../assets/html.png';
import PythonIcon from '../assets/python.png';
import ReactIcon from '../assets/react.png';
import JavaScriptIcon from '../assets/js.png';

const skills = [
  { icon: FigmaIcon, name: 'Figma' },
  { icon: HTMLIcon, name: 'HTML' },
  { icon: PythonIcon, name: 'Python' },
  { icon: ReactIcon, name: 'React' },
  { icon: ReactIcon, name: 'React Native' },
  { icon: JavaScriptIcon, name: 'JavaScript' }
];

const Skill = () => {
  return (
    <Container id="issue" fluid className="service-bg">
    <h2 className="Xwork">My skills</h2>
    <p className="text">We put your ideas and thus your wishes in the form of a unique project that inspires you and your customers.</p>
    <SlideUp>
      <Row className="justify-content-center">
        {skills.map((skill, index) => (
          <Col xs={6} sm={4} md={3} lg={2} key={index} className="text-center mb-4">
            <div className="skill-item">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <p className="skill-name">{skill.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </SlideUp>
  </Container>
  );
}

export default Skill;
