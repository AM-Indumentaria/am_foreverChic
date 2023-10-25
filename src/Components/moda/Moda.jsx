import { useState, useEffect } from "react";
import { ModaPresentacional } from "./ModaPresentacional";
import "./moda.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";

export const Moda = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/moda.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products]);

  const filter = (name) => {
    const prod = products.filter((prod) => prod.category == name);
    return prod;
  };
  const noche = filter("noche");
  const casual = filter("casual");
  const clasico = filter("clasico");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: (
      <ArrowForwardIosIcon
        sx={{
          fontSize: {
            xs: 32,
            sm: 40,
            md: 40,
            lg: 46,
            xl: 46,
          },
          zIndex: 1,
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
          top: {
            xs: "36%",
            sm: "43%",
            md: "43%",
            lg: "43%",
            xl: "43%",
          },

          backgroundColor: "black",
          color: "white",
          padding: 1.4,
        }}
      />
    ),
    prevArrow: (
      <ArrowBackIosNewIcon
        sx={{
          fontSize: {
            xs: 32,
            sm: 40,
            md: 40,
            lg: 46,
            xl: 46,
          },
          zIndex: 1,
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
          top: {
            xs: "36%",
            sm: "43%",
            md: "43%",
            lg: "43%",
            xl: "43%",
          },

          backgroundColor: "black",
          color: "white",
          padding: 1.4,
          cursor: "pointer",
        }}
      />
    ),
  };
  return (
    <ModaPresentacional
      noche={noche}
      casual={casual}
      clasico={clasico}
      ArrowBackIosNewIcon={ArrowBackIosNewIcon}
      ArrowForwardIosIcon={ArrowForwardIosIcon}
      settings={settings}
      Slider={Slider}
    />
  );
};
