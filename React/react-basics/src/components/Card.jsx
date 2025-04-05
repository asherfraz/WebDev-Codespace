import React from "react";
import Button from "./Button";

const Card = ({ user, follow, unfollow }) => {
	return (
		<div className="md:w-[15%] bg-gray-100 border-blue-800 rounded-lg shadow-lg  flex flex-col flex-wrap items-center justify-between gap-1 p-4 m-4">
			<img
				src={user.img}
				alt="Profile Photo"
				// className="w-30 border-2 rounded-full border-blue-500"
				className="h-48 w-full object-cover md:h-full md:w-48 rounded-full border-2 border-blue-500"
			/>
			<h2 className="text-2xl font-semibold">{user.name} </h2>
			<p className="text-gray-600">{user.role}</p>
			<p className={`text-gray-600 ${user.followers === 0 ? "hidden" : ""}`}>
				{user.followers}
			</p>

			<div className="container flex sm:flex-col overflow-hidden md:flex-row items-center justify-between gap-2">
				<Button text="Follow" handleClick={follow} />
				<Button
					text="Unfollow"
					style="bg-red-600 hover:bg-red-800"
					handleClick={unfollow}
				/>
			</div>
		</div>
	);
};

export default Card;

//  OLD Code Simple Approach

// import React from "react";
// import Button from "./Button";

// const Card = (props) => {
// 	return (
// 		<div className="md:w-[15%] bg-gray-100 border-blue-800 rounded-lg shadow-lg  flex flex-col flex-wrap items-center justify-between gap-1 p-4 m-4">
// 			<img
// 				src={props.img}
// 				alt="Profile Photo"
// 				className="w-30 border-2 rounded-full border-blue-500"
// 			/>
// 			<h2 className="text-2xl font-semibold">{props.name} </h2>
// 			<p className="text-gray-600">{props.role}</p>
// 			<p className="text-gray-600">{props.followers}</p>

// 			<div className="container flex flex-row items-center justify-between gap-2">
// 				<Button text="Follow" handleClick={props.followUp} />
// 				<Button
// 					text="Unfollow"
// 					style="bg-red-600 hover:bg-red-800"
// 					handleClick={props.followUp}
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default Card;
