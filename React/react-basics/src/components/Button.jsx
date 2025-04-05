import React from "react";

const Button = ({ text, style = "", handleClick }) => {
	return (
		<div>
			<button
				type="button"
				className={`bg-blue-600 text-white px-4 py-2 rounded-lg m-0.5 hover:bg-blue-800 text-center font-bold ${style}`}
				onClick={handleClick}
			>
				{text}
			</button>
		</div>
	);
};

export default Button;
