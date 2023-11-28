import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


const About = (props) => {
  if (!props.data) return null;

  const { description, email, phone, address, education, skills, experience } = props.data;

  const educations = education.map((education, styleeducations) => {
    const educationsstyle = styleeducations === 1 ? {} : { marginBottom: '25px' };
    return (
      <div className="text-start text-white" style={educationsstyle}>
        <h5 className="fw-medium mb-0">{education.jurusan}</h5>
        <div className="d-md-flex gap-2 mt-1">
          <p className="text-primary mb-0">{education.kampus}</p>
          <p className="text-danger mb-2">{education.tahun}</p>
        </div>
        <p className="text-justify mb-0">{education.info}</p>
      </div>
    );
  });

  const skillsList = skills.map((skills, skil, array) => {
    const backgroundColor = getRandomColor();
    const className = "bar-expand " + skills.skil.toLowerCase();
    const width = skills.level;

    const styleskills = skil === array.length - 1 ? {} : { marginBottom: '50px' };

    return (
      <li key={skills.skil} style={styleskills}>
        <span style={{ width, backgroundColor, animation: 'expand 6s ease-in-out' }} className={className}></span>
        <p >{skills.skil}</p>
      </li>
    );
  })

  const experiences = experience.map(function (experience, styleexperience) {
    const experiencestyle = styleexperience === 1 ? {} : { marginBottom: '25px' };

    return (
      <div className="text-start text-white" style={experiencestyle}>
        <h5 className="fw-medium mb-0">{experience.job}</h5>
        <div className="d-md-flex gap-2 mt-1">
          <p className="text-primary mb-0">{experience.nama}</p>
          <p className="text-danger mb-2">{experience.tahun}</p>
        </div>
        <p className="text-justify mb-0">{experience.deskripsi}</p>
      </div>
    );
  });

  return (
    <section>
      <Container>
        <Row>
          <Col md={6} >
            <h2 className="text-start fw-bold pb-2 text-white">Tentang</h2>
            <Fade direction="left" duration={1500} triggerOnce="true">
              <div className="text-justify p-3 shadow-sm rounded-4 border border-1 lh-base mb-3">
                <p className="mb-0 text-white">{description}</p>
              </div>
            </Fade>
          </Col>
          <Col md={6}>
            <Fade direction="right" duration={1500} triggerOnce="true">
              <h4 className="text-start fw-medium pt-2 pb-2 mb-0 text-white">Pendidikan</h4>
              <div className="mt-2 p-3 shadow-sm rounded-4 mb-3 border border-1 ">{educations}</div>
            </Fade>
          </Col>
          <hr className="text-white mt-5"/>
          <Col md={6}>
            <Fade direction="left" duration={1500} triggerOnce="true">
              <h4 className="text-start fw-medium pt-2 pb-2 mb-0 text-white">Skill</h4>
              <div className="text-start p-3 shadow-sm rounded-4 border border-1 mt-2 text-white bars mb-3">
                <ul className="skills">{skillsList}</ul>
              </div>
            </Fade>
          </Col>
          <Col md={6}>
            <Fade direction="right"  duration={1500} triggerOnce="true">
              <h4 className="text-start fw-medium pt-2 pb-2 mb-0 text-white">Pengalaman</h4>
              <div className="mt-2 p-3 shadow-sm rounded-4 border border-1 mt-2">{experiences}</div>
            </Fade>
          </Col>
          <hr className="text-white mt-5 mb-5" />
        </Row>
      </Container>
    </section>
  );
}
export default About;
