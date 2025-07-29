import EyeCloseLineIcon from "@/shared/icons/EyeCloseLineIcon";
import EyeLineIcon from "@/shared/icons/EyeLineIcon";
import { type ComponentProps, forwardRef, useState } from "react";
import TextField from "../text-field/TextField";

type PasswordFieldProps = ComponentProps<"input"> & {
	id: string;
	error?: string;
	isShowPasswordVisible?: boolean;
};
const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
	({ id, error, isShowPasswordVisible, ...props }, ref) => {
		const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
		const handlePasswordVisibleToggle = (): void => {
			setIsPasswordVisible(
				(previewIsPasswordVisible) => !previewIsPasswordVisible
			);
		};

		return (
			<TextField
				ref={ref}
				error={error}
				hintIcon={isPasswordVisible ? <EyeLineIcon /> : <EyeCloseLineIcon />}
				id={id}
				label="Password"
				hintButtonProps={{
					"aria-label": isPasswordVisible ? "Hide password" : "Show password",
					className: isShowPasswordVisible ? "" : "invisible text-neutral-500",
				}}
				inputProps={{
					type: isPasswordVisible ? "text" : "password",
					placeholder: "**********",
					...props,
				}}
				onHintClick={handlePasswordVisibleToggle}
			/>
		);
	}
);

export default PasswordField;
