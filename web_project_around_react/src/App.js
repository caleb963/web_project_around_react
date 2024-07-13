import headerTitle from './images/header__title.png';
import profileAvatar from './images/profile__avatar.png';
import profileAvatarEditIcon from './images/Edit__Button.png';
import editButtonIcon from './images/Edit__Button.png';
import addButtonIcon from './images/add__Button.png';
import closeIcon from './images/Close__Icon.png';

function App() {
  return (
    <div className="page">
    <header className="header">
      <img src={headerTitle} alt="header-title" className="header__title" />
    </header>
    <div className="profile">
      <div className="profile__avatar-content">
        <img className="profile__avatar" src={profileAvatar} alt="Jacques Cousteau" />
        <img className="profile__avatar-edit-icon" src={profileAvatarEditIcon} alt="Edit Avatar" />
      </div>
      <div className="profile__info">
        <div className="profile__title">
          <h2 className="profile__name" id="profile-name">Jacques Cousteau</h2>
          <div className="profile__edit-button" id="profile-edit-button">
            <img src={editButtonIcon} alt="Edit your profile button" />
          </div>
        </div>
        <h3 className="profile__about" id="profile-about">Explorer</h3>
      </div>
      <div className="profile__add-button" id="profile-add-button">
        <img src={addButtonIcon} alt="Add image to your profile button" />
      </div>
    </div>
    <section className="elements">
      <template className="template__card">
        <div className="elements__card">
          <img className="elements__card-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="image of card" />
          <button className="elements__card-delete">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Delete card" />
          </button>
          <div className="elements__card-description">
            <h2 className="elements__card-title"></h2>
            <button className="elements__card-heart">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="heart" />
            </button>
            <span className="elements__card-like-count">0</span>
          </div>
        </div>
      </template>
    </section>
    <footer className="footer">
      <p className="footer__text">© 2020 Around the U.S.</p>
    </footer>

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
