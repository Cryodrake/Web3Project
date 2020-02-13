import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import './CallAPI';
//import registerServiceWorker from './registerServiceWorker';
import FetchUser from './CallAPI';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<FetchUser />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.register();

//var element = React.createElement('h1', {className: 'greeting' }, 'Hello, world!');
//ReactDOM.render(element, document.getElementById('root'));
//registerServiceWorker(); 