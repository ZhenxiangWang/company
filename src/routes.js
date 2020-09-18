import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./scenes/home";
import Movie from "./scenes/movie";
import Music from "./scenes/music";
import Novel from "./scenes/novel";
import Image from "./scenes/image";
import Game from "./scenes/game";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movie" component={Movie} />
      <Route path="/music" component={Music} />
      <Route path="/novel" component={Novel} />
      <Route path="/image" component={Image} />
      <Route path="/game" component={Game} />
    </Switch>
  </Router>
);
