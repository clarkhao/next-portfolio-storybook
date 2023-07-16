import type { Meta, StoryObj } from "@storybook/react";
import { getByRole, userEvent, within } from "@storybook/testing-library";
import ThemeToggleUI from "./ThemeToggle";

const meta: Meta<typeof ThemeToggleUI> = {
  title: "UI/ThemeToggleUI",
  component: ThemeToggleUI,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
  },
};
