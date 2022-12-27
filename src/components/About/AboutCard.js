import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am a computer engineer and software developer currently working at
            a company called Dan Energy as application developer. I have a good
            skill set on web and Mobile app font end-development with strong and
            an up-to-date knowledge to back it. More importantly, a highly
            motivated productive team player who is also fast learner who can
            grasp different skills and knowledge.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Tesfawtsion</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
