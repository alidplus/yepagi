// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Component from ".";

const meta: Meta<typeof Component> = {
  title: "UI/Molecules/Signup Form",
  component: Component,
  argTypes: {
    name: { type: "string" },
    defaultValue: {},
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    onSubmit: fn(),
  },
};
