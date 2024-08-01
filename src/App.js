import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';
import closeIcon from './images/Close__Icon.png';
import CurrentUserContext from './components/CurrentUserContext';
import api from './utils/api';
import EditProfilePopup from './components/EditProfilePopup';
import EditAvatarPopup from './components/EditAvatarPopup';


function App() {
   
const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
const [selectedCard, setSelectedCard] = useState(null);
const [currentUser, setCurrentUser] = useState({});

useEffect(() => {
  api.getUserInfo()
    .then((userData) => {
      setCurrentUser(userData);
    })
    .catch((err) => console.log(err));
}, []);

const handleEditAvatarClick = () => {
  setEditAvatarPopupOpen(true);
};

const handleEditProfileClick = () => {
  setEditProfilePopupOpen(true);
};

const handleAddPlaceClick = () => {
  setAddPlacePopupOpen(true);
}

const handleCardClick = (card) => {
  setSelectedCard(card);
}

const closeAllPopups = () => {
  setEditProfilePopupOpen(false);
  setAddPlacePopupOpen(false);
  setEditAvatarPopupOpen(false);
  setSelectedCard(null);
};

const handleUpdateUser =(userData) => {
  api.updateUserInfo(userData)
    .then((updatedUserData) => {
      setCurrentUser(updatedUserData);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
}

const handleUpdateAvatar = (avatarData) => {
  api.setUserAvatar(avatarData)
    .then((updatedUserData) => {
      setCurrentUser(updatedUserData);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
}
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main 
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        onCardClick = {handleCardClick}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      <Footer />

      <EditProfilePopup 
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      onUpdateUser={handleUpdateUser}
      /> 

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

  

        <PopupWithForm 
          name='add-card'
          title='New Place'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          formId='addcard-form'
          buttonText='Create'
          >
            <input className='popup__input popup__input-name' id='input-card-title' type='text' minLength='2' maxLength='30' placeholder='Title' />
            <span className='popup-error input-card-title-error'></span>
            <input className='popup__input popup__input-about' id='input-card-url' type='text' placeholder='url'/>
            <span className='poopup-error input-card-url-error'></span>
                      </PopupWithForm>

       

  
  </div>
  </CurrentUserContext.Provider>
);
}

export default App;
