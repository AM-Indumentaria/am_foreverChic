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

  console.log(moveProducts);
  const translateAxisX = (direction) => {
    let newPosition = moveProducts;

    if (direction === "left") {
      newPosition -= 150;
      newPosition = Math.max(newPosition, -550);
    } else if (direction === "right") {
      newPosition += 150;
      newPosition = Math.min(newPosition, 0);
    }

    console.log(newPosition);
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
