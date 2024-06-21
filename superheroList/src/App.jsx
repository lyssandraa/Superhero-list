import { useState } from "react";
import "./App.css";
import { allHeroes } from "./HeroData";

const App = () => {
  const [favourites, setFavourites] = useState([]);

  const handleAddToFaves = (hero) => {
    let newFaveArr = [...favourites];
    newFaveArr.push(hero);
    setFavourites(newFaveArr);
  };

  const handleRemove = (index) => {
    let newFaveArr = [...favourites];
    newFaveArr.splice(index, 1);
    setFavourites(newFaveArr);
  };

  return (
    <div>
      <h1>My Superhero Wiki</h1>

      <div>
        <h3>My Favourite Heroes</h3>
        {favourites.map((faveHero, index) => {
          return (
            <Favourites
              key={index}
              faveHeroData={faveHero}
              removeFave={() => handleRemove(index)}
            />
          );
        })}
      </div>

      <div>
        <h3>All Heroes</h3>
        {allHeroes.map((heroInfo, index) => {
          return (
            <HeroCard
              key={index}
              heroObj={heroInfo}
              faveFunc={handleAddToFaves}
            />
          );
        })}
      </div>
    </div>
  );
};

const Favourites = ({ faveHeroData, removeFave }) => {
  return (
    <div>
      <p>{faveHeroData.hero}</p>
      <button onClick={removeFave}>X</button>
    </div>
  );
};

const HeroCard = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <p>HERO: {props.heroObj.hero}</p>

      {show && (
        <div>
          <p>INFO: {props.heroObj.info}</p>
          <p>VILLAIN: {props.heroObj.villain}</p>
        </div>
      )}

      {/* if there is something passed as an argument in brackets, it has to be given an anonymous arrow syntax function */}
      <button onClick={() => setShow(!show)}>
        {show ? "HIDE INFO" : "SHOW INFOR"}
      </button>

      <button onClick={() => props.faveFunc(props.heroObj)}>
        Add to Faves
      </button>
    </>
  );
};

export default App;
