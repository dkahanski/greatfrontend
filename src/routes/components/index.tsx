import { createFileRoute, Link } from "@tanstack/react-router";
import type { FunctionComponent } from "../../common/types";

function RouteComponent(): FunctionComponent {
	return (
		<div className="flex flex-col items-center justify-center h-full">
			<Link to="/components/buttons">Buttons</Link>
			<Link to="/components/inputs">Inputs</Link>
			<Link to="/components/checkbox">Checkboxes</Link>
		</div>
	);
}

export const Route = createFileRoute("/components/")({
	component: RouteComponent,
});
