import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import ChildA from "./components/ChildA";

const UserContext = createContext();
const ThemeContext = createContext();

function App() {
	const [user, setUser] = useState({ name: "Asher Fraz" });
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		console.log("App component mounted");
	}, [user]);

	return (
		<div className={` ${theme}`}>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<UserContext.Provider value={{ user, setUser }}>
					<ChildA />
				</UserContext.Provider>
			</ThemeContext.Provider>
		</div>
	);
}

export default App;
export { UserContext, ThemeContext };
