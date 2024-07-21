import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SlideUp from './SlideUp';
import '../stylesheet/Work.css';
import image1 from '../assets/Home.jpg';
import image2 from '../assets/SATHome.jpg';
import image3 from '../assets/ChemCardApp.jpg';
import image4 from '../assets/SATApp.jpg';
const projects = [
  {
    image: image1,
    title: 'ChemCard',
    description: 'The project focuses on the method of learning chemistry using flashcards'
  },
  {
    image: image2,
    title: 'SAT UI/UX Design',
    description: 'The project focuses on designing the exam preparation website interface'
  },
  {
    image: image3,
    title: 'ChemCard Application',
    description: 'The project focuses on programming mobile applications for Android and iOS platforms using React Native'
  },
  {
    image: image4,
    title: 'SAT Application',
    description: 'The project focuses on programming mobile applications for Android and iOS platforms using React Native'
  },

];

const Work = () => {

  return (
<Container id="productions" fluid className="work-bg">
    <SlideUp>
      <h2 className="Xwork">My Recent Works</h2>
      <p className="text">My recent website and mobile application projects</p>

      <Row>
        {projects.map((project, index) => (
          <Col xs={12} md={6} key={index} className="mb-4">
            <div className="work-item">
              <img src={project.image} alt={`Project ${index + 1}`} className="img-fluid" />
              <div className="tooltip">
                <h4 className="tooltiptitle">{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </SlideUp>
  </Container>
  );
}

export default Work;
