import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import LabelsUI from './Labels';

const meta: Meta<typeof LabelsUI> = {
  title: 'UI/LabelsUI',
  component: LabelsUI,
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