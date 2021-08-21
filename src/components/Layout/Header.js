import React, { useEffect, useState } from 'react'
import { ImagesPath } from 'constants/ImagesPath';
import { Container, Row, Col, Collapse } from 'react-bootstrap';
import Link from 'next/link'
import Image from 'next/image'
import Modal from 'react-modal'
import { faCameraRetro, faPhoneVolume, faEnvelope, faAngleDown, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categoryService } from 'data-services/category';
import FullPageLoading from 'ui-source/Loading/FullPageLoading';
import { useRouter } from 'next/router'


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

const Header = () => {
    const [categoryIsOpen, setCategoryIsOpen] = useState(false);
    const [listCategory, setListCategory] = useState([]);
    const [isShowLoading, setIsShowLoading] = useState(false);
    const router = useRouter()

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
    // const listCategory = useSelector(state => state.category.current)

    useEffect(() => {

        const getListCategory = async () => {
            setIsShowLoading(true);
            const listCategoryTmp = await categoryService.listCategory();
            setListCategory(listCategoryTmp.data);
            setIsShowLoading(false);

        }
        getListCategory();
    }, [])
    return (
        <header className="header">
            {/* {isShowLoading && <FullPageLoading opacity={0.5} />} */}
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
                <Link href="/">
                    <a className="header-dynamic__logo ">
                        <Image src={ImagesPath.LOGO} className="header-dynamic__logo-img" alt="camera bac ninh logo" />
                    </a>
                </Link>
                <div className="header-dynamic__category hide-on-992">
                    <ul className="header-dynamic__category-list flex-center ">
                        <li className="header-dynamic__category-item ">
                            <Link href="/">
                                <a className={`header-dynamic__category-link ${router.pathname === "/" ? "--active" : ""}`}>Trang chủ</a>
                            </Link>
                        </li>
                        <li className="header-dynamic__category-item has-dropdown">
                            <Link href="/danh-muc">
                                <a className={`header-dynamic__category-link ${router.pathname.indexOf("/danh-muc") !== -1 ? "--active" : ""}`}>
                                    Danh mục
                                    <FontAwesomeIcon className="header-dynamic__down-icon" icon={faAngleDown} />

                                </a>
                            </Link>
                            {/* Dropdown */}
                            <ul className="header-category__children-list header__category-dropdown">
                                {listCategory.map(category => {
                                    return (
                                        <li key={category.id} className="header-category__children-item">
                                            <Link href={category.slug} >
                                                <a className="header-category__children-link">{category.name}</a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>

                        </li>
                        <li className="header-dynamic__category-item ">
                            <Link href="/tin-tuc">
                                <a className={`header-dynamic__category-link ${router.pathname.indexOf("/tin-tuc") !== -1 ? "--active" : ""}`}>Tin tức</a>
                            </Link>
                        </li>
                        <li className="header-dynamic__category-item ">
                            <Link href="/lien-he">
                                <a className={`header-dynamic__category-link ${router.pathname.indexOf("/lien-he") !== -1 ? "--active" : ""}`}>Liên hệ</a>
                            </Link>
                        </li>
                        <li className="header-dynamic__category-item ">
                            <Link href="/gioi-thieu">
                                <a className={`header-dynamic__category-link ${router.pathname.indexOf("/ky-thuat") !== -1 ? "--active" : ""}`}>Giới thiệu</a>
                            </Link>
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
        </header >
    )
}
export default Header;