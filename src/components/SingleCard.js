import "./SingleCard.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} className="front" alt="card front"></img>
        <img
          src="/img/cover.png"
          className="back"
          alt="card back"
          onClick={handleClick}
        ></img>
      </div>
    </div>
  );
};

export default SingleCard;
