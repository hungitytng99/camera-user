import { Col, Container, Row } from 'react-bootstrap'
// import Link from 'next/link'
// import Image from 'next/image'
// import { ImagesPath } from 'constants/ImagesPath';
import React from 'react';

function Footer() {
    return (
        <>
            <footer className="footer__background ">
                <Container className="footer">
                    <Row className="footer-contact">
                        <Col className="footer-contact__item" md={3} sm={12} xs={12}>
                            <div className="footer-contact__item-title ">
                                About Shop
                            </div>
                            <div className="footer-contact__item-underline "></div>
                            <div className="footer-contact__item-content ">
                                Aliquam tempor sagittis neque, vel aliquam risus consectetur vel. Aenean hendrerit, elit a lacinia suscipit, orci mauris vulputate mi, eu interdum nunc diam at ipsum.
                            </div>
                            <ul className="footer-contact__item-icon-list ">
                                <a href=" ">
                                    <i className="footer-contact__item-icon-list -item fab fa-twitter "></i>
                                </a>
                                <a href=" ">
                                    <i className="footer-contact__item-icon-list -item fab fa-linkedin-in "></i>
                                </a>
                                <a href=" ">
                                    <i className="footer-contact__item-icon-list -item fab fa-behance "></i>
                                </a>
                                <a href=" ">
                                    <i className="footer-contact__item-icon-list -item fab fa-dribbble "></i>
                                </a>
                            </ul>
                        </Col>
                        <Col className="footer-contact__item" lg={1} sm={0} xs={0}/>
                        <Col className="footer-contact__item" md={3} sm={12} xs={12}>
                            <div className="footer-contact__item-title ">
                                Navigation
                            </div>
                            <div className="footer-contact__item-underline "></div>
                            <div className="footer-contact__wrapper row ">
                                <ul className="footer-contact__wrapper-list col xl-6 l-6 m-6 sm-6 c-6 ">
                                    <li className="footer-contact__wrapper-item ">
                                        <a href=" " className="footer-contact__wrapper-link ">Home</a>
                                    </li>
                                    <li className="footer-contact__wrapper-item ">
                                        <a href=" " className="footer-contact__wrapper-link ">About Us</a>
                                    </li>
                                    <li className="footer-contact__wrapper-item ">
                                        <a href=" " className="footer-contact__wrapper-link ">Our Blog</a>
                                    </li>
                                    <li className="footer-contact__wrapper-item ">
                                        <a href=" " className="footer-contact__wrapper-link ">Women</a>
                                    </li>
                                    <li className="footer-contact__wrapper-item ">
                                        <a href=" " className="footer-contact__wrapper-link ">Men</a>
                                    </li>
                                    <li className="footer-contact__wrapper-item ">
                                        <a href=" " className="footer-contact__wrapper-link ">Contact us</a>
                                    </li>
                                </ul>
                                <ul className="footer-contact__wrapper-list col xl-6 l-6 m-6 sm-6 c-6 ">
                                    <li className="footer-contact__wrapper-item ">
                                        <a href=" " className="footer-contact__wrapper-link ">FAQs</a>
                                    </li>
                                    <li className="footer-contact__wrapper-item ">
                                        <a href=" " className="footer-contact__wrapper-link ">Featured Brands</a>
                                    </li>
                                    <li className="footer-contact__wrapper-item ">
                                        <a href=" " className="footer-contact__wrapper-link ">Gift Vouchers</a>
                                    </li>
                                    <li className="footer-contact__wrapper-item ">
                                        <a href=" " className="footer-contact__wrapper-link ">Affiliates</a>
                                    </li>
                                    <li className="footer-contact__wrapper-item ">
                                        <a href=" " className="footer-contact__wrapper-link ">Specials Gift</a>
                                    </li>
                                    <li className="footer-contact__wrapper-item ">
                                        <a href=" " className="footer-contact__wrapper-link ">Term & Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="footer-contact__item" lg={1} sm={0} xs={0}/>
                        <Col className="footer-contact__item" md={3} sm={12} xs={12}>
                            <div className="footer-contact__item-title ">
                                Shop Location
                            </div>
                            <div className="footer-contact__item-underline "></div>
                            <ul className="footer-contact__info-list ">
                                <li className="footer-contact__info-item">
                                    <a href="" className="footer-contact__info-link">
                                        <i className="footer-contact__info-icon far fa-map "></i> 500 Hennessy Road Causeway Bay, Hong Kong
                                    </a>
                                </li>
                                <li className="footer-contact__info-item">
                                    <a href="" className="footer-contact__info-link">
                                        <i className="footer-contact__info-icon fas fa-phone-alt "></i> +1 23456789
                                    </a>
                                </li>
                                <li className="footer-contact__info-item">
                                    <a href="" className="footer-contact__info-link">
                                        <i className="footer-contact__info-icon far fa-envelope "></i> contact@yourdomain.com
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div class="footer-contact__item-underline "></div>
                <Container>
                    <footer class="footer">
                        <div class="footer-cpright">
                            <div class="footer-cpright__left ">Shop camera Bắc Ninh, 2021
                            </div>
                        </div>
                    </footer>
                </Container>
            </footer>

        </>
    )
}
export default Footer;