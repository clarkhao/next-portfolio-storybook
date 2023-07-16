import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import LaterWhoAmIUI from '../../../component/composite/WhoAmI';

const meta: Meta<typeof LaterWhoAmIUI> = {
  title: 'Composite/WhoAmIUI',
  component: LaterWhoAmIUI,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    content: "Hello, I am Clark\nThis is a Test",
    locale: 'en'
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};