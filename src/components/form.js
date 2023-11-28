import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaInstagram, FaSquareGithub, FaLinkedinIn } from "react-icons/fa6";

const Contact = (props) => {
    if (!props.data) return null;

    const {email, phone, address, social} = props.data;
    const handleChange = (e) =>{
        e.preventDefault();
    }

    const medsos = social.map((sosial) => {
        if (sosial.name === "instagram") {
            return (
              <li key={sosial.name}>
                <a href={sosial.url}>
                  <FaInstagram className="text-light fs-2" />
                </a>
              </li>
            );
          } else if (sosial.name === "github") {
            return (
              <li key={sosial.name}>
                <a href={sosial.url}>
                  <FaSquareGithub className="text-light fs-2" />
                </a>
              </li>
            );
          } else if (sosial.name === "linkedin") {
            return (
              <li key={sosial.name}>
                <a href={sosial.url}>
                  <FaLinkedinIn className="text-light fs-2" />
                </a>
              </li>
            );
          } else {
            return (
              <li key={sosial.name}>
                <a href={sosial.url}>
                  <i></i>
                </a>
              </li>
            );
          }
    })


    return (
        <section id="contact">
            <Container>
                <Row>
                    <div className="hrform">
                        <h3 className="text-white fw-bold text-start">Kontak Form</h3>
                        <hr className="border-5 text-white rounded-5"></hr>
                    </div>
                </Row>
                <Row className="mt-3">
                    <Col md={6}>
                        <Form action="" method="post" id="contactForm" name="contactForm" >
                            <fieldset>
                                <div>
                                    <label htmlFor="contactName">
                                        Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue=""
                                        size="35"
                                        id="contactName"
                                        name="contactName"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactEmail">
                                        Email <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue=""
                                        size="35"
                                        id="contactEmail"
                                        name="contactEmail"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactSubject">No.Handphone</label>
                                    <input
                                        type="text"
                                        defaultValue=""
                                        size="35"
                                        id="contactSubject"
                                        name="contactSubject"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactMessage">
                                        Message <span className="required">*</span>
                                    </label>
                                    <textarea
                                        cols="50"
                                        rows="5"
                                        id="contactMessage"
                                        name="contactMessage"
                                    ></textarea>
                                </div>

                                <div className="text-end">
                                    <Button className="submit text-start">Submit</Button>
                                    <span id="image-loader">
                                        <img alt="" src="images/loader.gif" />
                                    </span>
                                </div>
                            </fieldset>
                        </Form>
                        <div id="message-warning"> Error boy</div>
                        <div id="message-success">
                            <i className="fa fa-check"></i>Your message was sent, thank you!
                            <br />
                        </div>
                    </Col>
                    <Col md={6} className="display-form p-4">
                        <div className="text-start">
                            <div className="text-white">
                                <h3>Alamat dan Kontak</h3>
                                <p>Email : {email}</p>
                                <p>Kontak : {phone}</p>
                                <p>Alamat : {address.city}, {address.state}, {address.zip}</p>
                            </div>
                            <div className="text-white mt-4">
                                <h3>Motivasi</h3>
                                <p>“Kamu tidak perlu menjadi luar biasa untuk memulai, tapi kamu harus memulai untuk menjadi luar biasa.” - Zig Ziglar</p>
                            </div>
                            <div className="text-white mt-4">
                                <h3>Media Sosial</h3>
                                <div className="gap-2 d-flex list-style">
                                    {medsos}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;

