import React from "react";
import Layout from "../Layout";

const Home = () => {
	return (
		<Layout>
			<section className="text-gray-400 bg-gray-900 body-font">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
							Understanding the React
							<br className=" lg:inline-block" />
							termonology!
						</h1>
						<p className="mb-8 leading-relaxed">
							Copper mug try-hard pitchfork pour-over freegan heirloom neutra
							air plant cold-pressed tacos poke beard tote bag. Heirloom echo
							park mlkshk tote bag selvage hot chicken authentic tumeric
							truffaut hexagon try-hard chambray.
						</p>
						<div className="flex justify-center">
							<button
								className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
								onClick={() => {
									window.open("https://asherfraz.com/");
								}}
							>
								Portfolio
							</button>
							<button
								className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
								onClick={() => {
									window.open("https://asherfraz.com/");
								}}
							>
								Hire Us!
							</button>
						</div>
					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<img
							className="brightness-80 shadow-2xl object-cover object-center rounded-4xl"
							alt="hero"
							src="https://avatars.githubusercontent.com/u/37267032?v=4"
							loading="lazy"
						/>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Home;
