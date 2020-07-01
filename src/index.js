import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import App from './App';
import * as firebase from 'firebase';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>, 
    document.getElementById('root')
);
