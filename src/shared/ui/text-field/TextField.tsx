import Button from "@/shared/ui/button/Button";
import Input from "@/shared/ui/input/Input";
import { cn } from "@/shared/utils/css";
import { forwardRef, type ComponentProps, type ReactNode } from "react";

type TextFieldProps = ComponentProps<"input"> & {
	id: string;
	label?: string;
	error?: string;
	helperText?: string;
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
	icon?: ReactNode;
	hintIcon?: ReactNode;
	onHintClick?: () => void;
	disabled?: boolean;
	hintButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	(
		{
			id,
			label,
			error,
			helperText,
			inputProps,
			icon,
			hintIcon,
			onHintClick,
			disabled = false,
			hintButtonProps,
		},
		ref
	) => {
		const hintId = helperText ? `${id}-helper-text` : undefined;
		const errorId = error ? `${id}-error` : undefined;

		const describedBy =
			[hintId, errorId].filter(Boolean).join(" ") || undefined;

		const {
			className: hintButtonClassName,
			"aria-label": hintButtonAriaLabel,
			...restHintButtonProps
		} = hintButtonProps || {};

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
						ref={ref}
						aria-describedby={describedBy}
						aria-invalid={!!error}
						id={id}
						{...inputProps}
						disabled={disabled}
						className={cn(
							icon ? "pl-10" : "",
							hintIcon ? "pr-8" : "",
							inputProps?.className
						)}
					/>
					{icon && (
						<div
							area-hidden="true"
							className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500"
						>
							{icon}
						</div>
					)}

					<Button
						aria-label={hintButtonAriaLabel ?? "Hint Button"}
						disabled={disabled}
						iconLeft={hintIcon}
						type="button"
						variant={"link.grey"}
						className={cn(
							"absolute right-3.5 top-1/2 -translate-y-1/2 focus:outline-none focus:ring-0",
							error ? "text-red-500" : "text-neutral-500",
							hintButtonClassName
						)}
						onClick={onHintClick}
						{...restHintButtonProps}
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
	}
);

export default TextField;
