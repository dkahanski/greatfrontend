import { createFileRoute } from "@tanstack/react-router";
import type { FunctionComponent } from "../../common/types";
import EmailIcon from "../../shared/icons/EmailIcon";
import HelpIcon from "../../shared/icons/HelpIcon";
import InputContainer from "../../shared/ui/Input-conainer/InputContainer";

const InputsPage = (): FunctionComponent => {
	return (
		<div className="flex flex-col items-center bg-white py-28 px-6 md:px-8">
			<div className="flex flex-col gap-12 w-[340px]">
				<InputContainer
					helperText="This is a hint text."
					hintIcon={<HelpIcon />}
					id="input-id-1"
					label="Email"
					inputProps={{
						placeholder: "name@email.com",
					}}
				/>
				<InputContainer
					helperText="This is a hint text."
					hintIcon={<HelpIcon />}
					icon={<EmailIcon />}
					id="input-id-2"
					label="Email"
					inputProps={{
						placeholder: "name@email.com",
					}}
				/>
				<InputContainer
					disabled
					helperText="This is a hint text."
					hintIcon={<HelpIcon />}
					id="input-id-3"
					label="Email"
					inputProps={{
						placeholder: "name@email.com",
					}}
				/>
				<InputContainer
					error="This is an error message."
					hintIcon={<HelpIcon />}
					id="input-id-4"
					label="Email"
					inputProps={{
						value: "name@email.com",
					}}
				/>
			</div>
		</div>
	);
};

export const Route = createFileRoute("/components/inputs")({
	component: InputsPage,
});
