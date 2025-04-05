import React from "react";
import { useRef, useEffect, useState } from "react";

const StopWatch = () => {
	const [timer, setTimer] = useState(0);
	const [minute, setMinute] = useState(0);
	const [toggleLock, setToggleLock] = useState(false);
	let timerRef = useRef(null);

	useEffect(() => {
		if (timer > 59) {
			// Reset seconds and increment minute
			setTimer(0);
			setMinute((prevMinute) => prevMinute + 1);
			console.log("Timer>59 >>>>");
		}
	}, [timer]);

	function StartTimer() {
		setToggleLock(true);
		console.log("Timer Started!");

		timerRef.current = setInterval(() => {
			setTimer((prevTimer) => prevTimer + 1);
		}, 1000);
	}

	function StopTimer() {
		setToggleLock(false);
		console.log("Timer Stoped!");
		clearInterval(timerRef.current);
		timerRef.current = null;
	}
	function ResetTimer() {
		console.log("Timer Reset!");
		StopTimer();
		setTimer(0);
		setMinute(0);
	}

	return (
		<>
			<h1 className="bg-blue-500 p-2 rounded">
				React useRef StopWatch Example
			</h1>

			<h1 className="font-bold my-10">
				{minute === 0 && timer < 60
					? `StopWatch: ${timer} second${timer > 1 ? "s" : ""}`
					: `StopWatch: ${minute} minute${
							minute > 1 ? "s" : ""
					  }, ${timer} second${timer > 1 ? "s" : ""}`}
			</h1>

			<div className=" flex justify-center items-center gap-6">
				<button
					onClick={StartTimer}
					disabled={toggleLock}
					className={`${
						toggleLock ? "bg-gray-500" : "bg-blue-500"
					} text-white py-2 px-4 rounded-lg`} // Ensure text and padding
				>
					start
				</button>
				<button
					onClick={StopTimer}
					disabled={!toggleLock}
					className={!toggleLock ? "bg-gray-500" : "bg-blue-500"}
				>
					Stop
				</button>
				<button onClick={ResetTimer}>Reset </button>
			</div>
		</>
	);
};

export default StopWatch;
