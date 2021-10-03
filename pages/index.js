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
import { bannerService } from 'data-services/banner';

export default function Home(props) {
  const { listHotProduct, listCategoryWithProduct, listBannerImage } = props;
  return (
    <>
      <Head>
        <title>Trang chủ</title>
      </Head>
      <Layout>
        <div className="home">
          {listBannerImage.length !== 0 && (
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
                  {listBannerImage.map((image, index) => {
                    return (
                      <div key={index} className="home__banner-img">
                        <Image
                          layout="fill"
                          objectFit="cover"
                          src={image}
                          alt="Camera anh quang bac ninh banner"
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </Col>
            </Row>
          )}
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
                  link={`/danh-muc/${categoryWithProduct.slug}`}
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
              <CardReview image="https://res.cloudinary.com/drnl75uiy/image/upload/v1633169191/ybhgu8jhw9huicjf7hky.jpg">
                <span>
                  <p>
                    <strong>Sơ</strong> mở trường đã khoảng 2 năm giờ muốn{' '}
                    <strong>gắn camera để quan sát</strong> để hoạt động một
                    cách hiệu quả nhất. Sơ cũng tham{' '}
                    <em>
                      <strong>
                        khảo nhiều ở trên mạng thì thấy giá thành quá cao,
                      </strong>
                    </em>{' '}
                    khi liên hệ <strong>Anh Quang</strong> tư vấn thì giá thành
                    phù hợp nên quyết đinh chọn Anh Quang. Kỹ thuật làm việc từ
                    sáng rất vất vả nhưng làm việc rất nhiệt tình và vui vẻ…
                  </p>
                </span>
              </CardReview>
              <CardReview image="https://res.cloudinary.com/drnl75uiy/image/upload/v1633169355/dyzac3zehwyuqpiykoxm.jpg">
                <span>
                  <p>
                    Mình tìm thông tin <strong>lắp đặt camera</strong> trên
                    mạng, liên hệ tới Anh Quang thì có 2 bạn nhân viên tư vấn và
                    có kỹ thuật qua khảo sát đều tư vấn nhiệt tình cả. Ở bất cứ
                    công ty cũng kiểm tra giá vài chỗ và thực sự bên{' '}
                    <strong>Anh Quang giá rẻ nhất</strong>. Khi lắp đặt mọi
                    người làm việc nhiệt tình, trong thang điểm về chất lượng
                    dịch vụ thì mình cho 8 thôi bởi quan điểm của mình như thế.
                    Nếu cho 10 thì xuất sắc quá, 8 điểm là giỏi lắm rồi…
                  </p>
                </span>
              </CardReview>
              <CardReview image="https://res.cloudinary.com/drnl75uiy/image/upload/v1633169576/jqvszpch8vqykxqz1ymn.jpg">
                <span>
                  <p>
                    <strong>
                      Anh Trung Hậu - chủ tịch công ty Giang Minh Việt
                    </strong>{' '}
                    đánh giá <strong>Camera Wifi Reolink E1 Pro</strong> thông
                    minh, giá tiền cũng được, so với sản phẩm mặt bằng chung thì
                    giá hơn cao nhưng <strong>Camera Reolink E1 Pro</strong>{' '}
                    chất lượng, nghe tiếng lớn, xoay chuyển động. Đã chọn 20 cái
                    về lắp đặt cho công ty.
                  </p>
                </span>
              </CardReview>
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
  let listBannerImage = [];
  try {
    listCategoryWithProduct = await categoryService.listCategoryWithProduct(
      {},
      { productsPerPage: 8, pageNumber: 1 },
    );
    listHotProduct = await productService.listHotProduct();
    listBannerImage = await bannerService.listBanner();
    return {
      props: {
        listHotProduct: listHotProduct.data,
        listCategoryWithProduct: listCategoryWithProduct.data,
        listBannerImage: listBannerImage.list_images,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
