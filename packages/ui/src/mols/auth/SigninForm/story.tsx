// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';

const meta: Meta<typeof Component> = {
  title: 'UI/Molecules/Signin Form',
  component: Component,
  tags: ['!dev'],
  argTypes: {
    name: { type: "string" }
  }
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
  },
};