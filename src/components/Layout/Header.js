import React, { useState } from 'react'
import { ImagesPath } from 'constants/ImagesPath';
import { Container, Row, Col, Collapse } from 'react-bootstrap';
import Link from 'next/link'
import Image from 'next/image'
import Modal from 'react-modal'
import { faCameraRetro, faPhoneVolume, faEnvelope, faAngleDown, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
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
    const search = () => {
        if (searchInput.current.value) {
            location.href = "/search/" + searchInput.current.value;
        }
    }
    return (
        <header className="header">
            <div className="header-static flex-spacebetween">
                <div className="header-static__left">
                    <div className="flex-center hide-on-576">
                        <FontAwesomeIcon className="header-static__left static-icon" icon={faCameraRetro} />
                        <p className="header-static__left-text">
                            Shop camera uy tín, giá rẻ, hàng đầu Bắc Ninh
                        </p>
                    </div>
                </div>
                <div className="header-static__right flex-center">
                    <Link href="/">
                        <a className="header-static__right-setting flex-center">
                            <FontAwesomeIcon className="header-static__left static-icon phone" icon={faPhoneVolume} />
                            <div className="header-static__right-setting-text">
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
                <div className="header-bars show-on-992" onClick={openCategoryModal}>
                    <FontAwesomeIcon className="header-bars__icon" icon={faBars} />
                </div>
                <a href="/" className="header-dynamic__logo ">
                    <Image src={ImagesPath.LOGO} className="header-dynamic__logo-img" alt="camera bac ninh logo" />
                </a>
                <div className="header-dynamic__category hide-on-992">
                    <ul className="header-dynamic__category-list flex-center ">
                        <li className="header-dynamic__category-item ">
                            <a href="/" className="header-dynamic__category-link --active ">Trang chủ</a>
                        </li>
                        <li className="header-dynamic__category-item has-dropdown">
                            <a href="/danh-muc" className="header-dynamic__category-link ">
                                Danh mục
                                <FontAwesomeIcon className="header-dynamic__down-icon" icon={faAngleDown} />
                            </a>
                            {/* Dropdown */}
                            <ul className="header-category__children-list header__category-dropdown">
                                <li className="header-category__children-item">
                                    <a href="" className="header-category__children-link">Danh muc</a>
                                </li>
                                <li className="header-category__children-item">
                                    <a href="" className="header-category__children-link">Danh muc</a>
                                </li>
                                <li className="header-category__children-item">
                                    <a href="" className="header-category__children-link">Danh muc</a>
                                </li>
                                <li className="header-category__children-item">
                                    <a href="" className="header-category__children-link">Danh muc</a>
                                </li>
                            </ul>

                        </li>
                        <li className="header-dynamic__category-item ">
                            <a href="/tin-tuc" className="header-dynamic__category-link ">Tin tức</a>
                        </li>
                        <li className="header-dynamic__category-item ">
                            <a href="/ki-thuat" className="header-dynamic__category-link ">Kĩ thuật</a>
                        </li>
                        <li className="header-dynamic__category-item ">
                            <a href="/lien-he" className="header-dynamic__category-link ">Liên hệ</a>
                        </li>
                    </ul>
                </div>
                <div className="header-dynamic__right flex-center">
                    <div className="search-bar hide-on-576">
                        <input placeholder="Tìm kiếm sản phẩm..." type="text" className="search-bar__input" />
                        <FontAwesomeIcon onClick={search} className="search-bar__search-icon" icon={faSearch} />
                    </div>
                </div>
            </div>
            <Modal
                isOpen={categoryIsOpen}
                onRequestClose={closeCategoryModal}
                style={customStyles}
            >
                <div className="category-menu__title ">
                    <div className="category-menu__title-text">MENU</div>
                    <div onClick={closeCategoryModal} className="category-menu__title-close">
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <ul className="category-menu__list ">
                    <li className="category-menu__item ">
                        <a href=" " className="category-menu__link ">Home</a>
                    </li>
                    <li className="category-menu__item ">
                        <a href=" " className="category-menu__link ">Women</a>
                    </li>
                    <li className="category-menu__item ">
                        <a href=" " className="category-menu__link ">Men</a>
                    </li>
                    <li className="category-menu__item ">
                        <a href=" " className="category-menu__link ">About us</a>
                    </li>
                    <li className="category-menu__item ">
                        <a href=" " className="category-menu__link ">Blog</a>
                    </li>
                    <li className="category-menu__item ">
                        <a href=" " className="category-menu__link ">Collections</a>
                    </li>
                    <li className="category-menu__item ">
                        <a href=" " className="category-menu__link ">Contact</a>
                    </li>
                    <li className="category-menu__item --search show-on-576-flex">
                        <div className="category-menu__item-icon">
                            <FontAwesomeIcon onClick={search} icon={faSearch} />
                        </div>
                        <input className="category-menu__item-search" type="text" placeholder="Tìm kiếm sản phẩm..." />

                    </li>
                </ul>
            </Modal>
        </header>
    )
}
export default Header;