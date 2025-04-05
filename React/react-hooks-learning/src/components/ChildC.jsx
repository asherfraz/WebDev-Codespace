import React from "react";
import { useContext } from "react";
import { UserContext, ThemeContext } from "../App";

const ChildC = () => {
	const { user, setUser } = useContext(UserContext);
	const { theme, setTheme } = useContext(ThemeContext);

	function ChangeTheme() {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}

	return (
		<div>
			ChildC
			<p>User Name: {user.name}</p>
			<p>Theme: {theme}</p>
			<button onClick={ChangeTheme}>Change Theme</button>
		</div>
	);
};

export default ChildC;
