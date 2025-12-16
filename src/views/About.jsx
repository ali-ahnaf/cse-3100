import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="container mt-5 about-us-container">
      <div className="p-5 mb-4 rounded-3 about-header">
        <div className="container-fluid py-5 text-center">
          <h1 className="display-4 fw-bold">About Purrfect Adoption</h1>
          <p className="fs-4">Your number one source for finding your new furry best friend. We're dedicated to giving you the very best of cat adoption services, with a focus on ease of use, transparency, and a loving forever home for every cat.</p>
        </div>
      </div>

      <Row className="mb-5 text-center">
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <i className="fas fa-bullseye card-icon"></i>
              <Card.Title as="h2">Our Mission</Card.Title>
              <Card.Text>
                Our mission is to connect loving families with cats in need of a home. We believe every cat deserves a safe, happy, and healthy environment, and we strive to make the adoption process as smooth and joyful as possible.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <i className="fas fa-eye card-icon"></i>
              <Card.Title as="h2">Our Vision</Card.Title>
              <Card.Text>
                To create a world where every adoptable cat finds a forever home and lives a life full of love and care.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="team-section">
        <div className="text-center mb-5">
          <h2>Meet the Team</h2>
          <p className="lead">The passionate people behind Purrfect Adoption</p>
        </div>

        <Row>
          <Col md={4} className="mb-4">
            <div className="team-member">
              <div className="team-member-img" style={{ backgroundImage: `url(https://placekitten.com/g/300/300)` }}></div>
              <div className="team-member-info">
                <h5>Alex Doe</h5>
                <p>CEO & Founder</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="team-member">
              <div className="team-member-img" style={{ backgroundImage: `url(https://placekitten.com/g/301/301)` }}></div>
              <div className="team-member-info">
                <h5>Jane Smith</h5>
                <p>Head of Operations</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="team-member">
              <div className="team-member-img" style={{ backgroundImage: `url(https://placekitten.com/g/302/302)` }}></div>
              <div className="team-member-info">
                <h5>Sam Wilson</h5>
                <p>Lead Developer</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="cta-section text-center p-5">
        <h2 className="mb-3">Ready to Find Your Purrfect Match?</h2>
        <p className="lead mb-4">Browse our available cats and start your adoption journey today.</p>
        <Button as={Link} to="/available-cats" variant="primary" size="lg">View Available Cats</Button>
      </div>
    </div>
  );
};

export default About;
