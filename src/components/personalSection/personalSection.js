import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./personalSection.scss";
import { personalSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import grad from "../../assets/images/myImages/grad.jpeg";
import sedona from "../../assets/images/myImages/sedona.jpeg";
import japan from "../../assets/images/myImages/japan.jpeg";
import hiking from "../../assets/images/myImages/hiking.jpeg";
import ice from "../../assets/images/myImages/ice.jpeg";

const images = [grad, sedona, japan, hiking, ice];

export default function PersonalSection() {
  const { isDark } = useContext(StyleContext);

//   const images = [
//   "src/assets/images/myImages/grad.jpeg",
//   "src/assets/images/myImages/sedona.jpeg",
//   "src/assets/images/myImages/japan.jpeg",
//   "src/assets/images/myImages/hiking.jpeg",
//   "src/assets/images/myImages/ice.jpeg"
// ];

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
        <div className="carousel-wrapper mt-4">
          <Carousel fade>
            {images.map((src, index) => (
                <Carousel.Item key={index}>
                    <img
                    className="d-block w-100 rounded carousel-img"
                    src={src}
                    alt={`Slide ${index + 1}`}
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                </Carousel.Item>
                ))}
          </Carousel>
        </div>
      </div>
    </Fade>
  );
}