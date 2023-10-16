import React from "react";
import "../css/about.css";
import { calculatorInfo } from "../data/calculatorInfo";

const About = () => {
  return (
    <>
      <div className="contAbout">
        <h2>About the Datamath II</h2>
        <p>
          The DataMath II is a calculator that was manufactured by Texas
          Instruments from 1977 to 1981. It was the successor to the TI-2500
          Datamath, and is related to the Math Explorer, Math Explorer II, and
          the TI-1250.
        </p>
        <p>
          The Datamath II seems to be together with the TI-150 the last TI
          calculator using the standard Klixon™ keyboard technology.
        </p>
        <p>
          In Spain this calculator was labeled TI-2500 II without the dash at
          the series II designation.
        </p>

        <div className="">
          {calculatorInfo.map((img, index) => (
            <img src={img} alt={`Calculator ${index}`} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
