import CarouselComponent from "../../stories/ui/Carousel/Carousel";
import type { TCarousel } from "../../stories/ui/Carousel/Carousel";

export default function Carousel({ ...props }: TCarousel) {
  return <CarouselComponent {...props} />;
}
