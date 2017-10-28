import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

import * as actions from './action_creators';

import './semantic/semantic.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "video-react/dist/video-react.css";
import './index.css';



const store = createStore(reducer, composeWithDevTools(
    applyMiddleware()
));

function getJSON(url) {
    var xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.responseText);
                }
            }
        };
        xhr.open('GET', url);
        xhr.send();
    });
};


getJSON('https://kpow.space/services/projects.php').then(data => {
  store.dispatch(actions.setProjectsData(data.data));
});

getJSON('https://kpow.space/services/stars.php?page=1').then(data => {
  store.dispatch(actions.setStarsData(data.reverse()));
});

getJSON('/static_data/goodreads100_optimized.json').then(data => {
  store.dispatch(actions.setBooksData(data.reviews.review));
});

getJSON('https://kpow.space/services/instagram.php').then(data => {
  store.dispatch(actions.setInstagramsData(data.data));
});


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
