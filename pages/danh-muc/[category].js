import { Breadcrumb, Col, Row } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Layout from 'components/Layout/Layout';
import CardWithTitle from 'ui-source/Card/CardWithTitle';
import CardProduct from 'ui-source/Card/CardProduct';
import { categoryService } from 'data-services/category';
import { productService } from 'data-services/product';

const Category = (props) => {
    const { detailCategory = {}, listCategory = [] } = props;
    return (
        <>
            <Head>
                <title>{detailCategory.name}</title>
            </Head>
            <Layout>
                <Row>
                    <Col>
                        <Breadcrumb className="product__breadcrumb">
                            <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                {detailCategory.name}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <CardWithTitle title={detailCategory.name}>
                    <Row>
                        <Col xs={12} md={9}>
                            <Row>
                                {detailCategory.listProduct.map(product => {
                                    return (
                                        <Col key={product.id} xs={12} sm={6} md={6} lg={4}>
                                            <CardProduct product={product} />
                                        </Col>
                                    )
                                })}

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
                                        {
                                            listCategory.map(category => {
                                                return (
                                                    <li key={category.id} className="category__filter-category-item">
                                                        <Link href={category.slug}>
                                                            <a>
                                                                {category.name}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </CardWithTitle>

            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    const { category } = context.query;
    const listCategory = await categoryService.listCategory();
    const detailCategory = await categoryService.detailCategoryBySlug(category);
    const listProduct = await productService.listProductByCategoryId(detailCategory.data.id);
    detailCategory.data = { ...detailCategory.data, listProduct: listProduct.data };
    return {
        props: {
            listCategory: listCategory.data,
            detailCategory: detailCategory.data,
        },
    };
}

export default Category