// import ParticlesBg from "particles-bg";
import React, { useEffect, useState } from "react";
import { Fade, Bounce } from "react-awesome-reveal";
import { Container, Navbar, Nav, Col, Button, NavLink } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { FaInstagram, FaSquareGithub, FaLinkedinIn } from "react-icons/fa6";
import Zmage from "react-zmage";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = (props) => {
  if (!props.data) return null;


  const { cv, contact, name, img, social } = props.data;
  const profileimg = "assets/" + img;

  const sosmed = social.map((media) => {
    if (media.name === "instagram") {
      return (
        <li key={media.name}>
          <a href={media.url}>
            <FaInstagram className="text-light fs-2" />
          </a>
        </li>
      );
    } else if (media.name === "github") {
      return (
        <li key={media.name}>
          <a href={media.url}>
            <FaSquareGithub className="text-light fs-2" />
          </a>
        </li>
      );
    } else if (media.name === "linkedin") {
      return (
        <li key={media.name}>
          <a href={media.url}>
            <FaLinkedinIn className="text-light fs-2" />
          </a>
        </li>
      );
    } else {
      return (
        <li key={media.name}>
          <a href={media.url}>
            <i></i>
          </a>
        </li>
      );
    }
  });

  const menuNav = [
    {
      namanav: "Home",
      path: "home"
    },
    {
      namanav: "About",
      path: "about"
    },
    {
      namanav: "Project",
      path: "project"
    },
    {
      namanav: "Contact",
      path: "contact"
    }
  ];

  const navBar = menuNav.map(function (item) {
    return (
      <NavLink key={item.namanav} className="text-white text-start">
        <ScrollLink to={item.path} spy={true} smooth={true} offset={-70} duration={500}>
          {item.namanav}
        </ScrollLink>
      </NavLink>
    );
  });

  return (
    <header>
      <Navbar expand="lg" className="bg-navbar" fixed="top">
        <Container>
          <Navbar.Brand className="text-white">ZanPortofolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navBar}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section id="home">
        <Container>
          <Fade>
            <Zmage src={profileimg} className="size-img bg-dark shadow-lg " />
          </Fade>
          <Col md={12}>
            <Fade bottom>
              <h1 className="text-white fs-4 pt-4">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 35,
                    strings: [name],
                  }}
                />
              </h1>
            </Fade>
            <Bounce top duration={2000} triggerOnce={true}>
              <div className="pt-3">
                <ul className="d-flex ps-0 justify-content-center gap-3 list-style">{sosmed}</ul>
              </div>
            </Bounce>

            <Fade bottom duration={3000} triggerOnce={true}>
              <div className="gap-2 d-flex pt-2 justify-content-center">
                <a href={contact}>
                  <Button className="bg-success border-0 bg">Contact Me</Button>
                </a>
                <a href={cv}>
                  <Button className="bg-white border-0 text-dark bg">Resume CV</Button>
                </a>
              </div>
            </Fade>
          </Col>
        </Container>
      </section>
    </header>
  );
}

export default Header;


