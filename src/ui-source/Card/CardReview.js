import React, { Children } from 'react';
import Link from 'next/link';
import { ImagesPath } from 'constants/ImagesPath';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CardReview({ image, children }) {
  return (
    <Row className="card-review">
      <Col md={3}>
        <div className="card-review__img">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt="camara cam nhan nguoi dung anh"
            className="card-review__content-wrapper-img "
          />
        </div>
      </Col>
      <Col md={9}>
        <div className="card-review__item-text ">
          <div className="card-review__item -content ">
            <p className="text_over_flow_13">{children}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default CardReview;
