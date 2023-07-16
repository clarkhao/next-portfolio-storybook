import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Modal from '../../../component/layout/Modal';

const meta: Meta<typeof Modal> = {
  title: 'Layout/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    index: "imageplus"
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};