import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import type { FunctionComponent } from "../../../common/types";
import { cn } from "../../utils/css";

const buttonVariants = cva(
	[
		"inline-flex",
		"justify-center",
		"items-center",
		"rounded",
		"cursor-pointer",
		"focus:outline-none",
		"focus:ring-4",
		"focus:ring-indigo-100",
	],
	{
		variants: {
			variant: {
				filled: [
					"bg-indigo-700",
					"text-white",
					"font-medium",
					"hover:bg-indigo-800",
					"shadow-sm",
				],
				outlined: [
					"bg-white",
					"border-[0.5px]",
					"border-solid",
					"border-neutral-200",
					"text-neutral-900",
					"hover:bg-neutral-50",
					"disabled:bg-neutral-100",
					"disabled:text-neutral-400",
					"shadow-sm",
				],
				ghost: ["bg-transparent", "text-indigo-700", "hover:bg-neutral-50"],
				destructive: [
					"bg-red-600",
					"text-white",
					"font-medium",
					"hover:bg-red-700",
					"focus:ring-red-100",
					"shadow-sm",
				],
				link: [
					"bg-transparent",
					"text-indigo-700",
					"font-medium",
					"hover:text-indigo-800",
				],
				"link.grey": [
					"bg-transparent",
					"text-neutral-600",
					"font-medium",
					"hover:text-neutral-900",
				],
			},
			size: {
				md: "px-3.5 py-2.5 text-sm gap-1",
				lg: "px-4 py-2.5 text-base gap-1.5",
				xl: "px-5 py-3 text-base gap-1.5",
				"2xl": "px-6 py-4 text-lg gap-2.5",
			},
			disabled: {
				true: "cursor-not-allowed",
				false: null,
			},
			onlyIcon: {
				true: null,
				false: null,
			},
		},
		compoundVariants: [
			{
				variant: "filled",
				disabled: true,
				class: [
					"bg-neutral-100",
					"text-neutral-400",
					"focus:ring-0",
					"focus:ring-offset-0",
					"hover:bg-neutral-100",
					"shadow-none",
				],
			},
			{
				variant: "outlined",
				disabled: true,
				class: [
					"bg-neutral-100",
					"text-neutral-400",
					"focus:ring-0",
					"focus:ring-offset-0",
					"hover:bg-neutral-100",
					"shadow-none",
					"border-none",
				],
			},
			{
				variant: "ghost",
				disabled: true,
				class: [
					"text-neutral-400",
					"focus:ring-0",
					"focus:ring-offset-0",
					"hover:bg-transparent",
				],
			},
			{
				variant: "destructive",
				disabled: true,
				class: [
					"bg-transparent",
					"text-neutral-400",
					"focus:ring-0",
					"focus:ring-offset-0",
					"hover:bg-transparent",
					"shadow-none",
					"border-none",
				],
			},
			{
				variant: ["link", "link.grey"],
				disabled: true,
				class: [
					"text-neutral-400",
					"hover:text-neutral-400",
					"focus:ring-0",
					"focus:ring-offset-0",
					"hover:bg-transparent",
				],
			},
			{ onlyIcon: true, size: "md", class: "p-2.5" },
			{ onlyIcon: true, size: "lg", class: "p-3" },
			{ onlyIcon: true, size: "xl", class: "p-3.5" },
			{ onlyIcon: true, size: "2xl", class: "p-4" },
			{
				variant: ["link", "link.grey"],
				class: ["p-0"],
			},
		],
		defaultVariants: {
			variant: "filled",
			size: "md",
			disabled: false,
		},
	}
);

type ButtonProps = ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		iconLeft?: ReactNode;
		iconRight?: ReactNode;
	};

const Button = ({
	variant,
	size,
	className,
	disabled,
	children,
	iconLeft,
	iconRight,
	...props
}: ButtonProps): FunctionComponent => {
	const onlyIcon = !!(!children && (iconLeft || iconRight));

	return (
		<button
			className={cn(
				buttonVariants({ variant, size, className, disabled, onlyIcon })
			)}
			{...props}
		>
			{iconLeft}
			{children}
			{iconRight}
		</button>
	);
};

export default Button;
