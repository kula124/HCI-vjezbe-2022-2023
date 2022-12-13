import Header from '../components/header.js';
import Footer from '../components/Footer.js';

const HeaderFooterLayout = ({ children, ...rest }) => {
    return (
        <>
            <Header />
            <main {...rest}>{children}</main>
            <Footer />
        </>
    );
};

export default HeaderFooterLayout;
