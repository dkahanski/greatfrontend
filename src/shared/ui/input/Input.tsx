import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ComponentProps } from "react";
import { cn } from "../../utils/css";

const inputVariants = cva(
	[
		"bg-neutral-50",
		"px-3.5",
		"py-2.5",
		"rounded",
		"border",
		"border-solid",
		"border-neutral-200",
		"focus:outline-none",
		"focus:ring-4",
		"focus:ring-indigo-100",
		"focus:border-indigo-300",
		"font-noto",
		"font-normal",
		"text-sm",
		"text-neutral-900",
		"w-full",
		"h-10",
	],
	{
		variants: {
			invalid: {
				true: ["focus:ring-red-100", "focus:border-red-500"],
				false: null,
			},
		},
	}
);

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputVariants>;

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		const invalid =
			props["aria-invalid"] === true || props["aria-invalid"] === "true";

		return (
			<input
				ref={ref}
				{...props}
				className={cn(inputVariants({ invalid, className }))}
			></input>
		);
	}
);

export default Input;
