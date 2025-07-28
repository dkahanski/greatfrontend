import type { Meta, StoryObj } from "@storybook/react-vite";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
	title: "Components/Checkbox",
	tags: ["autodocs"],
	argTypes: {
		disabled: {
			control: { type: "boolean" },
			defaultValue: false,
		},
		indeterminate: {
			control: { type: "boolean" },
			defaultValue: false,
		},
	},
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	args: {
		label: "Checkbox label",
	},
};

export const Unchecked: Story = {
	args: {
		label: "Checkbox label",
		checked: false,
	},
};

export const Checked: Story = {
	args: {
		label: "Checkbox label",
		checked: true,
	},
};

export const DefaultChecked: Story = {
	args: {
		label: "Checkbox label",
		defaultChecked: true,
	},
};

export const Indeterminate: Story = {
	args: {
		label: "Checkbox label",
		indeterminate: true,
	},
};

export const Disabled: Story = {
	args: {
		label: "Checkbox label",
		indeterminate: true,
		disabled: true,
	},
};
