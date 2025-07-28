import Checkbox from "@/shared/ui/checkbox/Checkbox";
import { createFileRoute } from "@tanstack/react-router";
import type { FunctionComponent } from "../../common/types";

const InputsPage = (): FunctionComponent => {
	return (
		<div className="flex flex-col items-center bg-white py-50">
			<div className="flex flex-col gap-6">
				<Checkbox id="checkbox-1" label="Unchecked" />
				<Checkbox checked id="checkbox-2" label="Checked" />
				<Checkbox indeterminate id="checkbox-3" label="Indeterminate" />
			</div>
		</div>
	);
};

export const Route = createFileRoute("/components/checkbox")({
	component: InputsPage,
});
