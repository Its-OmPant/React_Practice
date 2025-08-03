import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

function AppLayout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default AppLayout;
