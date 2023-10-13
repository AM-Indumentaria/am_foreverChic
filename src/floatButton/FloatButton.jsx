import { FloatButtonPresentacional } from "./FloatButtonPresentacional.jsx";
import "./floatButton.css";
import { useState } from "react";

export const FloatButton = () => {
  const [active, setActive] = useState("disabled");

  const activeIcon = () => {
    setActive(active == "disabled" ? "" : "disabled");
  };

  return <FloatButtonPresentacional activeIcon={activeIcon} active={active} />;
};
