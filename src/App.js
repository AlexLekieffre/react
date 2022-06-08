import Garage from "../src/Function/garage.js";
import "./styles.css";
import Commentaire from "../src/Function/commentaire";
import Clock from "./Function/clock.js";

export default function App() {
  return (
    <div className="App">
      <Garage />
      <Commentaire />
      <Clock />
    </div>
  );
}
