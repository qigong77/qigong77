import React from 'react';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext();
    return (
        <div 
            className={`${
                isModalOpen ? 'modal-overlay show=modal' : 'modal-overlay'
            }`}
        >
            <button onClick={closeModal}></button>
        </div>
    );
};

export default Modal;