import { isProduction } from "@/common/utils";
import React from "react";

export const TanStackRouterDevelopmentTools = isProduction
	? (): null => null
	: React.lazy(() =>
			import("@tanstack/react-router-devtools").then((module) => ({
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
				default: module.TanStackRouterDevtools,
			}))
		);
