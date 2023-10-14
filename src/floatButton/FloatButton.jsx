import { FloatButtonPresentacional } from "./FloatButtonPresentacional.jsx";
import "./floatButton.css";
import { useState } from "react";

export const FloatButton = () => {
  const [active, setActive] = useState("disabled");
  console.log(active);

  const activeIcon = () => {
    setActive(active == "disabled" ? "icon" : "disabled");
  };

  return <FloatButtonPresentacional activeIcon={activeIcon} active={active} />;
};
