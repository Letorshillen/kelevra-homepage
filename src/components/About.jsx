import React from "react";
import Scene from "./threeScenes/SceneAbout";

const About = () => {
  return (
    <main>
      <h2 className="font-h mt-28 text-8xl text-center">
        meet the <br /> artist
      </h2>
      <div className="w-full h-m">
        <Scene />
      </div>
    </main>
  );
};

export default About;
