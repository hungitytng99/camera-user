import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { categoryService } from 'data-services/category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMap,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const [listCategory, setListCategory] = useState([]);
  useEffect(() => {
    const getListCategory = async () => {
      const listCategoryTmp = await categoryService.listCategory();
      setListCategory(listCategoryTmp.data);
    };
    getListCategory();
  }, []);
  return (
    <>
      <footer className="footer__background ">
        <Container className="footer">
          <Row className="footer-contact">
            <Col className="footer-contact__item" md={3} sm={12} xs={12}>
              <div className="footer-contact__item-title ">
                Thông tin về shop
              </div>
              <div className="footer-contact__item-underline "></div>
              <div className="footer-contact__item-content ">
                <strong>Camera Anh Quang</strong> phân phối Camera Wifi giá sỉ
                và lắp đặt Camera giám sát uy tín. Cam kết sản phẩm chính hãng,
                dịch vụ chuyên nghiệp, giá tốt nhất.
                <div>
                  <strong>Thời gian làm việc:</strong> 8h-17h Tất cả cá ngày
                  trong tuần
                </div>
                <div>
                  <strong>Thông tin liên hệ:</strong> Công ty Anh Quang
                </div>
                <div>
                  <strong>Liên hệ tư vấn:</strong> 0986 795 960
                </div>
                <strong>Hỗ trợ kĩ thuật:</strong> 0981 199 350
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
            <Col className="footer-contact__item" lg={1} sm={0} xs={0} />
            <Col className="footer-contact__item" md={3} sm={12} xs={12}>
              <div className="footer-contact__item-title ">Danh mục</div>
              <div className="footer-contact__item-underline "></div>
              <div className="footer-contact__wrapper row ">
                <ul className="footer-contact__wrapper-list col xl-6 l-6 m-6 sm-6 c-6 ">
                  {listCategory.map((category) => {
                    return (
                      <li
                        key={category.id}
                        className="footer-contact__wrapper-item "
                      >
                        <Link href={category.slug}>
                          <a className="footer-contact__wrapper-link">
                            {category.name}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col className="footer-contact__item" lg={1} sm={0} xs={0} />
            <Col className="footer-contact__item" md={3} sm={12} xs={12}>
              <div className="footer-contact__item-title ">Địa chỉ shop</div>
              <div className="footer-contact__item-underline "></div>
              <ul className="footer-contact__info-list ">
                <li className="footer-contact__info-item">
                  <Link href="">
                    <a href="" className="footer-contact__info-link">
                      <FontAwesomeIcon
                        className="footer-contact__info-icon"
                        icon={faMap}
                      />{' '}
                      120 Ngô Khê, Phường Phong Khê, TP Bắc Ninh
                    </a>
                  </Link>
                </li>
                <li className="footer-contact__info-item">
                  <Link href={{ pathname: 'tel:84966854224' }}>
                    <a className="footer-contact__info-link">
                      <FontAwesomeIcon
                        className="footer-contact__info-icon"
                        icon={faPhoneAlt}
                      />
                      0986 795 960
                    </a>
                  </Link>
                </li>
                <li className="footer-contact__info-item">
                  <Link href={{ pathname: 'mailto:sales@giangminhviet.com' }}>
                    <a className="footer-contact__info-link">
                      <FontAwesomeIcon
                        className="footer-contact__info-icon"
                        icon={faEnvelope}
                      />{' '}
                      camerazone.bacninh@gmail.com
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="footer-contact__item-underline "></div>
        <Container>
          <footer className="footer">
            <div className="footer-cpright">
              <div className="footer-cpright__left ">
                Camera Anh Quang, 2021
              </div>
            </div>
          </footer>
        </Container>
      </footer>
    </>
  );
}
export default Footer;
