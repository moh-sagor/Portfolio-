import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button, Row, Col } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Hiring Information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Dear, Sir/Ma'am</h5>
                <p>
                    I am a <strong style={{ color: 'red' }}>FullStack Developer</strong>. I will create website for you. I'm available for Full time Job.
                </p>
                <hr />
                <Row>
                    <Col sm="6">
                        <a href="https://www.fiverr.com/ruzzahan" target="_blank">
                            <Button className="btn btn-primary">Fiverr</Button>
                        </a>

                    </Col>
                    {/* <Col sm="4">
                        <a href="https://www.fiverr.com/ruzzahan" target="_blank">
                            <Button className="btn btn-success">Upwork</Button>
                        </a>
                    </Col> */}
                    <Col sm="6">
                        <a href="mailto: sagorhassain4@gmail.com" target="_blank">
                            <Button className="btn btn-info">Email</Button>
                        </a>
                    </Col>
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function HireMe() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <a onClick={() => setModalShow(true)}>
                HireMe
            </a>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}


export default HireMe;