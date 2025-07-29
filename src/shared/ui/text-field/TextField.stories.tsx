import type { Meta, StoryObj } from "@storybook/react-vite";
import EmailIcon from "../../icons/EmailIcon";
import HelpIcon from "../../icons/HelpIcon";
import TextField from "./TextField";

const meta: Meta<typeof TextField> = {
	component: TextField,
	title: "Components/InputContainer",
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
	args: {
		id: "input-id",
		inputProps: {
			"aria-label": "Input field", // fix for Accessibility test
		},
	},
};

export const WithIcon: Story = {
	args: {
		id: "input-id",

		inputProps: {
			"aria-label": "Input field", // fix for Accessibility test
		},

		icon: <EmailIcon />,
	},
};

export const WithHintIcon: Story = {
	args: {
		id: "input-id",

		inputProps: {
			"aria-label": "Input field", // fix for Accessibility test
		},

		hintIcon: <HelpIcon />,
	},
};

export const WithBothIcons: Story = {
	args: {
		id: "input-id",

		inputProps: {
			placeholder: "Enter text",
		},

		hintIcon: <HelpIcon />,
		icon: <EmailIcon />,
	},
};

export const WithLabel: Story = {
	args: {
		id: "input-id",

		inputProps: {
			placeholder: "Enter your email",
		},

		label: "Email",
	},
};

export const WithError: Story = {
	args: {
		id: "input-id",
		inputProps: {
			placeholder: "Enter text",
		},
		label: "Field Label",
		error: "This field is required",
	},
};

export const WithHelperText: Story = {
	args: {
		id: "input-id",

		inputProps: {
			placeholder: "Enter text",
		},

		label: "Field Label",
		helperText: "This is a helper text",
		hintIcon: <HelpIcon />,
	},
};

export const WithHelperTextAndError: Story = {
	args: {
		id: "input-id",

		inputProps: {
			placeholder: "Enter text",
		},

		label: "Field Label",
		helperText: "This is a helper text",
		hintIcon: <HelpIcon />,
		error: "This field is required",
	},
};

export const Disabled: Story = {
	args: {
		id: "input-id",

		inputProps: {
			placeholder: "Enter text",
		},

		label: "Field Label",
		helperText: "This is a helper text",
		hintIcon: <HelpIcon />,
		error: "This field is required",
		disabled: true,
	},
};
