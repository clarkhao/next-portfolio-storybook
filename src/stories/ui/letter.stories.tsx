import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Letter from '../../component/ui/Letter';

const meta: Meta<typeof Letter> = {
  title: 'UI/Letter',
  component: Letter,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Letter>;

export const Primary: Story = {
  args: {
    children: "A",
    size: 100
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};