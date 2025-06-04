import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./personalSection.scss";
import { personalSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function PersonalSection() {
  const { isDark } = useContext(StyleContext);

  if (!personalSection.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "personal-section dark-mode" : "personal-section"} id="personal">
        <h1>{personalSection.title}</h1>
        <p>{personalSection.subtitle}</p>
        <ul>
          {personalSection.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </Fade>
  );
}