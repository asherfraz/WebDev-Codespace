import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
	decrement,
	increment,
	incrementByAmount,
	reset,
} from "./redux/counterSlice";

function App() {
	const [amount, setAmount] = useState(null);

	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	function Increment() {
		dispatch(increment());
	}
	function Decrement() {
		dispatch(decrement());
	}
	function Reset() {
		dispatch(reset());
	}
	function incByAmount() {
		dispatch(incrementByAmount(amount));
		setAmount(null);
	}

	return (
		<>
			<section className="h-screen text-gray-400 bg-gray-900 body-font">
				<div className="container px-5 py-24 mx-auto">
					<h1 className="text-3xl font-medium title-font text-white mb-12 text-center">
						React Redux Counter App <br />
						by @asherfraz
					</h1>
					<div className="flex flex-wrap -m-4">
						<div className="p-4  w-full">
							<div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded flex flex-col items-center text-center text-white ">
								<p className="text-4xl">Counter: {count}</p>
								<div className="flex flex-row items-center text-center text-white gap-8 text-2xl my-4">
									<button
										type="button"
										className="px-4 py-1 border-amber-50 border-2"
										onClick={Decrement}
									>
										-
									</button>
									<button
										type="button"
										className="px-4 py-1 border-amber-50 border-2"
										onClick={Increment}
									>
										+
									</button>
								</div>

								<button
									type="button"
									className="px-4 py-1 border-amber-50 border-2"
									onClick={Reset}
								>
									Reset Counter
								</button>

								<hr className="border-2 w-full my-5" />

								<div className="flex flex-col items-center text-center text-white gap-8  my-4">
									<input
										type="number"
										name="counterNumber"
										id="counterNumber"
										value={amount}
										placeholder="Enter Number"
										className="border-2 rounded-lg border-amber-50 text-amber-50 px-4 py-1"
										onChange={(e) => {
											setAmount(Number(e.target.value));
										}}
									/>

									<button
										type="button"
										className="button px-4 py-1 border-amber-50 border-2"
										onClick={incByAmount}
									>
										Increment by Amount
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
