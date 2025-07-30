import type { FunctionComponent } from "@/common/types";
import {
	SignInSchema,
	type SignInFormData,
} from "@/features/sign-in/api/types";
import Button from "@/shared/ui/button/Button";
import PasswordField from "@/shared/ui/password-field/PasswordField";
import TextField from "@/shared/ui/text-field/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSignIn } from "../api/mutation";

const SignIn = (): FunctionComponent => {
	const {
		register,
		handleSubmit,
		// control,
		watch,
		formState: { errors },
	} = useForm<SignInFormData>({
		mode: "onSubmit",
		resolver: zodResolver(SignInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const signIn = useSignIn();

	const password = watch("password");

	const onSubmit = (data: SignInFormData): void => {
		signIn.mutate(data);
	};

	return (
		<div className="flex gap-8 grow bg-white px-24 py-8 rounded-lg">
			<div className="flex flex-col justify-center items-center gap-6 self-stretch grow">
				<span className="font-semibold text-3xl text-neutral-900">
					Log in to your account
				</span>
				{/* <ReactHookFormDevelopmentTools control={control} /> */}
				<form
					className="w-96 flex flex-col gap-6"
					onSubmit={handleSubmit(onSubmit)}
				>
					<TextField
						error={errors.email?.message}
						id="email"
						label="Email"
						inputProps={{
							placeholder: "joejackson@mail.com",
							...register("email"),
						}}
					/>
					<PasswordField
						error={errors.password?.message}
						id="password"
						isShowPasswordVisible={Boolean(password)}
						{...register("password")}
					/>
					<Button type="submit">Submit</Button>
				</form>
				<div className="flex justify-center items-center gap-1 self-stretch">
					<span className="font-medium text-sm">Don’t have an account?</span>
					<Button variant="link">Sign up</Button>
				</div>
			</div>
			<div className="flex self-stretch grow bg-[#bd1111]"></div>
		</div>
	);
};

export default SignIn;
