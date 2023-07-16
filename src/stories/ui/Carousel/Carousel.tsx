//应用
import React from "react";
//style
import style from "./Carousel.module.css";
//hooks
import Carousel from "nuka-carousel";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export type TCarousel = {
  /**
   * imageList
   */
  imageList: string[];
  /**
   * alt
   */
  alt: string;
};

function CarouselComponent({ ...props }: TCarousel) {
  const isDesktop = useMediaQuery({ minWidth: 1224 });

  const isTablet = useMediaQuery({ maxWidth: 1224, minWidth: 480 });

  const isMobile = useMediaQuery({ maxWidth: 480 });

  const isPortrait = useMediaQuery({
    query: "(orientation: portrait)",
  });

  const isRetina = useMediaQuery({
    query: "(max-resolution: 300dpi)",
  });
  const getStyle = () => {
    switch (true) {
      case isDesktop:
        return {width: 600, height: 300};
      case isTablet:
        return {width: 500, height: 250};
      case isMobile:
        return {width: 300, height: 150};
      default:
        return;
    }
  };
  const size = getStyle() as {width: number, height: number}
  return (
    <Carousel
      adaptiveHeight
      cellAlign="center"
      style={{width: `${size.width}px`, height: `${size.height}px`,}}
    >
      {props.imageList.map((item, index) => (
        <Image
          key={`${props.alt}_${index}`}
          src={item}
          alt={props.alt}
          width={size.width}
          height={size.height}
        />
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
