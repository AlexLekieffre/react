import Voiture from "./voiture";

const Garage = () => {
  return (
    <fieldset>
      <legend>exo 1 </legend>
      <div>
        <Voiture name="audi" vitesse="143" hp="50" />
        <Voiture name="bmw" vitesse="200" hp="500" />
      </div>
    </fieldset>
  );
};

export default Garage;
