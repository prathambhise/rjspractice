//import profilePic from "./card_assets/ronan.jpeg"
function Card() {
  return (
    <>
      <div className="card">
        <img className="card-image" src="src\assets\images.png" alt="profile picture" />
        
        <h2 className="card-title">Saoirse Ronan</h2>
        <p className="card-text">Irish Actress</p>
      </div>
    {/*  <img src={profilePic} alt="import-profilePic" /> */}
    </>
  );
}

export default Card;
