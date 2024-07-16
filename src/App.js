import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';
import closeIcon from './images/Close__Icon.png';




function App() {
   
const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
const [selectedCard, setSelectedCard] = useState(null);


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

  return (
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

      <PopupWithForm  
        name="profile"
        title="Edit profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        formId="profile-form"
        buttonText="Save"
        >
          <input className = "popup__input popup__input-name" id="profile-input-name" type='text' name='name' minLength='2' maxLength='40' placeholder='First name, Last name' />
          <span className="popup-error profile-input-name-error" ></span>
          <input className = 'popup__input popup__input-about' id='profile-input-about' type='text' name='about' minLength='2'maxLength='200' placeholder='Occupation' />
          <span className='popup-error profile-input-about-error'></span>
        </PopupWithForm>

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

          <PopupWithForm 
            name='update-avatar'
            title='Change profile picture'
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            formId='update-avatar-form'
            buttonText='Save'
            >
              <input className='popup__input popup__input-about' id='input-avatar-url' type='text' placeholder='image url' />
              <span className='popup-error input-avatar-url-error'></span>
            </PopupWithForm>

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />

    <div className="popup" id="popup-profile">
      <div className="popup__close-button">
        <img src={closeIcon} alt="close form button" id="close-profile-form" />
      </div>
      <form className="popup__edit-form" id="profile-form">
        <h2 className="popup__edit-form-title">Edit profile</h2>
        <input className="popup__input popup__input-name" id="profile-input-name" type="text" name="name" minLength="2" maxLength="40" placeholder="First name, Last name" />
        <span className="popup-error profile-input-name-error"></span>
        <input className="popup__input popup__input-about" id="profile-input-about" type="text" name="about" minLength="2" maxLength="200" placeholder="Occupation" />
        <span className="popup-error profile-input-about-error"></span>
        <button className="popup__input-submit" id="profile-submit" type="submit">Save</button>
      </form>
    </div>

    <div className="popup" id="popup-add-card">
      <div className="popup__close-button">
        <img src={closeIcon} alt="close form button" id="close-addcard-form" />
      </div>
      <form className="popup__edit-form" id="addcard-form">
        <h2 className="popup__edit-form-title">New Place</h2>
        <input className="popup__input popup__input-name" id="input-card-title" type="text" minLength="2" maxLength="30" placeholder="Title" />
        <span className="popup-error input-card-title-error"></span>
        <input className="popup__input popup__input-about" id="input-card-url" type="text" placeholder="url" />
        <span className="popup-error input-card-url-error"></span>
        <button className="popup__input-submit" type="submit" id="addcard-submit">Create</button>
      </form>
    </div>

    <div className="popup" id="popup-show-picture">
      <div className="popup__image-container">
        <div className="popup__image-close-button">
          <img src={closeIcon} alt="close form button" id="close-popup-image" />
        </div>
        <img className="popup__image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="placeholder" />
        <h2 className="popup__image-title"></h2>
      </div>
    </div>

    <div className="popup" id="popup-delete-card">
      <div className="popup-delete-container">
        <div className="popup__close-button" id="close-delete-card-popup">
          <img src={closeIcon} alt="close form button" />
        </div>
        <div className="popup__confirmation-content">
          <h2 className="popup__edit-form-title">Are You Sure?</h2>
          <button className="popup__input-submit" type="submit" id="delete-card-submit">Yes</button>
        </div>
      </div>
    </div>

    <div className="popup" id="popup-update-avatar">
      <div className="popup__avatar-container">
        <div className="popup__close-button">
          <img src={closeIcon} alt="close form button" id="close-update-avatar" />
        </div>
        <form className="popup__edit-form" id="update-avatar-form">
          <h2 className="popup__edit-form-title">Change profile picture</h2>
          <input className="popup__input popup__input-about" id="input-avatar-url" type="text" placeholder="image url" />
          <span className="popup-error input-card-url-error"></span>
          <button className="popup__input-submit" type="submit" id="avatar-submit">Save</button>
        </form>
      </div>
    </div>
  </div>
);
}

export default App;
