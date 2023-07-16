import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import ContactForm from '../../component/composite/Contact/ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Composite/Contact/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

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