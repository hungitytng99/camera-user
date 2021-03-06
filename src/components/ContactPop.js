import React from 'react';
import { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImagesPath } from 'constants/ImagesPath';
import Link from 'next/link';
import Image from 'next/image';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import ReactTooltip from 'react-tooltip';

const ContactPop = (props) => {
  return (
    <div className="contact-pop">
      <Link href={{ pathname: 'tel:0986795960' }}>
        <a
          target="_blank"
          data-offset="{'top': 10, 'left': 10}"
          data-tip="Gọi ngay: 0986795960"
          className="contact-pop__box"
        >
          <FontAwesomeIcon
            className="contact-pop__icon has-animation"
            icon={faPhone}
          />
        </a>
      </Link>
      <Link
        href={{ pathname: 'https://www.facebook.com/camerazone.bacninh' }}
        passHref
      >
        <a
          target="_blank"
          data-tip="Facebook Message"
          className="contact-pop__box"
        >
          <FontAwesomeIcon
            className="contact-pop__icon"
            icon={faFacebookMessenger}
          />
        </a>
      </Link>
      <Link href={{ pathname: 'https://zalo.me/0986795960' }} passHref>
        <a
          target="_blank"
          data-tip="Zalo: 0986795960"
          className="contact-pop__box"
        >
          <div className="contact-pop__img">
            <Image
              layout="fill"
              src={ImagesPath.ZALO.src}
              alt="zalo"
              className="contact-pop__img"
            />
          </div>
        </a>
      </Link>
      <Link href={{ pathname: 'mailto:camerazone.bacninh@gmail.com' }}>
        <a
          target="_blank"
          data-tip="Mail: camerazone.bacninh@gmail.com"
          className="contact-pop__box --last"
        >
          <FontAwesomeIcon className="contact-pop__icon" icon={faEnvelope} />
        </a>
      </Link>
      <ReactTooltip place="right" type="info" />
    </div>
  );
};

export default ContactPop;
