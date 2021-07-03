import React from "react";
import Scene from "./threeScenes/SceneHero";

const Home = () => {
  return (
    <main>
      <h1 className="font-h absolute transform -translate-x-2/4 -translate-y-2/4 top-1/3 left-2/4 text-8xl text-center">
        art for <br /> pokemaniacs
      </h1>
      <div className="h-screen w-screen">
        <Scene />
      </div>
    </main>
  );
};

export default Home;
