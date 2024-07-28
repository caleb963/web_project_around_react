import React, {useState , useEffect, useContext} from'react';
import api from '../utils/api.js';
import Card from './Card.js';
import profileAvatar from '../images/profile__avatar.png';
import profileAvatarEditIcon from '../images/Edit__Button.png';
import editButtonIcon from '../images/Edit__Button.png';
import addButtonIcon from '../images/add__Button.png';
import CurrentUserContext from './CurrentUserContext.js';


function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  /* const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');*/
    const [currentUser,setCurrentUser] = useState(useContext(CurrentUserContext)); //use the content of the CurrentUserContext
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
          .then((userData) => {
            /*setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);*/
            setCurrentUser(userData);

          })
          .catch((err) => console.log(err));

          api.getCards()
            .then((cardData) => {
                setCards(cardData);
            })
            .catch((err) => console.log(err));
    }, []);

    function handleCardLike(card) {
      const isLiked = card.likes.some(i => i._id === currentUser._id);

      api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
    }

    function handleCardDelete(card) {
      if(card.owner._id === currentUser._id) {
      api.deleteCard(card._id).then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      });
    } else {
      console.log('You can only delete your own cards');
    }
  }

    return (
    <div className="page">
        <div className="profile">
      <div className="profile__avatar-content" >
        <img className="profile__avatar" src={currentUser.avatar} alt="Jacques Cousteau" style={{ backgroundImage: `url(${currentUser.avatar})`}}  />
        <img className="profile__avatar-edit-icon" src={profileAvatarEditIcon} alt="Edit Avatar" onClick={onEditAvatar} />
      </div>
      <div className="profile__info">
        <div className="profile__title">
          <h2 className="profile__name" id="profile-name">{currentUser.name}</h2>
          <div className="profile__edit-button" id="profile-edit-button" onClick={onEditProfile}>
            <img src={editButtonIcon} alt="Edit your profile button" />
          </div>
        </div>
        <h3 className="profile__about" id="profile-about">{currentUser.about}</h3>
      </div>
      <div className="profile__add-button" id="profile-add-button" onClick={onAddPlace}>
        <img src={addButtonIcon} alt="Add image to your profile button" />
      </div>
    </div>
    <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
        ))}
    </section>
    </div>
    );
}

export default Main;