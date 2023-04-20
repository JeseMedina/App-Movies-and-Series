import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
