import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Portfolio from '../../../component/composite/Portfolio/index';

const meta: Meta<typeof Portfolio> = {
  title: 'Composite/Portfolio',
  component: Portfolio,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    content: {
      portfolio: { title: 'Portfolio',},
      modal: {}
    }
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};