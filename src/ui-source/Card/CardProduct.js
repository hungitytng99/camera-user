import { ImagesPath } from 'constants/ImagesPath';
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

function CardProduct(props) {
    return (
        <div className="card-product">
            <div className="card-product__item-order ">
                <div className="card-product__item-order-product ">
                    <Link href="/">
                        <a className="card-product__img">
                            <Image src={ImagesPath.PRODUCT_6} layout="fill" objectFit="contain" alt="product" />
                        </a>
                    </Link>
                    <button className="card-product__item-order-btn">
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
        </div>
    );
}

export default CardProduct;