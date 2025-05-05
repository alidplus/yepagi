// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import { expect, fireEvent, within } from "@storybook/test";
import Component from ".";

const meta: Meta<typeof Component> = {
  title: "forms/Signin Form Client",
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
  beforeEach() {},
  async play({ canvasElement }) {
    const canvas = within(canvasElement);
    const emailField = await canvas.findByTestId<HTMLInputElement>("email");
    const passwordField =
      await canvas.findByTestId<HTMLInputElement>("password");
    const submitBtn = await canvas.findByTestId<HTMLInputElement>("submit");

    await fireEvent.change(emailField, {
      target: { value: "ali.ghorbani.tr@gmail.com" },
    });
    await fireEvent.change(passwordField, { target: { value: "123456" } });
    await fireEvent.click(submitBtn);

    await expect(!!emailField).toBe(true);
  },
};
