import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./script";
import App from "./App";

import "font-awesome/css/font-awesome.min.css";
import "@fancyapps/fancybox/dist/jquery.fancybox.js";
import "jquery.cycle2/src/jquery.cycle2.min.js";
import "@fancyapps/fancybox/dist/jquery.fancybox.min.css";
import "./App.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
