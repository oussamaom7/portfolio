import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Oussama Maache </span> .
            
            <br />
            I am Full Stack MERN Developer passionate about designing innovative solutions to enhance user experiences.
             Aspiring to play an active role as a software engineer in stimulating projects within a dynamic company, 
             while persistently pursuing the continuous acquisition and refinement of my skills in software development.
            <br />
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basket-Ball
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Maache</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
