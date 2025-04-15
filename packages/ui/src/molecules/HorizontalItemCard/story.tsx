// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import { HorizontalItemCard as Component } from ".";

const meta: Meta<typeof Component> = {
  title: "UI/Molecules/Horizontal Item Card",
  component: Component,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    icon: "administrator",
    title: "Admin title here",
    desc: "Lorem ipsum dolor sit amet consectetur",
  },
};

export const LongDesc: Story = {
  args: {
    icon: "facebook",
    title: "Facebook title here",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, ipsum dolor sit amet dolorem?",
  },
};

export const NoDesc: Story = {
  args: {
    icon: "dashboard",
    title: "awsome title here",
  },
};
