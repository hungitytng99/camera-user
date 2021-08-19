import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Footer from 'components/Layout/Footer';
import Header from 'components/Layout/Header';
import ContactPop from 'components/ContactPop';

function Layout(props) {
    const { children } = props;
    return (
        <div className="layout">
            <ContactPop/>
            <div className="layout__header">
                <Header />
            </div>
            <div className="layout__content" style={{marginTop: "115px"}}>
                {children}
            </div>
            <div className="layout__footer">
                <Footer />
            </div>
        </div>
    )
}
export default Layout;