import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImagesThumb from 'ui-source/Images/ImagesThumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from 'components/ContactForm';
import { useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link'
import Head from 'next/head'
import { faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import Layout from 'components/Layout/Layout';
import { faGift, faCheckCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import CardWithTitle from 'ui-source/Card/CardWithTitle';
import CardProduct from 'ui-source/Card/CardProduct';
import { ImagesPath } from 'constants/ImagesPath';
import Image from 'next/image'


Modal.setAppElement('#__next');
// detailProduct = {},
const Product = (props) => {
    const { mainCategoryAndSubCategory = {}, relatedProducts = {} } = props;
    const [contactModal, setContactModal] = useState(false);

    const detailProduct = {
        "id": 104,
        "title": "TRỌN BỘ 7 CAMERA KBVISION 2MP FULL HD 1080P CHÍNH HÃNG IP67, IR 20M",
        "model": "SGWD061",
        "description": "Product name: African Seagrass Hanging Decor Basket",
        "image": [
            {
                "src": "https://sc04.alicdn.com/kf/Hcb0089c454a7484b93488c5677791273O.jpg",
                "alt": "Hanging Woven Seagrass Flat Baskets Round Boho Wall Basket Decor for Living Room or Bedroom_708"
            },
            {
                "src": "https://sc04.alicdn.com/kf/S863e8415e3e74ce49b073d97f68d809cc.jpg",
                "alt": "Hanging Woven Seagrass Flat Baskets Round Boho Wall Basket Decor for Living Room or Bedroom_510"
            },
            {
                "src": "https://sc04.alicdn.com/kf/Sc2c9a318fe584889b0ffe58066e72e563.jpg",
                "alt": "Hanging Woven Seagrass Flat Baskets Round Boho Wall Basket Decor for Living Room or Bedroom_449"
            },
            {
                "src": "https://sc04.alicdn.com/kf/Sb81d0e39f4a441cdbccb56ecda08cc202.jpg",
                "alt": "Hanging Woven Seagrass Flat Baskets Round Boho Wall Basket Decor for Living Room or Bedroom_674"
            },
            {
                "src": "https://sc04.alicdn.com/kf/S0657831e2aac41669bba5778f23e477dQ.jpg",
                "alt": "Hanging Woven Seagrass Flat Baskets Round Boho Wall Basket Decor for Living Room or Bedroom_617"
            }
        ],
        "new_price": "5,050,000đ",
        "old_price": "5,050,000đ",
        "material": "Seagrass",
        "category": "Furniture & Decor",
        "slug": "Hanging_Woven_Seagrass_Flat_Baskets_Round_Boho_Wall_Basket_Decor_for_Living_Room_or_Bedroom_1629195681630",
        "main_category_id": 50
    }

    const showContactModal = (e) => {
        e.stopPropagation();
        setContactModal(true);
    }

    const hideContactModal = () => {
        setContactModal(false);
    }

    const closeContactForm = (e) => {
        e.preventDefault();
        setContactModal(false);
    }
    return (
        <>
            <Head>
                <title>{detailProduct.title}</title>
            </Head>
            <Layout>
                <div className="product">
                    <Row>
                        <Col>
                            <Breadcrumb className="product__breadcrumb">
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    {detailProduct.category}
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            <div className="product__detail-name">
                                {detailProduct.title}
                            </div>
                        </Col>
                    </Row>
                    <Row className="product__detail">
                        <Col xs={12} md={4}>
                            <ImagesThumb listImages={detailProduct.image} />
                        </Col>
                        <Col xs={12} md={5}>
                            <div className="product__detail-old-price">
                                {detailProduct.old_price}
                            </div>
                            <div className="product__detail-new-price">
                                {detailProduct.new_price}
                            </div>
                            <div className="product__detail-sale">
                                <div className="product__detail-sale-gift">
                                    <FontAwesomeIcon icon={faGift} />
                                    <span>Khuyến mại</span>
                                </div>
                                <ul className="product__detail-sale-list">
                                    <li className="product__detail-sale-item">
                                        <div className="product__detail-sale-icon">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        Hàng chính hãng Full Box mới 100% - Giảm SỐC
                                    </li>
                                    <li className="product__detail-sale-item">
                                        <div className="product__detail-sale-icon">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        Hàng chính hãng Full Box mới 100% - Giảm SỐC
                                    </li>
                                    <li className="product__detail-sale-item">
                                        <div className="product__detail-sale-icon">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        Hàng chính hãng Full Box mới 100% - Giảm SỐC
                                    </li>
                                </ul>
                            </div>
                            <div className="product__detail-special">
                                <div className="product__detail-special-title">
                                    Thông tin nổi bật
                                </div>
                                <div className="product__detail-special-content">
                                    Đây là thông tin nổi bật của sản phẩm
                                </div>
                            </div>
                            <div className="product__detail-contact">
                                <div onClick={showContactModal} className="product__detail-contact-link">
                                    Liên hệ ngay
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div className="product__shop">
                                <div className="product__shop-reason">
                                    <div className="product__shop-reason-title">
                                        Tại sao chọn CameraXXXXXXX?
                                    </div>
                                    <ul className="product__shop-reason-list">
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Hàng chính hãng, Mới 100%
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Giá tốt nhất, thương hiệu Uy Tín.
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Nhân viên tư vấn tận tình.
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Đội ngũ lắp đặt chuyên nghiệp
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Giao hàng Siêu Tốc 30 phút - 4H
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Đổi mới 30 ngày miễn phí.
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Hỗ trợ Lắp đặt tại nhà TPHCM
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Thanh toán an toàn COD Toàn Quốc
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Bảo hành chu đáo bằng số điện thoại
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Hỗ trợ kỹ thuật chuyên nghiệp.
                                        </li>
                                    </ul>
                                </div>
                                <div className="product__shop-reason">
                                    <div className="product__shop-reason-title">
                                        Hotline hỗ trợ
                                    </div>
                                    <ul className="product__shop-reason-list">
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Hotline tư vấn: <strong>098.1234.5678</strong>
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Hotline tư vấn: <strong>098.1234.5678</strong>
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Hotline hỗ trợ: <strong>098.1234.5678</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="product__related-product">
                        <CardWithTitle title="Sản phẩm cùng phân khúc">
                            <Row>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <CardProduct />
                                </Col>
                            </Row>
                        </CardWithTitle>
                    </Row>
                    <Row>
                        <Col lg={8} className="product__description">
                            Đây là thông tin chi tiết sản phẩm:
                            Trọn bộ 7 camera KBVision 2MP đáp ứng các giải pháp lắp đặt camera cho các không gian lớn, nếu bạn đang tìm một giải pháp giám sát an ninh giá rẻ với chất lượng hình ảnh Full HD, độ ổn định cao, có khả năng quan sát ban đêm rõ nét thì trọn bộ camera này sẽ chắc chắn làm bạn hài lòng.
                            Hiện tại Hải Nam đang có chương trình khuyến mãi lên đến 59% đối với một số trọn bộ camera có dây mang thương hiệu KBVision, Dahua, Hikvision,.. Mời bạn tham khảo thêm
                        </Col>
                        <Col lg={4} className="product__news">
                            <div className="product__news-title">
                                Tin tức mới
                            </div>
                            <ul className="product__news-list">
                                <li className="product__news-item">
                                    <Link href="/">
                                        <a>
                                            <Row className="product__news-row">
                                                <Col lg={3}>
                                                    <div className="product__news-item-img">
                                                        <Image src={ImagesPath.NEWS_THUMB} layout="fill" objectFit="contain" />
                                                    </div>
                                                </Col>
                                                <Col lg={9}>
                                                    <div className="product__news-item-title text_over_flow_2">
                                                        Lắp Đặt Camera Quan Sát Giá Rẻ chỉ từ 300K Cho Gia Đình, Văn Phòng, Cửa Hàng
                                                    </div>
                                                    <div className="product__news-date">
                                                        <FontAwesomeIcon className="product__news-date-icon" icon={faCalendarAlt} />
                                                        <div className="product__news-date-product">29/07/2021</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>

                    <Row className="product__contact-form">
                        <div className="product__contact-form-header">Gửi cho chúng tôi thông tin của bạn</div>
                        <ContactForm
                            productSlug={detailProduct.slug}
                            productId={detailProduct.id}
                            productName={detailProduct.title} />
                    </Row>
                </div>
            </Layout>

            <Modal
                isOpen={contactModal}
                onRequestClose={hideContactModal}
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="contact-form__header">
                    <div className="contact-form__header-text">
                        Leave your contact information
                        <span>We'll contact you as soon as possible</span>
                    </div>
                    <div onClick={hideContactModal} className="contact-form__header-close">
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <div className="contact-form__form">
                    <ContactForm closeContact={closeContactForm} />
                </div>
            </Modal>
        </>
    )
}

export async function getServerSideProps(context) {
    // const { slug } = context.params;
    // const mainCategoryWithSub = await mainCategoryService.listCategoryWithSubCategory();
    // const detailProduct = await productService.detailProductBySlugAsync(slug);

    // const relatedProducts = await productService.listProductBySubCategoryName(
    //     { category: detailProduct.data.category, category: detailProduct.data.sub_category, productsPerPage: 4, pageNumber: 1 }
    // );
    return {
        props: {
            // mainCategoryAndSubCategory: mainCategoryWithSub.data,
            // detailProduct: detailProduct.data,
            // relatedProducts: relatedProducts.data,
        },
    };
}

export default Product