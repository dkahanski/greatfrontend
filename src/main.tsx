import "@/styles/tailwind.css";
import { createRouter } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./common/i18n";
import { routeTree } from "./routeTree.gen.ts";

const router = createRouter({
	routeTree,
	basepath: import.meta.env.BASE_URL,
});

export type TanstackRouter = typeof router;

declare module "@tanstack/react-router" {
	interface Register {
		// This infers the type of our router and registers it across your entire project
		router: TanstackRouter;
	}
}

const rootElement = document.querySelector("#root") as Element;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<React.Suspense fallback="loading">
				<App router={router} />
			</React.Suspense>
		</React.StrictMode>
	);
}
