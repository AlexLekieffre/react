const Voiture = (props) => {
  return (
    <div>
      <p>ma voiture est une {props.name}</p>
      <p>Elle roule a une vitesse max de {props.vitesse} km/h.</p>
      <p>elle a {props.hp} chevaux</p>
    </div>
  );
};
export default Voiture;
