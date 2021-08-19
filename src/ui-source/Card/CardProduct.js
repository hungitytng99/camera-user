import { ImagesPath } from 'constants/ImagesPath';
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal';
import ContactForm from 'components/ContactForm';


Modal.setAppElement('#__next');
const defaultProduct = {
    id: 0,
    title: "",
    description: "",
    main_image: "",
    all_image: "",
    price: "",
    material: "",
    sub_category: "",
    main_category: "",
    slug: "/"
}
function CardProduct(props) {
    const { detailText = "Detail", product = defaultProduct,
        contactText = "Contact", discount = 0 } = props;
    const [contactModal, setContactModal] = useState(false);
    const [productName, setProductName] = useState("");

    const showContactModal = (e) => {
        e.stopPropagation();
        setProductName(e.currentTarget.dataset.productname);
        setContactModal(true);
    }

    const hideContactModal = () => {
        setContactModal(false);
    }

    const closeContactForm = (e) => {
        setContactModal(false);
    }

    const redirectToDetailProduct = (e) => {
        location.replace("/" + e.currentTarget.dataset.href);
    }
    return (
        <div className="card-product">
            <div className="card-product__item-order ">
                <div className="card-product__item-order-product ">
                    <Link href="/">
                        <a className="card-product__img">
                            <Image src={ImagesPath.PRODUCT_6} layout="fill" objectFit="contain" alt="product" />
                        </a>
                    </Link>
                    <button onClick={showContactModal} className="card-product__item-order-btn">
                        Liên hệ
                    </button>
                </div>

            </div>
            <div className="card-product__item-price ">
                <a href=" " className="card-product__item-price-title text_over_flow_1 ">Sản phẩm camera bán chạy nhất tháng 8</a>
                <div className="card-product__item-price-favor">
                    <FontAwesomeIcon className="card-product__item-price-favor -item --active" icon={faStar} />
                    <FontAwesomeIcon className="card-product__item-price-favor -item --active" icon={faStar} />
                    <FontAwesomeIcon className="card-product__item-price-favor -item --active" icon={faStar} />
                    <FontAwesomeIcon className="card-product__item-price-favor -item --active" icon={faStar} />
                    <FontAwesomeIcon className="card-product__item-price-favor -item --active" icon={faStar} />
                </div>
                <div className="card-product__item-price -wrap ">
                    <div className="card-product__item-price-old ">1.000.000<span>đ</span></div>
                    <div className="card-product__item-price-new ">800.000<span>đ</span></div>
                </div>

            </div>
            <Modal
                isOpen={contactModal}
                onRequestClose={hideContactModal}
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="contact-form__header">
                    <div className="contact-form__header-text">
                        Leave your contact information
                        <span>We'll contact you as soon as possible</span>
                    </div>
                    <div onClick={hideContactModal} className="contact-form__header-close">
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <div className="contact-form__form">
                    <ContactForm closeContact={closeContactForm} productName={productName} productId={product.id} />
                </div>
            </Modal>
        </div>
    );
}

export default CardProduct;