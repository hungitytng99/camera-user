import { Breadcrumb, Col, Container, InputGroup, Row } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link'
import Head from 'next/head'
import Layout from 'components/Layout/Layout';
import { ImagesPath } from 'constants/ImagesPath';
import Image from 'next/image'
import { faCalendar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { postService } from 'data-services/post';

const News = (props) => {
    const { listPost = [] } = props;
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
                    {listPost.map(post => {
                        return (
                            <Col key={post.id} xs={12} sm={6} md={4}>
                                <Link href={post.slug} passHref prefetch={false}>
                                    <a className="news__link">
                                        <div className="news__image-box">
                                            <Image className="news__image" src={post.image} alt="trang tri tin tuc" layout="fill" />
                                        </div>
                                        <div className="news__date">
                                            <FontAwesomeIcon className="news__date-icon" icon={faCalendarAlt} />
                                            <div className="news__date-detail">{post.update_at}</div>
                                        </div>
                                        <div className="news__title text_over_flow_3">
                                            {post.name}
                                        </div>
                                    </a>
                                </Link>
                            </Col>
                        )
                    })}

                </Row>
            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    const listPost = await postService.listPost({ postsPerPage: 24, pageNumber: 1 });
    return {
        props: {
            listPost: listPost.data,
        },
    };
}

export default News