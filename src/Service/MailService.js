import React from 'react';

class MailService extends React.Component {
    sendEmail(to, subject, body) {
        const emailData = {to, subject, body};
        return this.http.post(`https://craftburgerweb.azurewebsites.net/SendMail`, emailData);
    }

}

export default MailService;
