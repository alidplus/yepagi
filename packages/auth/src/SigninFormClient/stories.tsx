// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";

const meta: Meta<typeof Component> = {
  title: "forms/Signin",
  component: Component,
  argTypes: {
    name: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/signin",
        query: {
          user: "1",
        },
      },
    },
  },
  args: {},
};
