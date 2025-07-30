import api from "@/common/axios";
import { useMutation } from "@tanstack/react-query";
import type { SignInFormData } from "./types";

export const useSignIn = () => {
	return useMutation({
		mutationFn: async (data: SignInFormData) => api.post("api/login", data),
		onSuccess: (data) => {
			console.log("Успешный вход:", data);
			// здесь можно: сохранить токен, перенаправить и т.д.
		},
		onError: (error: any) => {
			if (error.response?.status === 401) {
				// setError("password", {
				// 	type: "manual",
				// 	message: "Неверный email или пароль",
				// });
			} else {
				console.error("Ошибка входа:", error);
			}
		},
	});
};
