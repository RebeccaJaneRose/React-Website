import React, { Component } from 'react';
import logo from './logo.svg';
import Page from "./WarningBanner";

//A welcome message with the number of unread messages stored in the unread message array displayed.
class MailBox extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const unreadMessages = this.props.unreadMessages;
        return (
            <div>
                <h1>Hello!</h1>
                {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
                }
            </div>
        );
    }
}

export default MailBox;
