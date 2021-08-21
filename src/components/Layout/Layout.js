import { Container } from 'react-bootstrap'
import Footer from 'components/Layout/Footer';
import Header from 'components/Layout/Header';
import ContactPop from 'components/ContactPop';
import "nprogress/nprogress.css";
import dynamic from 'next/dynamic'
const TopProgressBar = dynamic(
    () => {
        return import("components/TopProgressBar");
    },
    { ssr: false },
);
function Layout(props) {
    const { children } = props;
    return (
        <div className="layout">
            <TopProgressBar />
            <ContactPop />
            <div className="layout__header">
                <Header />
            </div>
            <div className="layout__content" style={{ marginTop: "115px" }}>
                <Container>
                    {children}
                </Container>
            </div>
            <div className="layout__footer">
                <Footer />
            </div>
        </div>
    )
}
export default Layout;