import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props)=>(
    <Modal
    closeTimeoutMS={200}
        isOpen= {!!props.selectedOption}
        onRequestClose={props.handleClearPopup}
        contentLabel = "Selected option"
        className='modal'
    >
        <h3 className='modal__title'>Selected item</h3>
        {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
        <button className='button' onClick={props.handleClearPopup}>Okay</button>
    </Modal>
);

export default OptionModal; 