import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { initialize } from "./actions";
import Spinner from "../spinner";

const App = ({ children, initialized, initialize }) => {
  useEffect(() => {
    initialize();
  }, [initialize]);
  return initialized ? children : <Spinner />;
};

const mapStateToProps = ({ app }) => ({
  initialized: app.initialized,
});

const mapDispatchToProps = { initialize };

export default connect(mapStateToProps, mapDispatchToProps)(App);
