import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import LetterUI from './Letter';

const meta: Meta<typeof LetterUI> = {
  title: 'UI/LetterUI',
  component: LetterUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "A",
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};