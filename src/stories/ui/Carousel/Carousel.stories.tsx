import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import CarouselComponent from "./Carousel";

const meta: Meta<typeof CarouselComponent> = {
  title: "UI/Carousel",
  component: CarouselComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    imageList: [
      "/imageplus/index.png",
      "/imageplus/login.png",
      "/imageplus/upload.png",
      "/imageplus/profile-update.png",
      "/imageplus/accounts-update.png",
    ],
    alt: 'project'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
