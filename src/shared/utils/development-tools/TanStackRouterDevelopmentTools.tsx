import { isProduction } from "@/common/environmentUtilities";
import React from "react";

export const TanStackRouterDevelopmentTools = isProduction
	? (): null => null
	: React.lazy(() =>
			import("@tanstack/react-router-devtools").then((module) => ({
				default: module.TanStackRouterDevtools,
			}))
		);
