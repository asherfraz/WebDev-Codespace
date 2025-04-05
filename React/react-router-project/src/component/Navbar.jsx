import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
	return (
		<header className="text-gray-400 bg-gray-900 body-font border-b-2 border-b-blue-400 ">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Link
					to={"/"}
					className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
				>
					<img
						src="https://avatars.githubusercontent.com/u/37267032?v=4"
						alt="Brand Image"
						className="w-10 h-10 text-white p-0.5 bg-blue-500 rounded-full"
						loading="lazy"
					/>
					<span className="ml-3 text-xl">asherfraz.com</span>
				</Link>
				<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
					<NavLink
						to="/home"
						className="mr-5 hover:text-white"
						activeClassName="text-blue-400"
					>
						Home
					</NavLink>
					<NavLink
						to="/about"
						className="mr-5 hover:text-white"
						activeClassName="text-blue-400"
					>
						About us
					</NavLink>
					<NavLink
						to="/contact"
						className="mr-5 hover:text-white"
						activeClassName="text-blue-400"
					>
						Contact us
					</NavLink>
				</nav>
				{/* <button
					className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
					onClick={() => {
						window.open("https://asherfraz.com/");
					}}
				>
					Portfolio &gt;
				</button> */}
			</div>
		</header>
	);
};

export default Navbar;
