import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import SelectorUI from './Selector';

const meta: Meta<typeof SelectorUI> = {
  title: 'UI/SelectorUI',
  component: SelectorUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};