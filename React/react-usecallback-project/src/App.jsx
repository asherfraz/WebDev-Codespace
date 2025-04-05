import { useCallback, useState } from "react";
import "./App.css";
import Button from "./component/Button";

function App() {
	const [count, setCount] = useState(0);

	//* this function recreates on every render
	// function handleClick() {
	// 	console.log("Button Clicked");
	// }

	//* useCallback is used to memoize the function so that it doesn't get recreated on every render
	const handleClick = useCallback(() => {
		console.log("Button Clicked");
	}, []);

	return (
		<>
			<h1>React useCallBack Hook Project</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<Button text="Click Me" onClick={handleClick} />
		</>
	);
}

export default App;
