import { useState, useEffect } from "react";
import { ModaPresentacional } from "./ModaPresentacional";
import "./moda.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Moda = () => {
  const [products, setProducts] = useState([]);
  const [moveProducts, setMoveProducts] = useState("");

  useEffect(() => {
    fetch("../src/moda.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const translateAxisX = (direction) => {
    let newPosition = moveProducts;
    let width = window.innerWidth;
    console.log(width);
    if (direction === "right") {
      newPosition -= 50;
      if (width >= 1450) {
        newPosition = Math.max(newPosition, -52);
      } else if (width >= 1400) {
        newPosition = Math.max(newPosition, -56.5);
      } else if (width >= 1350) {
        newPosition = Math.max(newPosition, -63);
      } else if (width >= 1250) {
        newPosition = Math.max(newPosition, -75);
      } else if (width >= 1200) {
        newPosition = Math.max(newPosition, -80.2);
      } else if (width >= 1150) {
        newPosition = Math.max(newPosition, -86.2);
      } else if (width >= 1100) {
        newPosition = Math.max(newPosition, -59.2);
      } else if (width >= 950) {
        newPosition = Math.max(newPosition, -82.2);
      } else if (width >= 751) {
        newPosition = Math.max(newPosition, -75.5);
      } else if (width >= 601) {
        newPosition = Math.max(newPosition, -85.49);
      } else if (width >= 500) {
        newPosition = Math.max(newPosition, -93.49);
      } else if (width >= 400) {
        newPosition = Math.max(newPosition, -105.49);
      } else if (width >= 320) {
        newPosition = Math.max(newPosition, -106.49);
      }
    } else if (direction === "left") {
      newPosition += 50;
      if (width >= 1450) {
        newPosition = Math.min(newPosition, 52);
      } else if (width >= 1400) {
        newPosition = Math.min(newPosition, 56.5);
      } else if (width >= 1350) {
        newPosition = Math.min(newPosition, 63);
      } else if (width >= 1250) {
        newPosition = Math.min(newPosition, 75);
      } else if (width >= 1200) {
        newPosition = Math.min(newPosition, 80.2);
      } else if (width >= 1150) {
        newPosition = Math.min(newPosition, 86.2);
      } else if (width >= 1100) {
        newPosition = Math.min(newPosition, 59.2);
      } else if (width >= 950) {
        newPosition = Math.min(newPosition, 82.2);
      } else if (width >= 751) {
        newPosition = Math.min(newPosition, 75.2);
      } else if (width >= 601) {
        newPosition = Math.min(newPosition, 85.49);
      } else if (width >= 500) {
        newPosition = Math.min(newPosition, 93.49);
      } else if (width >= 400) {
        newPosition = Math.min(newPosition, 105.49);
      } else if (width >= 320) {
        newPosition = Math.min(newPosition, 106.49);
      }
    }

    setMoveProducts(newPosition);
  };

  const filter = (name) => {
    const prod = products.filter((prod) => prod.category == name);
    return prod;
  };
  const noche = filter("noche");
  const casual = filter("casual");
  const clasico = filter("clasico");

  return (
    <ModaPresentacional
      noche={noche}
      casual={casual}
      clasico={clasico}
      translateAxisX={translateAxisX}
      moveProducts={moveProducts}
      ArrowBackIosNewIcon={ArrowBackIosNewIcon}
      ArrowForwardIosIcon={ArrowForwardIosIcon}
    />
  );
};
