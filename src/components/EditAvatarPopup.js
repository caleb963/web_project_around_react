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
                type="url"
                name="avatar"
                className="popup__input popup__input_avatar"
                placeholder="Image URL"
                required
                />
            <button type="submit" className="popup__input-submit">Save</button>
            </PopupWithForm>

    );

}

export default EditAvatarPopup;