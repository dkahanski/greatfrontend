import type { Meta, StoryObj } from "@storybook/react-vite";
import SignIn from "./SignIn";

const meta: Meta<typeof SignIn> = {
	component: SignIn,
	title: "Features/SignIn",
};

export default meta;

type Story = StoryObj<typeof SignIn>;

export const Default: Story = {
	args: {},
};
