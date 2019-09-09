import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page from "./WarningBanner";
import Toggle from "./Toggle";
import LoginControl from "./LoginControl"
import MailBox from "./MailBox";
import NumberList from "./Lists";
import Blog from "./Blog";
import NameForm from "./NameForm";

const numbers = [1, 2, 3, 4, 5];
const messages = ['React', 'Re: React', 'Re:Re: React', 'Re:Re:Re: React'];
const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
   // <LoginControl/>,
   //  <MailBox unreadMessages={messages}/>,
   //<Toggle/>
   // <Page/>,
   // <NumberList numbers={numbers}/>,
   // <Blog posts={posts}/>,
    <NameForm/>,
   document.getElementById('root'));

