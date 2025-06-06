import React from "react";
import Layout from "../Layout";

const Contact = () => {
	return (
		<Layout>
			<section className="text-gray-400 bg-gray-900 body-font relative">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-12">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
							Contact Us
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
							gentrify.
						</p>
					</div>
					<div className="lg:w-1/2 md:w-2/3 mx-auto">
						<div className="flex flex-wrap -m-2">
							<div className="p-2 w-1/2">
								<div className="relative">
									<label
										htmlFor="name"
										className="leading-7 text-sm text-gray-400"
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
							</div>
							<div className="p-2 w-1/2">
								<div className="relative">
									<label
										htmlFor="email"
										className="leading-7 text-sm text-gray-400"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
										style={
											({
												"background-image": `url("https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
											},
											{ "background-repeat": "no-repeat" },
											{ "background-size": "20px" },
											{ "background-position": "center" },
											{ cursor: "auto" })
										}
										data-temp-mail-org={0}
									/>
								</div>
							</div>
							<div className="p-2 w-full">
								<div className="relative">
									<label
										htmlFor="message"
										className="leading-7 text-sm text-gray-400"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
										defaultValue={""}
									/>
								</div>
							</div>
							<div className="p-2 w-full">
								<button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
									Send
								</button>
							</div>
							<div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
								<a className="text-indigo-400">asherfraz.com</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Contact;
