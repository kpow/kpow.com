import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

import * as actions from "./action_creators";

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

function getJSON(url) {
  var xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.responseText);
        }
      }
    };
    xhr.open("GET", url);
    xhr.send();
  });
}

const getStarsData = (page = 1) => {
  console.log("getjson");
  getJSON("https://kpow.space/services/stars.php?page=" + page + "&perPage=18")
    .then(data => {
      console.log("page = " + page);
      store.dispatch(actions.setStarsData(data.reverse()));
    })
    .then(() => {
      console.log("dingdong");
    });
};

const getBooksData = (page = 1) => {
  console.log("getbooksjson");
  getJSON("static_data/books" + page + ".json")
    .then(data => {
      //console.log(data);
      store.dispatch(actions.setBooksData(data.review));
    })
    .then(() => {
      console.log("dingbooksdong");
    });
};

getStarsData(1);
getBooksData(1);

getJSON("https://kpow.space/services/total_stars.php").then(data => {
  store.dispatch(actions.setTotalStars(data));
});

getJSON("https://kpow.space/services/projects.php").then(data => {
  store.dispatch(actions.setProjectsData(data.data));
});

getJSON("https://kpow.space/services/instagram.php").then(data => {
  store.dispatch(actions.setInstagramsData(data.data));
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App starSetter={getStarsData} bookSetter={getBooksData} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
