import { isProduction } from "@/common/environmentUtilities";
import React from "react";

export const ReactHookFormDevelopmentTools = isProduction
	? (): null => null
	: React.lazy(() =>
			import("@hookform/devtools").then((result) => ({
				default: result.DevTool,
			}))
		);
