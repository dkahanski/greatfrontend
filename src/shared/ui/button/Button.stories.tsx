import type { Meta, StoryObj } from "@storybook/react-vite";
import StarIcon from "../../icons/StarIcon";
import Button from "./Button";

const meta: Meta<typeof Button> = {
	component: Button,
	title: "Components/Button",
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: [
				"default",
				"filled",
				"outlined",
				"ghost",
				"link",
				"link.grey",
				"destructive",
			],
			defaultValue: "filled",
		},
		size: {
			control: { type: "select" },
			options: ["md", "lg", "xl", "2xl"],
		},
		disabled: {
			control: { type: "boolean" },
			defaultValue: false,
		},
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "Button CTA",
	},
	render: (props) => (
		<Button
			{...props}
			iconLeft={<StarIcon size={20} />}
			iconRight={<StarIcon size={20} />}
		/>
	),
	// play: async ({ canvasElement }) => {
	// 	const canvas = within(canvasElement);
	// 	await userEvent.click(canvas.getByRole("button"));
	// 	await expect(canvas.getByRole("button")).toHaveTextContent("Button CTA");
	// 	await expect(canvas.getByRole("button")).toHaveClass("filled");
	// 	await expect(canvas.getByRole("button")).toHaveAttribute(
	// 		"aria-label",
	// 		"Button CTA"
	// 	);
	// 	await expect(canvas.getByRole("button")).not.toBeDisabled();
	// },
};

export const Filled: Story = {
	args: {
		children: "Button CTA",
	},
	render: (props) => (
		<Button
			{...props}
			iconLeft={<StarIcon size={20} />}
			iconRight={<StarIcon size={20} />}
		/>
	),
};

export const FilledIcon: Story = {
	args: {
		variant: "filled",
	},

	render: (props) => (
		<Button
			{...props}
			aria-label="Filled Icon Button"
			iconLeft={<StarIcon size={20} />}
		/>
	),
};

export const FilledDisabled: Story = {
	args: {
		children: "Button CTA",
		disabled: true,
	},

	render: (props) => (
		<Button
			{...props}
			iconLeft={<StarIcon size={20} />}
			iconRight={<StarIcon size={20} />}
		/>
	),
};

export const Outlined: Story = {
	args: {
		children: "Button CTA",
		variant: "outlined",
	},

	render: (props) => (
		<Button
			{...props}
			iconLeft={<StarIcon size={20} />}
			iconRight={<StarIcon size={20} />}
		/>
	),
};

export const OutlinedIcon: Story = {
	args: {
		variant: "outlined",
	},

	render: (props) => (
		<Button
			{...props}
			aria-label="Outlined Icon Button"
			iconLeft={<StarIcon size={20} />}
		/>
	),
};

export const OutlinedDisabled: Story = {
	args: {
		children: "Button CTA",
		disabled: true,
	},

	render: (props) => (
		<Button
			{...props}
			iconLeft={<StarIcon size={20} />}
			iconRight={<StarIcon size={20} />}
		/>
	),
};

export const Ghost: Story = {
	args: {
		children: "Button CTA",
		variant: "ghost",
	},

	render: (props) => (
		<Button
			{...props}
			iconLeft={<StarIcon size={20} />}
			iconRight={<StarIcon size={20} />}
		/>
	),
};

export const GhostIcon: Story = {
	args: {
		variant: "ghost",
	},

	render: (props) => (
		<Button
			{...props}
			aria-label="Outlined Icon Button"
			iconLeft={<StarIcon size={20} />}
		/>
	),
};

export const GhostDisabled: Story = {
	args: {
		children: "Button CTA",
		variant: "ghost",
		disabled: true,
	},

	render: (props) => (
		<Button
			{...props}
			iconLeft={<StarIcon size={20} />}
			iconRight={<StarIcon size={20} />}
		/>
	),
};

export const Destructive: Story = {
	args: {
		children: "Button CTA",
		variant: "destructive",
	},

	render: (props) => (
		<Button
			{...props}
			iconLeft={<StarIcon size={20} />}
			iconRight={<StarIcon size={20} />}
		/>
	),
};

export const DestructiveIcon: Story = {
	args: {
		variant: "destructive",
	},

	render: (props) => (
		<Button
			{...props}
			aria-label="Outlined Icon Button"
			iconLeft={<StarIcon size={20} />}
		/>
	),
};

export const DestructiveDisabled: Story = {
	args: {
		children: "Button CTA",
		variant: "destructive",
		disabled: true,
	},

	render: (props) => (
		<Button
			{...props}
			iconLeft={<StarIcon size={20} />}
			iconRight={<StarIcon size={20} />}
		/>
	),
};

export const Link: Story = {
	args: {
		children: "Button CTA",
		variant: "link",
	},

	render: (props) => (
		<Button
			{...props}
			iconLeft={<StarIcon size={20} />}
			iconRight={<StarIcon size={20} />}
		/>
	),
};

export const LinkIcon: Story = {
	args: {
		variant: "link",
	},

	render: (props) => (
		<Button
			{...props}
			aria-label="Outlined Icon Button"
			iconLeft={<StarIcon size={20} />}
		/>
	),
};

export const LinkDisabled: Story = {
	args: {
		children: "Button CTA",
		variant: "link",
		disabled: true,
	},

	render: (props) => (
		<Button
			{...props}
			iconLeft={<StarIcon size={20} />}
			iconRight={<StarIcon size={20} />}
		/>
	),
};

export const LinkGrey: Story = {
	args: {
		children: "Button CTA",
		variant: "link.grey",
	},

	render: (props) => (
		<Button
			{...props}
			iconLeft={<StarIcon size={20} />}
			iconRight={<StarIcon size={20} />}
		/>
	),
};

export const LinkGreyIcon: Story = {
	args: {
		variant: "link.grey",
	},

	render: (props) => (
		<Button
			{...props}
			aria-label="Outlined Icon Button"
			iconLeft={<StarIcon size={20} />}
		/>
	),
};

export const LinkGreyDisabled: Story = {
	args: {
		children: "Button CTA",
		variant: "link.grey",
		disabled: true,
	},

	render: (props) => (
		<Button
			{...props}
			iconLeft={<StarIcon size={20} />}
			iconRight={<StarIcon size={20} />}
		/>
	),
};
