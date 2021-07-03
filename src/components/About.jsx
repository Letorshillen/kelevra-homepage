import React from "react";
import img from "../static/about-image.png";

const About = () => {
  return (
    <main>
      <h1 className="font-h mt-28 text-8xl text-center">
        meet the <br /> artist
      </h1>
      <div className="flex m-4">
        <img src={img} alt="Sophie Kelevra Image" className="w-1/3" />
        <p className="w-1/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, facilis
          impedit provident sint illo in sed dolorum similique earum ad fugit,
          nostrum adipisci praesentium reiciendis, a debitis consequuntur
          recusandae architecto dolores quibusdam porro aut temporibus. Illum
          quidem iusto eum odio inventore error cumque voluptatibus, eius illo
          animi ullam incidunt quo.
        </p>
      </div>
    </main>
  );
};

export default About;
