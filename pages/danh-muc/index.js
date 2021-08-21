import { Breadcrumb, Col, Row } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from 'components/ContactForm';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link'
import Head from 'next/head'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Layout from 'components/Layout/Layout';
import CardWithTitle from 'ui-source/Card/CardWithTitle';
import CardProduct from 'ui-source/Card/CardProduct';
import Image from 'next/image'
import { categoryService } from 'data-services/category';
import { productService } from 'data-services/product';


Modal.setAppElement('#__next');
const Category = (props) => {
    const { listAllProduct = [], listCategory = [], hasMore = false } = props;
    const [listAllProductState, setListAllProductState] = useState(listAllProduct);
    const [hasMoreState, setHasMoreState] = useState(hasMore);
    const [nextPage, setNextPage] = useState(4);
    const getMoreProduct = async (e) => {
        let nextPage = e.target.dataset.nextpage;
        const moreProduct = await productService.listProduct({ productsPerPage: 3, pageNumber: nextPage });
        setListAllProductState([...listAllProductState, ...moreProduct.data]);
        setNextPage(++nextPage);
    }
    const handleFilterPrice = (e) => {
        const filterValue = e.target.value;
        console.log(filterValue);
    }

    useEffect(() => {
        const checkShowHasMore = async () => {
            const moreProduct = await productService.listProduct({ productsPerPage: 3, pageNumber: nextPage });
            setHasMoreState(moreProduct.data.length > 0);
        };
        checkShowHasMore();
    }, [nextPage])
    return (
        <>
            <Head>
                <title>Tất cả sản phẩm</title>
            </Head>
            <Layout>
                <Row>
                    <Col>
                        <Breadcrumb className="product__breadcrumb">
                            <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                Tất cả sản phẩm
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <CardWithTitle title="Tất cả sản phẩm">
                    <Row>
                        <Col xs={12} md={9}>
                            <Row>
                                {listAllProductState.map(product => {
                                    return (
                                        <Col key={product.id} xs={12} sm={6} md={6} lg={4}>
                                            <CardProduct product={product} />
                                        </Col>
                                    )
                                })}
                                {
                                    hasMoreState ? <div className="product__has-more-box">
                                        <div className="product__has-more" data-nextpage={nextPage} onClick={getMoreProduct}>
                                            Xem thêm
                                        </div>
                                    </div> : ""
                                }

                            </Row>
                        </Col>
                        <Col md={3} className="hide-on-768">
                            <div className="category__filter">
                                <div className="category__filter-price">
                                    <div className="category__filter-title">
                                        Lọc theo giá
                                    </div>
                                    <ul className="category__filter-price-list" onChange={handleFilterPrice}>
                                        <li className="category__filter-price-item">
                                            <input type="radio" id="price-1" name="price" value="1" />
                                            <label htmlFor="price-1">Dưới 1 triệu</label>
                                        </li>
                                        <li className="category__filter-price-item">
                                            <input type="radio" id="price-2" name="price" value="2" />
                                            <label htmlFor="price-2">Từ 1-2 triệu</label>
                                        </li>
                                        <li className="category__filter-price-item">
                                            <input type="radio" id="price-3" name="price" value="3" />
                                            <label htmlFor="price-3">Từ 2-4 triệu</label>
                                        </li>
                                        <li className="category__filter-price-item">
                                            <input type="radio" id="price-3" name="price" value="4" />
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

export async function getServerSideProps() {
    const listCategory = await categoryService.listCategory();
    const listProduct = await productService.listProduct({ productsPerPage: 18, pageNumber: 1 });
    // Check has next page
    const listNextProduct = await productService.listProduct({ productsPerPage: 6, pageNumber: 4 });
    let hasMore = false;
    if (listNextProduct.data.length > 0) {
        hasMore = true;
    }
    return {
        props: {
            listCategory: listCategory.data,
            listAllProduct: listProduct.data,
            hasMore: hasMore,
        },
    };
}

export default Category