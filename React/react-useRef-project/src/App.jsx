import { useRef, useEffect, useState } from "react";
import "./App.css";
import StopWatch from "./components/StopWatch.jsx";

//**
//**  UseCase 1: useRef to persist a value across renders
//**

// function App() {
// 	const [count, setCount] = useState(0);
// 	//  x cant be able to persists its value across re-renders
// 	let x = 1;

// 	//  y can be able to persists its value across re-renders
// 	let y = useRef(1);

// 	useEffect(() => {
// 		// x += 1;
// 		// console.log("x is", x);
// 		// console.log("x is incremented");
// 		y.current += 1;
// 		console.log("y is", y.current);
// 		console.log("y is incremented");
// 	});

// 	return (
// 		<>
// 			<h1>React useRef Example 1</h1>
// 			<div className="card">
// 				<button onClick={() => setCount((count) => count + 1)}>
// 					count is {count}
// 				</button>
// 			</div>
// 		</>
// 	);
// }

// export default App;

//**
//**  UseCase 2: useRef to directly access/change a DOM element
//**

// function App() {
// 	const [count, setCount] = useState(0);
// 	let btnRef = useRef();
// 	let headingRef = useRef();
// 	// btnRef = btnRef.current;

// 	function buttonClicked() {
// 		setCount((count) => count + 1);
// 		console.log(headingRef.current);
// 		headingRef.current.style.color = "red";

// 		console.log(btnRef.current);
// 		btnRef.current.style.backgroundColor = "blue";
// 	}

// 	return (
// 		<>
// 			<h1 ref={headingRef}>React useRef Example 2</h1>
// 			<div className="card">
// 				<button ref={btnRef} onClick={buttonClicked}>
// 					count is {count}
// 				</button>
// 			</div>
// 		</>
// 	);
// }

// export default App;

//**
//**  Example: useRef StopWatch Example
//**

function App() {
	return (
		<>
			<StopWatch />
		</>
	);
}

export default App;
