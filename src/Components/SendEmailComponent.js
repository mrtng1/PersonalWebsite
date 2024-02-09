import React, {useState} from 'react';
import '.././App.css';
import './SendEmailComponent.css';
import MailService from "../Service/MailService";

function SendEmailComponent() {
    const mailService = new MailService();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = 'Ugyldig e-mail';
            isValid = false;
        }

        if (!name) {
            tempErrors.name = 'Navn er påkrævet';
            isValid = false;
        }

        if (!message) {
            tempErrors.message = 'Besked er påkrævet';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const subject = `Ny besked fra ${name} - ${email}`;
            const body = `Navn: ${name}\nEmail: ${email}\nBesked: ${message}`;

            mailService.sendEmail("mrtngrulyo@gmail.com", subject, body)
                .then(() => {
                    console.log('Email sendt!');
                    alert('Email sendt!');
                }).catch((error) => {
                console.log(error);
                alert('Email kunne ikke sendes!');
            });
        }
    }

    return (
        <div>
            <div className="subHeaderText disableUserSelect">Contact Me</div>
            <div className="sendEmailContent">
                <input
                    type="email"
                    placeholder="Din e-mail"
                    className={`sendEmailInput ${errors.email ? 'inputError' : ''}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Dit navn"
                    className={`sendEmailInput ${errors.name ? 'inputError' : ''}`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder="Din besked"
                    className={`sendEmailTextarea ${errors.message ? 'textareaError' : ''}`}
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" className="sendEmailButton" onClick={handleSubmit}>Send Email</button>
            </div>
        </div>
    );
}

export default SendEmailComponent;