import React from 'react';
import axios from 'axios'; // Brug Axios til HTTP-anmodninger

class MailService extends React.Component {
    sendEmail(to, subject, body) {
        const emailData = { to, subject, body };
        return axios.post('https://mailbackend.azurewebsites.net/SendMail', emailData);
    }
}

export default MailService;
