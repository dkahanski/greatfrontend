import { isProduction } from "@/common/environmentUtilities";
import React from "react";

export const TanStackTableDevelopmentTools = isProduction
	? (): null => null
	: React.lazy(() =>
			import("@tanstack/react-table-devtools").then((result) => ({
				default: result.ReactTableDevtools,
			}))
		);
