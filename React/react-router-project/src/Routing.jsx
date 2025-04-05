import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/contact";
import OurTeam from "./component/OurTeam";

const router = createBrowserRouter([
	{
		path: "*",
		element: <Home />,
	},
	{
		path: "/" || "/home",
		element: <Home />,
	},
	{
		path: "/about",
		element: <About />,
		children: [
			{
				path: "our-team",
				element: <OurTeam />,
			},
			{
				path: "testimonials",
				element: <About />,
			},
		],
	},
	{
		path: "/contact",
		element: <Contact />,
	},
]);

export { router };
