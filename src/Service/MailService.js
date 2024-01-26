import React from 'react';
import axios from 'axios'; // Brug Axios til HTTP-anmodninger

class MailService extends React.Component {
    sendEmail(to, subject, body) {
        const emailData = { to, subject, body };
        //return axios.post('https://craftburgerweb.azurewebsites.net/SendMail', emailData);
        return axios.post('http://localhost:5113/SendMail', emailData);

    }
}

export default MailService;
