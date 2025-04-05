import React from "react";

const Button = React.memo((props) => {
	console.log("Button Component Rendered!");

	return (
		<div>
			<button type="button" onClick={props.onClick}>
				{props.text}
			</button>
		</div>
	);
});

export default Button;

// 1. without React.memo Button renders every time the parent component renders
// 2. with React.memo Button renders only when the props change
