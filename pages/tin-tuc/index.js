import { Breadcrumb, Col, Container, InputGroup, Row } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link'
import Head from 'next/head'
import Layout from 'components/Layout/Layout';
import { ImagesPath } from 'constants/ImagesPath';
import Image from 'next/image'
import { faCalendar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const News = (props) => {
    return (
        <>
            <Head>
                <title>Bai dang</title>
            </Head>
            <Layout>
                <Row className="news__header">
                    <h3 className="news__header-title">
                        Tin tức
                    </h3>
                    <div className="news__decorate">
                        <div className="news__decorate-img-box">
                            <Image className="news__decorate-img" src={ImagesPath.NEWS_DECORATE} alt="trang tri tin tuc" layout="fill" />
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <Link href="/tin-tuc/a">
                            <a className="news__link">
                                <div className="news__image-box">
                                    <Image className="news__image" src={ImagesPath.NEWS_IMAGE} alt="trang tri tin tuc" layout="fill" />
                                </div>
                                <div className="news__date">
                                    <FontAwesomeIcon className="news__date-icon" icon={faCalendarAlt} />
                                    <div className="news__date-detail">29/07/2021</div>
                                </div>
                                <div className="news__title text_over_flow_3">
                                    Tải KBONE - Hướng Dẫn Cách cài đặt camera KBone trên điện thoạiTải KBONE - Hướng Dẫn Cách cài đặt camera KBone trên điện thoạiTải KBONE - Hướng Dẫn Cách cài đặt camera KBone trên điện thoại
                                </div>
                            </a>
                        </Link>
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

export default News