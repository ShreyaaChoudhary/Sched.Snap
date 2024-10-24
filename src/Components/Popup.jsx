// Popup.js
import React from 'react';
import { gsap } from 'gsap';
import './Popup.css'; // Create a CSS file for styling the popup
import Authform from './Authform';
const Popup = ({ isOpen, onClose }) => {
    const pop = gsap.timeline({ paused: true });

    React.useEffect(() => {
        if (isOpen) {
            pop.to(".popup-template", {
                duration: 0.8,
                opacity: 1,
                y: 0,
                scale: 1,
                ease: "Power4.easeOut",
            })
            .from(".popup-top, .form-row1 h1, .form-row1 input, .form-row1 textarea, .submit-popup", {
                duration: 0.5,
                opacity: 0,
                y: 15,
                stagger: {
                    amount: 0.4,
                },
            }, "-=.3");
            pop.play();
        } else {
            pop.reverse();
        }
    }, [isOpen]);

    return (
        <div className={`popup ${isOpen ? 'active' : ''}`}>
            <div className="popup-template">
                <div className="popup-close" onClick={onClose}>
                    <ion-icon name="close-outline">x</ion-icon>
                </div>
                <div className="popup-top">
                    <h1>Become a Member</h1>
                </div>
                <div className="popup-form">
                    {/* form */}
                    {/* <Authform/> */}
                   
                    <div className="form-row">
                        <div className="form-row1">
                            <button className="submit-popup">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;