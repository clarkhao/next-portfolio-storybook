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
      "https://picsum.photos/seed/1/400/267",
      "https://picsum.photos/seed/2/400/267",
      "https://picsum.photos/seed/3/400/267",
      "https://picsum.photos/seed/300/400/267",
      "https://picsum.photos/seed/301/400/267",
    ],
    alt: 'project'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
