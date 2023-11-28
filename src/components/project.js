import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Zoom } from "react-awesome-reveal";

const Project = (props) => {
    if (!props.data) return null;
    const {card} = props.data;
    const cardProject = card.map((carditem, index) => {
        let projectimg = "assets/project/" + carditem.cardimg;
        const delay = index * 500;
        return (
            <Col md={4} sm={6} className="mb-4" key={index}>
                <Zoom cascade delay={delay} triggerOnce={true}>
                <Card className="cardProject">
                    <CardImg src={projectimg}></CardImg>
                    <CardBody className="text-start">
                        <CardTitle className="fs-4 fw-bold">{carditem.titleJob}</CardTitle>
                        <Button href={carditem.url} className="mt-2 w-100 bg-dark border-dark">Lihat</Button>
                    </CardBody>
                </Card>
                </Zoom>
            </Col>
        )
    })
    return (
        <section id="project">
            <Container>
                <Row className="text-center justify-content-center">
                    <div className="project-hr">
                    <h2 className="fw-bold pb-2 text-white">Project</h2>
                    <hr className="border-5 text-white rounded-5"></hr>
                    </div>  
                </Row>
                <Row className="mt-4 justify-content-around">
                    {cardProject}
                </Row>
            </Container>
        </section>
    )
}

export default Project


