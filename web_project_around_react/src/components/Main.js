import profileAvatar from '../images/profile__avatar.png';
import profileAvatarEditIcon from '../images/Edit__Button.png';
import editButtonIcon from '../images/Edit__Button.png';
import addButtonIcon from '../images/add__Button.png';


function Main() {
    return (
    <div className="page">
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
    </div>
    );
}

export default Main;