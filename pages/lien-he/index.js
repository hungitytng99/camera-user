import { Col, Collapse, Row } from 'react-bootstrap';
import Layout from 'components/Layout/Layout';
import Head from 'next/head';
import ContactForm from 'components/ContactForm';
import {
  faEnvelope,
  faMapMarked,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Search = (props) => {
  const {} = props;
  const [collapseOpen, setCollapseOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Liên hệ</title>
      </Head>
      <Layout>
        <Row className="contact-page">
          <Col sm={12} md={6}>
            <div className="contact-page__address">
              <div className="contact-page__address-detail">
                Trụ sở TP Bắc Ninh
              </div>
              <ul className="contact-page__address-list">
                <li className="contact-page__address-item">
                  <FontAwesomeIcon
                    className="contact-page__address-icon"
                    icon={faMapMarked}
                  />
                  <span>Địa chỉ: </span>
                  120 Ngô Khê, Phường Phong Khê, TP Bắc Ninh
                </li>
                <li className="contact-page__address-item">
                  <FontAwesomeIcon
                    className="contact-page__address-icon"
                    icon={faPhoneAlt}
                  />
                  <span>Điện thoại: </span>
                  <soan>0986 795 960</soan>
                </li>
                <li className="contact-page__address-item">
                  <FontAwesomeIcon
                    className="contact-page__address-icon"
                    icon={faEnvelope}
                  />
                  <span>Email: </span>
                  camerazone.bacninh@gmail.com
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="contact-page__form">
              <ContactForm />
            </div>
            <div className="contact-page__collapse">
              <div className="contact-page__collapse-title">
                Tại sao chọn Camera Anh Quang?
              </div>
              <div className="contact-page__collapse-content">
                Camera Anh Quang chuyên Phân phối Sỉ, Lẻ các dòng{' '}
                <span>
                  Camera an ninh wifi không dây & camera có dây cao cấp được ưa
                  chuộng nhất hiện nay
                </span>{' '}
                & Dịch vụ Lắp đặt Camera giám sát UY TÍN nhất hiện nay. Với
                phương châm “Mang đến khách hàng giá trị tốt nhất, nâng cao cuộc
                sống tiện nghi”, Hải Nam không ngừng tìm kiếm và cung cấp{' '}
                <span>
                  SẢN PHẨM CHÍNH HÃNG – CHẤT LƯỢNG CAO – GIÁ CẢ PHẢI CHĂNG
                </span>{' '}
                Cùng với những{' '}
                <span>CHÍNH SÁCH CHĂM SÓC khách hàng THẬT CHU ĐÁO</span>:
                <ul className="contact-page__collapse-list">
                  <li className="contact-page__collapse-item">
                    Hàng chính hãng GIÁ SIÊU MỀM GIẢM LIÊN TỤC
                  </li>
                  <li className="contact-page__collapse-item">
                    Bảo trì vĩnh viễn, Bảo hành chu đáo
                  </li>
                  <li className="contact-page__collapse-item">
                    Hỗ trợ qua điện thoại nhiệt tình, tận tâm
                  </li>
                  <li className="contact-page__collapse-item">
                    Giao hàng & Hướng dẫn sử dụng tại nhà
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row></Row>
      </Layout>
    </>
  );
};
export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
export default Search;
