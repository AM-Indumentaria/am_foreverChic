import Carousel from "react-material-ui-carousel"
import "./Carousel.css"
import carousel_img_1 from "../../assets/carousel_img_1.webp";
import carousel_img_2 from "../../assets/carousel_img_2.webp";
import carousel_img_3 from "../../assets/carousel_img_3.webp";


export const CarouselAm = ()=>{

    return (
      <Carousel interval={6000}>
        <img className="img-carousel" src={carousel_img_1} alt="imagen 1" />
        <img className="img-carousel" src={carousel_img_2} alt="imagen 2" />
        <img className="img-carousel" src={carousel_img_3} alt="imagen 3" />
      </Carousel>
    );
}