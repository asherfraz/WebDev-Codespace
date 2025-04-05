import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import profile1 from "./assets/profile.png";
import profile2 from "./assets/man.png";
import profile3 from "./assets/hero.jpg";

function App() {
	const [user1, setUser1] = useState({
		img: profile1,
		name: "Asher Fraz",
		role: "Software Engineer",
		followers: 22,
	});
	const [user2, setUser2] = useState({
		img: profile2,
		name: "Hamza",
		role: "Civil Engineer",
		followers: 5,
	});
	const [user3, setUser3] = useState({
		img: profile3,
		name: "Yousuf",
		role: "Web Developer",
		followers: 19,
	});

	return (
		<div className="flex flex-wrap justify-center items-center gap-4 bg-gray-600 w-screen h-screen">
			<Card
				user={user2}
				follow={() => {
					setUser2((prev) => {
						return {
							// ...spread operator => it will copy all the properties of the object (deep copy)
							...prev,
							followers: prev.followers + 1,
						};
					});
				}}
				unfollow={() => {
					setUser2((prev) => {
						return {
							...prev,
							followers: prev.followers > 0 ? prev.followers - 1 : 0,
						};
					});
				}}
			/>

			<Card
				user={user1}
				follow={() => {
					setUser1((prev) => {
						return { ...prev, followers: prev.followers + 1 };
					});
				}}
				unfollow={() => {
					setUser1((prev) => {
						return {
							...prev,
							followers: prev.followers > 0 ? prev.followers - 1 : 0,
						};
					});
				}}
			/>

			<Card
				user={user3}
				follow={() => {
					setUser3((prev) => {
						return { ...prev, followers: prev.followers + 1 };
					});
				}}
				unfollow={() => {
					setUser3((prev) => {
						return {
							...prev,
							followers: prev.followers > 0 ? prev.followers - 1 : 0,
						};
					});
				}}
			/>

			{/* <Card
				name="Asher Fraz"
				role="Software Engineer"
				followers={count}
				img={profile1}
				followUp={handleClick}
			/> */}
		</div>
	);
}

export default App;
