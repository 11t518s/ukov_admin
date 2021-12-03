import React from 'react';
import './index.css'

const CommonModal = ({setModal, innerContent, imgSrc}) => {
    return (
        <div className="commonModalWrapper" onClick={() => setModal(false)}>
            <div className="commonModalOverlay"/>
            <div className="commonModalContent">
                {innerContent}
                <img className="modalImg" src={imgSrc}/>
            </div>
        </div>
    );
};
export default CommonModal;
