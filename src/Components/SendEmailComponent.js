import React from 'react';
import '.././App.css';
import './SendEmailComponent.css';

function SendEmailComponent() {
    return (
        <div>
            <div className="sendEmailContent">
                <input type="email" placeholder="Din e-mail" className="sendEmailInput" />
                <input type="text" placeholder="Dit navn" className="sendEmailInput" />
                <textarea placeholder="Din besked" className="sendEmailTextarea" />
                <button type="submit" className="sendEmailButton">Send Email</button>
            </div>
        </div>
    );
}

export default SendEmailComponent;