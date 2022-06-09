
import React from "react";
import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import './AboutMe.css';

export default function AboutMe() {
    return (
        <div className="container">
            <h1 style={{ textAlign: "center", fontFamily: "PoppinsSemiBold" }}>
                About Me
            </h1>
            <Row>
                <Col sm="6">
                    <Card body>
                        <img
                            style={{
                                height: "37.6rem",
                                width: "32.6rem",
                                paddingLeft: "4.5rem",
                                borderRadius: "4.5rem",
                            }}
                            src={require("../../assets/AboutMe/s6_u.jpg")}
                            alt="Sagor Hossain"
                        />
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle tag="h5">Hi, I'm Md Sagor Hossain</CardTitle>
                        <CardText style={{ textAlign: "justify" }}>
                            I Complete my Bachelor's Degree from Daffodil International
                            University in Computer Science & Engineering <b>(CSE)</b>. I am a
                            professional Web Developer and Designer. I develop eye catching
                            website with backend functionality. My work area is,

                            <ul style={{ listStyleType: "circle", paddingTop: "2rem", paddingBottom: "1.7rem" }}>
                                <strong>
                                    <li>Full Stack Developer</li>
                                    <li>React.JS</li>
                                    <li >JavaScript</li>
                                    <li>ReactStrap/Bootstrap</li>
                                    <li>Django</li>
                                    <li>Python Programming</li>
                                    <li>OOP (Object Oriented Programming)</li>
                                    <li>MySQL Database</li>
                                    <li>Firebase Database</li>
                                    <li>Firebase Authentication</li>
                                    <li>Git & GitHub for version control</li>
                                    <li>Clean and Editable Code</li>
                                    <li>Graphics Design</li>
                                    <li>HTML5 and CSS3 </li>

                                </strong>
                            </ul>
                        </CardText>

                        <div class="button2">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <a style={{ textDecoration: 'none', fontSize: '20px' }} href="#">HIRE ME</a>
                        </div>

                    </Card>
                </Col>
            </Row>
            <br />
        </div >
    );
}
