import React, { useContext } from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import { socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className="main" id="opensource">
      {/* <h1 className="project-title">Stuff I Built</h1> */}
      <p className={isDark ? "dark-mode" : ""} style={{ textAlign: "center", marginTop: "1rem" }}>
        Explore more of my projects on GitHub.
      </p>
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <Button
          text={"View My GitHub Repositories"}
          className="project-button"
          href="https://github.com/venkatnikhilm?tab=repositories"
          newTab={true}
        />
      </div>
    </div>
  );
}