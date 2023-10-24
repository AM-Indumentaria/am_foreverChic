import "./Carousel.css";
import carousel_img_1 from "../../assets/carousel_img_1.webp";
import carousel_img_2 from "../../assets/carousel_img_2.webp";
import carousel_img_3 from "../../assets/carousel_img_3.webp";
import { Carousel, CarouselItem } from "react-bootstrap";

export const CarouselAm = () => {
  return (
    <Carousel className="w-100">
      <CarouselItem interval={3000}>
        <img className="img-carousel" src={carousel_img_1} alt="imagen 1" />
      </CarouselItem>
      <CarouselItem interval={3000}>
        <img className="img-carousel" src={carousel_img_2} alt="imagen 2" />
      </CarouselItem>
      <CarouselItem interval={3000}>
        <img className="img-carousel" src={carousel_img_3} alt="imagen 3" />
      </CarouselItem>
    </Carousel>
  );
};
