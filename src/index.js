import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import AppLayout from "./components/AppLayout";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";

const Index = () => {
	return (
		<>
			<Header />
			<Body />
		</>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "",
				element: <Body />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "restaurants/:resId",
				element: <RestaurantMenu />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
