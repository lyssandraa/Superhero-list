import { useState } from "react";
import "./App.css";
import { allHeroes } from "./HeroData";

const App = () => {
  return (
    <div>
      <h1>My Superhero Wiki</h1>

      {allHeroes.map((heroInfo, index) => {
        return <HeroCard key={index} heroObj={heroInfo} />;
      })}
    </div>
  );
};

const HeroCard = (props) => {
  return (
    <>
      <p>HERO: {props.heroObj.hero}</p>
      <div>
        <p>INFO: {props.heroObj.info}</p>
        <p>VILLAIN: {props.heroObj.villain}</p>
      </div>
    </>
  );
};

export default App;
