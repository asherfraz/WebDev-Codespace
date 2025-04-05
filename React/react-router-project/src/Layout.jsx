import Navbar from "./component/Navbar";

const Layout = ({ children }) => {
	return (
		<div className="bg-gray-900 h-screen ">
			<Navbar />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
