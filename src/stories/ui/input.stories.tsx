import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Input from '../../component/ui/Input';
import { FiUser } from "react-icons/fi";

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};
export const Error: Story = {
  args: {
    errMsg: "some error",
    value: "some error"
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};
export const WithIcon: Story = {
  args: {
    icon: <FiUser />,
    labelText: 'Username'
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};