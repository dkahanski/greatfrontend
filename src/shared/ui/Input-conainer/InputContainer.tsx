import type { ReactNode } from "react";
import type { FunctionComponent } from "../../../common/types";
import { cn } from "../../utils/css";
import Button from "../button/Button";
import Input from "../input/Input";

type InputContainerProps = {
	id: string;
	label?: string;
	error?: string;
	helperText?: string;
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
	icon?: ReactNode;
	hintIcon?: ReactNode;
	onHintClick?: () => void;
};

const InputContainer = ({
	id,
	label,
	error,
	helperText,
	inputProps,
	icon,
	hintIcon,
	onHintClick,
}: InputContainerProps): FunctionComponent => {
	const hintId = helperText ? `${id}-helper-text` : undefined;
	const errorId = error ? `${id}-error` : undefined;

	const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

	return (
		<div className="space-y-1">
			{label && (
				<label
					className="block mb-2 text-sm font-medium text-neutral-700"
					htmlFor={id}
				>
					{label}
				</label>
			)}

			<div className="relative">
				<Input
					aria-describedby={describedBy}
					aria-invalid={!!error}
					id={id}
					{...inputProps}
					className={cn(
						icon ? "pl-10" : "",
						hintIcon ? "pr-8" : "",
						inputProps?.className
					)}
				/>
				{icon && (
					<div
						area-hidden="true"
						className="absolute left-2 top-1/2 -translate-y-1/2 text-neutral-500"
					>
						{icon}
					</div>
				)}

				<Button
					aria-label="Hint Button"
					iconLeft={hintIcon}
					variant={"link.grey"}
					className={cn(
						"absolute right-2 top-1/2 -translate-y-1/2 focus:outline-none",
						error ? "text-red-500" : "text-neutral-500"
					)}
					onClick={onHintClick}
				></Button>
			</div>

			{error && (
				<p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
					{error}
				</p>
			)}
			{helperText && !error && (
				<p className="mt-2 text-sm text-neutral-500" id={`${id}-helper-text`}>
					{helperText}
				</p>
			)}
		</div>
	);
};

export default InputContainer;
