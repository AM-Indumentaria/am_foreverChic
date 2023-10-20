import Carousel from "react-material-ui-carousel"
import "../Carousel/Carousel.css"


export const CarouselAm = ()=>{

    return(
        <Carousel interval={6000}>
            <img className="img-carousel" src=".\src\assets\carousel_img_1.png" alt="imagen 1" />
            <img className="img-carousel" src=".\src\assets\carousel_img_2.png" alt="imagen 2" />
            <img className="img-carousel" src=".\src\assets\carousel_img_3.png" alt="imagen 3" />
        </Carousel>
    )
}