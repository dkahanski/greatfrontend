import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "./Input";

const meta: Meta<typeof Input> = {
	component: Input,
	title: "Components/Input",
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		placeholder: "Enter text",
	},
};
