import { Breadcrumb, Col, Container, InputGroup, Row } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImagesThumb from 'ui-source/Images/ImagesThumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from 'components/ContactForm';
import { useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link'
import Head from 'next/head'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Layout from 'components/Layout/Layout';
import { faGift, faCheckCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import CardWithTitle from 'ui-source/Card/CardWithTitle';
import CardProduct from 'ui-source/Card/CardProduct';
import { ImagesPath } from 'constants/ImagesPath';
import Image from 'next/image'


Modal.setAppElement('#__next');
// detailProduct = {},
const Category = (props) => {
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
                <Row>
                    <Col>
                        <Breadcrumb className="product__breadcrumb">
                            <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                Tên category
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <CardWithTitle title="Camera dahua">

                </CardWithTitle>
                <Row>
                    <Col xs={12} md={9}>
                        <Row>
                            <Col xs={12} sm={6} md={6} lg={4}>
                                <CardProduct />
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={4}>
                                <CardProduct />
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={4}>
                                <CardProduct />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} className="hide-on-768">
                        <div className="category__filter">
                            <div className="category__filter-price">
                                <div className="category__filter-title">
                                    Lọc theo giá
                                </div>
                                <ul className="category__filter-price-list">
                                    <li className="category__filter-price-item">
                                        <input type="radio" id="price-1" name="price" value="30" />
                                        <label htmlFor="price-1">Dưới 1 triệu</label>
                                    </li>
                                    <li className="category__filter-price-item">
                                        <input type="radio" id="price-2" name="price" value="30" />
                                        <label htmlFor="price-2">Từ 1-2 triệu</label>
                                    </li>
                                    <li className="category__filter-price-item">
                                        <input type="radio" id="price-3" name="price" value="30" />
                                        <label htmlFor="price-3">Từ 2-4 triệu</label>
                                    </li>
                                    <li className="category__filter-price-item">
                                        <input type="radio" id="price-3" name="price" value="30" />
                                        <label htmlFor="price-3">Hơn 4 triệu</label>
                                    </li>
                                </ul>
                            </div>
                            <div className="category__filter-category">
                                <div className="category__filter-title">
                                    Danh mục sản phẩm
                                </div>
                                <ul className="category__filter-category-list">
                                    <li className="category__filter-category-item">
                                        Danh mục
                                    </li>
                                    <li className="category__filter-category-item">
                                        Danh mục
                                    </li>
                                    <li className="category__filter-category-item">
                                        Danh mục
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Layout>
            <Modal
                isOpen={contactModal}
                onRequestClose={hideContactModal}
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="contact-form__header">
                    <div className="contact-form__header-text">
                    Để lại thông tin của bạn
                        <span>Chúng tôi sẽ liên lạc với bạn sớm nhất có thể</span>
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

export default Category