import * as React from "react";
import {
    Button,
    Card,
    CardBody,
    Collapse,
    Row,
    Col
} from "reactstrap";
// import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Resume.css";

export default function Resume() {
    const [state, setState] = React.useState({
        articleOpen: "",
        moreInfoOpen: true,
    });
    const { article, moreInfoOpen } = state;

    const handleArticleOpen = (article) => {
        setState((prevState) => ({
            ...prevState,
            article,
        }));
    };

    return (
        <div
            className="container"
            style={{ paddingLeft: ".5rem", justifyContent: "center" }}
        >
            <h1 style={{ textAlign: "center", fontFamily: "PoppinsSemiBold" }}>
                Education
            </h1>
            <Collapse isOpen={moreInfoOpen}>
                <Card className="card">
                    <CardBody className="card-body">
                        <div className="section section-articles">
                            <div className="articles-buttons">
                                <Row>
                                    <Col sm="4">
                                        <button
                                            className="article2-button"
                                            // color="primary"
                                            onClick={() => handleArticleOpen("1")}
                                        >
                                            SSC
                                        </button>
                                    </Col>
                                    <Col sm="4">
                                        <button
                                            className="article2-button"
                                            // color="secondary"
                                            onClick={() => handleArticleOpen("2")}
                                        >
                                            HSC
                                        </button>
                                    </Col>
                                    <Col sm="4">
                                        <button
                                            className="article2-button"
                                            color="primary"
                                            onClick={() => handleArticleOpen("3")}
                                        >
                                            B.Sc
                                        </button>
                                    </Col>
                                </Row>
                            </div>

                            <Collapse isOpen={article === "3"}>
                                <aside className="profile-card">
                                    <header>
                                        <a target="_blank" href="#">
                                            <img
                                                src={require("../../assets/Resume/daffodil.jpg")}
                                                className="hoverZoomLink"
                                            />
                                        </a>

                                        <h1>Daffodil International University</h1>

                                        <h2>Bachelor of Science in CSE</h2>
                                    </header>

                                    <div className="profile-bio">
                                        <p>
                                            <strong>Session : </strong>2018-2022
                                        </p>
                                        <p>
                                            <strong>CGPA : </strong>3.71 out of 4
                                        </p>
                                    </div>
                                </aside>
                            </Collapse>

                            <Collapse isOpen={article === "2"}>
                                <aside className="profile-card">
                                    <header>
                                        <a target="_blank" href="#">
                                            <img
                                                src={require("../../assets/Resume/hsc.jpg")}
                                                className="hoverZoomLink"
                                            />
                                        </a>

                                        <h1>Govt. shaheed bulbul college, pabna</h1>

                                        <h2>Higher Secondary School Certificate</h2>
                                    </header>

                                    <div className="profile-bio">
                                        <p>
                                            <strong>Session : </strong>2016
                                        </p>
                                        <p>
                                            <strong>GPA : </strong>4.98 out of 5
                                        </p>
                                    </div>
                                </aside>
                            </Collapse>
                            <Collapse isOpen={article === "1"}>
                                <aside className="profile-card">
                                    <header>
                                        <a target="_blank" href="#">
                                            <img
                                                src={require("../../assets/Resume/ssc.png")}
                                                className="hoverZoomLink"
                                            />
                                        </a>

                                        <h1>Pabna cadet collegiate school</h1>

                                        <h2>Secondary School Certificate</h2>
                                    </header>

                                    <div className="profile-bio">
                                        <p>
                                            <strong>Session : </strong>2014
                                        </p>
                                        <p>
                                            <strong>GPA : </strong>5 out of 5
                                        </p>
                                    </div>
                                </aside>
                            </Collapse>
                        </div>
                        <br /> <br />
                    </CardBody>
                </Card>
            </Collapse>
            <br /> <br />
        </div>
    );
}
