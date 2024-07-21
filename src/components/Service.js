import React from 'react';
import { Container } from 'react-bootstrap';

const Service = () => {
  return (
    <Container id="projects" fluid className=" service-bg">
      <h2 className="title" id="title">My Quality Services</h2>
      <p className="text">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
      <table className="custom-table">
        <tbody>
          <tr>
            <td className="jobs">01</td>
            <td className="jobs">UI/UX Design</td>
            <td className="introduction">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</td>
          </tr>
          <tr>
            <td className="jobs">02</td>
            <td className="jobs">Web Design</td>
            <td className="introduction">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</td>
          </tr>
          <tr>
            <td className="jobs">03</td>
            <td className="jobs">App Design</td>
            <td className="introduction">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</td>
          </tr>
        </tbody>
      </table>
    </Container>

  );
}

export default Service;
