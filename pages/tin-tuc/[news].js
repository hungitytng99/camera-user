import { Breadcrumb, Col, Container, InputGroup, Row } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link'
import Head from 'next/head'
import Layout from 'components/Layout/Layout';
import { ImagesPath } from 'constants/ImagesPath';
import Image from 'next/image'
import { faCalendar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailNews = (props) => {
    return (
        <>
            <Head>
                <title>Bai dang</title>
            </Head>
            <Layout>
                <Row>
                    <Col>
                        <Breadcrumb className="product__breadcrumb">
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                Tin tuc
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8}>
                        <div className="detail-news__title text_over_flow_3">
                            Tải KBONE - Hướng Dẫn Cách cài đặt camera KBone trên điện thoại
                        </div>
                        <div className="detail-news__date">
                            <FontAwesomeIcon className="detail-news__date-icon" icon={faCalendarAlt} />
                            <div className="detail-news__date-detail">29/07/2021</div>
                        </div>
                        <div className="detail-news__content">
                            sas
                        </div>
                    </Col>
                    <Col md={4} className="hide-on-768">

                        <div className="detail-news__other">
                            <div className="category__filter-title">
                                Tin tức khác
                            </div>
                            <ul className="product__news-list">
                                <li className="product__news-item">
                                    <Link href="/">
                                        <a>
                                            <Row className="product__news-row">
                                                <Col lg={3}>
                                                    <div className="product__news-item-img">
                                                        <Image className="detail-news__img" src={ImagesPath.NEWS_THUMB} layout="fill" objectFit="contain" />
                                                    </div>
                                                </Col>
                                                <Col lg={9}>
                                                    <div className="product__news-item-title text_over_flow_2">
                                                        Lắp Đặt Camera Quan Sát Giá Rẻ chỉ từ 300K Cho Gia Đình, Văn Phòng, Cửa Hàng
                                                    </div>
                                                    <div className="detail-news__date">
                                                        <FontAwesomeIcon className="detail-news__date-icon" icon={faCalendarAlt} />
                                                        <div className="detail-news__date-detail">29/07/2021</div>
                                                    </div>

                                                </Col>
                                            </Row>
                                        </a>
                                    </Link>
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
                    </Col>
                </Row>
            </Layout>
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

export default DetailNews