
function Card({ card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
    }

    return(
        <div  className="elements__card">
        <div
        className="elements__card-image" 
        style={{ backgroundImage: ` url(${card.link})`}}
        onClick= {handleClick} />
        <button className="elements__card-delete">
            <img  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Delete card" />
            </button>
            <div className="elements__card-description">
                <h2 className="elements__card-title">{card.name}</h2>
                <button className="elements__card-heart">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="heart" />
                </button>
                <span className="elements__card-like-count">{card.likes.length}</span>
            </div>
    </div>
);
}

export default Card;
    