import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imagen from "../../Assets/Projects/imagen.png";
import xticket from "../../Assets/Projects/xticket.webp";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagen}
              isBlog={false}
              title="Image'n"
              description="Image'n: Where creativity meets precision. We're a multimedia production company dedicated to crafting captivating visual experiences tailored to your unique needs.
               Powered by WordPress and crafted with Elementor, we bring your vision to life with meticulous attention to detail and a passion for innovation. From photography to animation, explore how our seamless integration of technology elevates your online presence and engages your audience like never before."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xticket}
              isBlog={false}
              title="Xticket"
              description="Xticket: Your premier destination for hassle-free ticket purchasing. Built with React, Tailwind CSS, and Express.js, we offer an innovative ecommerce platform that specializes in providing seamless experiences for buying tickets to your favorite events.
               With user-friendly features and secure transactions, Xticket makes event planning effortless and enjoyable."
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
