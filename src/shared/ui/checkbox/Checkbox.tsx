import {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	type InputHTMLAttributes,
	type ReactNode,
} from "react";

import { cn } from "@/shared/utils/css/index.tsx";
import "./Checkbox.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	indeterminate?: boolean;
	label?: ReactNode;
	inputClassName?: string;
	labelClassName?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	(
		{
			disabled,
			label,
			indeterminate,
			checked,
			defaultChecked,
			inputClassName,
			labelClassName,
			className,
			...rest
		},
		ref
	) => {
		const innerRef = useRef<HTMLInputElement>(null);

		useImperativeHandle(ref, () => innerRef.current!, [innerRef]);

		useEffect(() => {
			if (innerRef.current) {
				innerRef.current.indeterminate = Boolean(indeterminate);
			}
		}, [indeterminate]);

		return (
			<label
				className={cn(
					"checkbox__wrapper",
					className,
					disabled ? "checkbox__wrapper--disabled" : ""
				)}
			>
				<input
					ref={innerRef}
					checked={checked}
					className={cn("checkbox__input", inputClassName)}
					defaultChecked={defaultChecked}
					disabled={disabled}
					type="checkbox"
					aria-checked={
						indeterminate
							? "mixed"
							: checked || defaultChecked
								? "true"
								: "false"
					}
					{...rest}
				/>
				{label && (
					<span className={cn("checkbox__label", labelClassName)}>{label}</span>
				)}
			</label>
		);
	}
);

export default Checkbox;
