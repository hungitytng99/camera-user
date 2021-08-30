import Layout from 'components/Layout/Layout';
import { ImagesPath } from 'constants/ImagesPath';
import Head from 'next/head';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import CardProduct from 'ui-source/Card/CardProduct';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import CardWithTitle from 'ui-source/Card/CardWithTitle';
import CardReview from 'ui-source/Card/CardReview';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categoryService } from 'data-services/category';
import { productService } from 'data-services/product';

export default function Home(props) {
  const { listHotProduct, listCategoryWithProduct } = props;
  return (
    <>
      <Head>
        <title>Trang chủ</title>
      </Head>
      <Layout>
        <div className="home">
          <Row className="home__carousel">
            <Col xs={12}>
              <Carousel
                autoPlay={true}
                interval={6000}
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
                emulateTouch={true}
              >
                <div className="home__banner-img">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={ImagesPath.HOME_BANNER_1}
                    alt="giang minh viet banner"
                  />
                </div>
                <div className="home__banner-img">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={ImagesPath.HOME_BANNER_2}
                    alt="giang minh viet banner handmade"
                  />
                </div>
                <div className="home__banner-img">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={ImagesPath.HOME_BANNER_3}
                    alt="giang minh viet banner handmade"
                  />
                </div>
              </Carousel>
            </Col>
          </Row>
          <Row>
            <div className="home__text ">
              {/* <p className="home__text-franco ">Siêu khuyến mại</p> */}
              <p className="home__text-feature ">Sản phẩm bán chạy</p>
              <div className="home__text -underline "></div>
            </div>
          </Row>
          <Row>
            {listHotProduct.map((hotProduct) => {
              return (
                <Col key={hotProduct.id} xs={12} sm={6} md={4} lg={3}>
                  <CardProduct product={hotProduct} />
                </Col>
              );
            })}
          </Row>
          {listCategoryWithProduct.map((categoryWithProduct) => {
            return (
              categoryWithProduct.listProduct && (
                <CardWithTitle
                  key={categoryWithProduct.id}
                  title={categoryWithProduct.name}
                  link={categoryWithProduct.slug}
                >
                  <Row>
                    {categoryWithProduct.listProduct.map((product) => {
                      return (
                        <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                          <CardProduct product={product} />
                        </Col>
                      );
                    })}
                  </Row>
                </CardWithTitle>
              )
            );
          })}

          <CardWithTitle title="Cảm nhận của khách hàng">
            <Carousel
              showThumbs={false}
              centerMode={true}
              centerSlidePercentage={50}
              selectedItem={1}
              showIndicators={false}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <div
                    onClick={onClickHandler}
                    title={label}
                    className="home__carousel-arrow-left"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </div>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <div
                    onClick={onClickHandler}
                    title={label}
                    className="home__carousel-arrow-right"
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                )
              }
            >
              <CardReview />
              <CardReview />
              <CardReview />
            </Carousel>
          </CardWithTitle>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  let listCategoryWithProduct = [];
  let listHotProduct = [];
  try {
    listCategoryWithProduct = await categoryService.listCategoryWithProduct(
      {},
      { productsPerPage: 8, pageNumber: 1 },
    );
    listHotProduct = await productService.listHotProduct();
    return {
      props: {
        listHotProduct: listHotProduct.data,
        listCategoryWithProduct: listCategoryWithProduct.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
