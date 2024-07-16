import closeIcon from '../images/Close__Icon.png';

function PopupWithForm(props) {
    return (
        <div className ={`popup popup_type_${props.name} ${props.isOpen ? 'popup__opener' : ''}`}>
            <div className="popup__close-button">
                <img src={closeIcon} alt="close form button" onClick={props.onClose} />
            </div>
            <form className='popup__edit-form' name={props.name} id={props.formId}>
                <h2 className="popup__edit-form-title">{props.title}</h2>
                {props.children}
                <button className='popup__input-submit' type='submit'>{props.buttonText}</button>
            </form> 

        </div>
    );
}

export default PopupWithForm;
