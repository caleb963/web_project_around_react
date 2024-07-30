import React,{useState,useContext,useEffect} from 'react';
import PopupWithForm from './PopupWithForm.js';
import CurrentUserContext from './CurrentUserContext.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser}) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (currentUser) {
            setName(currentUser.name || '');
            setDescription(currentUser.about || '');
        }
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} title="Edit profile" name="edit" onSubmit={handleSubmit} buttonText="Save">
          <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          className="popup__input"
          placeholder="Name"
          required
          minLength="2"
          maxLength="40"
         />
         <input
           type="text"
           name="about"
           value={description}
           onChange={handleDescriptionChange}
           className="popup__input"
           placeholder="About"
           required
              minLength="2"
              maxLength="200"
         />
        <button type="submit" className="popup__save-button">Save</button>
        </PopupWithForm>
    );
}


export default EditProfilePopup;