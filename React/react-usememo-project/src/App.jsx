import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [input, setInput] = useState(0);

	function expensiveTask(num) {
		console.log("Expensive task executed");
		// Simulate an expensive task
		for (let i = 0; i < 1000000000; i++) {}

		return num * 2;
	}

	// let doubleValue = expensiveTask(input);
	let doubleValue = useMemo(() => expensiveTask(input), [input]);

	console.log("input: ", input);
	console.log("DobleValue: ", doubleValue);

	return (
		<>
			<h1>React useMemo Hook Project</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<br />
				<br />
				<input
					type="number"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<p>Double: {doubleValue}</p>
			</div>
		</>
	);
}

export default App;
