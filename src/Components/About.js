import React from "react";
import CloseBtn from "../ElementDetails/CloseBtn";
const About = () => {
  return (
    <div className="About d-flex">
      <div className="textAboutDiv d-flex flex-column justify-content-around">
        <h2 className="textAbout">ИЗРАБОТЕНО ОД СТУДЕНТИТЕ НА АКАДЕМИЈАТА</h2>
        <div>
          <h5 className="colorWhite">web: codepreneurs.co</h5>
          <h5 className="colorWhite">E-mail: contact@brainster.com</h5>
        </div>
      </div>
      <div className="d-flex flex-column align-items-end">
        <CloseBtn />
        <img src="/img/about.jpg" />
      </div>
    </div>
  );
};

export default About;
