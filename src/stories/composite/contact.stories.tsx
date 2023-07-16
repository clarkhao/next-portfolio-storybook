import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Contact from '../../component/composite/Contact';

const meta: Meta<typeof Contact> = {
  title: 'Composite/Contact/Contact',
  component: Contact,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Contact>;

export const Primary: Story = {
  args: {
    content: {
      title: "Form",
      form: {
        "user": "User",
        "email": "Email",
        "subject": "Subject",
        "message": "Message",
      }
    }
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
  }
};