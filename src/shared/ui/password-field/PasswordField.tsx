import EyeCloseLineIcon from "@/shared/icons/EyeCloseLineIcon";
import EyeLineIcon from "@/shared/icons/EyeLineIcon";
import { type ComponentProps, forwardRef, useState } from "react";
import InputContainer from "../input-conainer/InputContainer";

type PasswordFieldProps = ComponentProps<"input"> & {
	id: string;
	error?: string;
};
const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
	({ id, error, ...props }, ref) => {
		const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
		const handlePasswordVisibleToggle = (): void => {
			setIsPasswordVisible(
				(previewIsPasswordVisible) => !previewIsPasswordVisible
			);
		};
		return (
			<InputContainer
				ref={ref}
				error={error}
				hintIcon={isPasswordVisible ? <EyeLineIcon /> : <EyeCloseLineIcon />}
				id={id}
				label="Password"
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
