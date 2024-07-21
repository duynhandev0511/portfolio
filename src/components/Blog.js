import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../stylesheet/Blog.css';

// Import ảnh từ thư mục assets
import image1 from '../assets/thumbnail1.jpg';

// Dữ liệu cho các thumbnail
const thumbnails = [
  { src: image1, title: 'Liên hoan Tuổi trẻ sáng tạo TP.HCM', date: 'May 19, 2024', link: 'https://muctim.tuoitre.vn/nhieu-hoat-dong-hap-dan-tai-lien-hoan-tuoi-tre-sang-tao-tphcm-101240518132554576.htm?fbclid=IwZXh0bgNhZW0CMTAAAR0u4_D0AANlUCLW-vmc3Wm4-hEqz_MCqBVSor5JmwCCqCWpu8aj3HbSxs4_aem_51Lt27lpRbd2vrZGYEdbng' },
];

const Blog = () => {
  return (
    <Container id="news" fluid className="secondary-bg">
    <h2 className="Xwork">Recent Blogs</h2>
    <p className="text">
      We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
    </p>
    <Row className="justify-content-center">
      {thumbnails.map((thumb, index) => (
        <Col xs={12} md={6} lg={4} key={index} className="mb-4">
          <a href={thumb.link} target="_blank" rel="noopener noreferrer" className="thumbnail-link">
            <div className="thumbnail-container">
              <img src={thumb.src} alt={`Thumbnail ${index + 1}`} className="thumbnail-image" />
              <div className="thumbnail-tooltip">
                <div className="tooltip-date">{thumb.date}</div>
                <div className="tooltip-title">{thumb.title}</div>
              </div>
            </div>
          </a>
        </Col>
      ))}
    </Row>
  </Container>
  );
}

export default Blog;
