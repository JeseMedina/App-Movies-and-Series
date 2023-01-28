import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout