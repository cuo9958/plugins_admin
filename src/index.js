import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import User from "../plugin/user/page"

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/user" component={User} />
        </div>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
