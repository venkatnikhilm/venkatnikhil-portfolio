import React from "react";
import Button from "../button/Button";
import "./BuildSprintBanner.scss";

export default function BuildSprintBanner({isDark}) {
  return (
    <div className={`build-sprint-banner ${isDark ? "dark-mode" : ""}`}>
      <div className="banner-shimmer" />
      <h2 className="banner-headline">Free 24-Hour Build Sprints</h2>
      <p className="banner-subtext">
        For founders &amp; startups -
        give me a challenge, I'll turn your idea into a working
        product, in one day.
      </p>
      <Button text="Let's Build" href="#contact" className="banner-cta" />
    </div>
  );
}
