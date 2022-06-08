import Profile from "../components/components_profile";
import Input from "../components/components_input";
import Button from "../components/components_button";

function Commmentaire(props) {
  return (
    <fieldset>
      <legend>exo 1 bis</legend>
      <div>
        <Profile
          src="https://play-lh.googleusercontent.com/bQX4No-dqM7oUrr61xKMTdjj05IlqpTY_tSd552di6jsNFvXL0p3frU7GPC6Y66Px8x8=w240-h480-rw"
          alt="profile_picture"
        />
        <Input type="text" placeholder="Votre commentaire : " />
        <Button type="submit" placeholder="Envoyer" />
      </div>
    </fieldset>
  );
}

export default Commmentaire;
