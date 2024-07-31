import React , { useRef, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from './CurrentUserContext';


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarRef = useRef();
    const currentUser = useContext(CurrentUserContext);

    function handleSubmit(e) {
        e.preventDefault();
            if (avatarRef.current) {
                onUpdateAvatar({
                    avatar: avatarRef.current.value,
                });
            }
    }
  
    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            title="Change profile picture"
            name="update-avatar"
            onSubmit={handleSubmit}
            >
            <input 
                ref={avatarRef}
                type="text"
                name="avatar"
                className="popup__input"
                placeholder="EnterImage URL"
                required
                />
            <button type="submit" className="popup__save-button">Save</button>
            </PopupWithForm>

    );

}

export default EditAvatarPopup;