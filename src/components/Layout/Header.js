import React, { useState } from 'react'
import { ImagesPath } from 'constants/ImagesPath';
import { Container, Row, Col, Collapse } from 'react-bootstrap';
import Link from 'next/link'
import Image from 'next/image'
import Modal from 'react-modal'
import { faCameraRetro, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const customStyles = {
    content: {
        top: '0',
        left: '0',
        right: '30%',
        bottom: '0',
        zIndex: 998,
        backgroundColor: '#fff',
        borderRadius: '0px',
        padding: '0px',
        borderTop: 'none',
        animation: 'move-right linear 0.3s',
        transhtmlForm: 'translateX(0)',
    },
    overlay: {
        zIndex: 999,
        animation: 'appear linear 0.3s',
    }
};
Modal.setAppElement('#__next');

const Header = ({ listCategory = [] }) => {
    const [categoryIsOpen, setCategoryIsOpen] = useState(false);
    const [isShowCategoryDropdown, setIsShowCategoryDropdown] = useState(false);
    function openCategoryModal() {
        setCategoryIsOpen(true);
    }
    function closeCategoryModal() {
        setCategoryIsOpen(false);
    }
    const showDropDown = () => {
        setIsShowCategoryDropdown(true);
    }
    const hideDropDown = () => {
        setIsShowCategoryDropdown(false);
    }
    return (
        <header className="header">
            <div className="header-static flex-spacebetween">
                <div className="header-static__left flex-center">
                    <FontAwesomeIcon className="header-static__left static-icon" icon={faCameraRetro} />
                    <p className="header-static__left-text">
                        Chào mừng bạn đến với shop camera uy tín, giá rẻ, hàng đầu Bắc Ninh
                    </p>
                </div>
                <div className="header-static__right flex-center">
                    <Link href="/">
                        <a className="header-static__right-setting flex-center">
                            <FontAwesomeIcon className="header-static__left static-icon phone" icon={faPhoneVolume} />
                            <div className="header-static__right-setting -text">
                                09823456789
                            </div>
                        </a>
                    </Link>
                    <Link href="/" >
                        <a className="header-static__right-login flex-center">
                            <FontAwesomeIcon className="header-static__left static-icon" icon={faEnvelope} />
                            <div className="right__login-text">
                                camera@gmail.com
                            </div>
                        </a>
                    </Link>

                </div>
            </div>

            <div className="header-dynamic flex-spacebetween">
                <label htmlFor="category-menu-status" className="category__status-checkbox">
                    <i className=" header-dynamic__category-icon fas fa-bars "></i>
                </label>
                <a href="# " className="header-dynamic__logo ">
                    <Image src={ImagesPath.LOGO} className="header-dynamic__logo-img" alt="camera bac ninh logo" />
                </a>
                <div className="header-dynamic__category ">
                    <ul className="header-dynamic__category-list flex-center ">
                        <li className="header-dynamic__category-item ">
                            <a href=" " className="header-dynamic__category-link --active ">Home</a>
                        </li>
                        <li className="header-dynamic__category-item ">
                            <a href=" " className="header-dynamic__category-link ">Women</a>
                        </li>
                        <li className="header-dynamic__category-item ">
                            <a href=" " className="header-dynamic__category-link ">Men</a>
                        </li>
                        <li className="header-dynamic__category-item ">
                            <a href=" " className="header-dynamic__category-link ">About us</a>
                        </li>
                        <li className="header-dynamic__category-item ">
                            <a href=" " className="header-dynamic__category-link ">Blog</a>
                        </li>
                        <li className="header-dynamic__category-item ">
                            <a href=" " className="header-dynamic__category-link ">Collections</a>
                        </li>
                        <li className="header-dynamic__category-item ">
                            <a href=" " className="header-dynamic__category-link ">Contact</a>
                        </li>

                        <li className="header-dynamic__category-item ">
                            <i className="header-dynamic__category-item -search fas fa-search "></i>
                        </li>
                    </ul>
                </div>
                <div className="header-dynamic__right flex-center ">
                    <i className=" far fa-heart header-dynamic__right left-icon"></i>
                    <i className="fas fa-shopping-cart header-dynamic__right cart-icon"></i>
                </div>
            </div>
            <Modal
                isOpen={categoryIsOpen}
                onRequestClose={closeCategoryModal}
                style={customStyles}
            >
                <div>This is a modal</div>
            </Modal>
        </header>
    )
}
export default Header;