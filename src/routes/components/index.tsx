import { createFileRoute, Link } from "@tanstack/react-router";
import type { FunctionComponent } from "../../common/types";

function RouteComponent(): FunctionComponent {
	return (
		<div className="flex flex-col items-center justify-center h-full">
			<Link to="/components/buttons">Buttons</Link>
		</div>
	);
}

export const Route = createFileRoute("/components/")({
	component: RouteComponent,
});
