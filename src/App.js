import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import BaseRouter from "./routes";
import * as actions from "./store/actions/auth";
import "semantic-ui-css/semantic.min.css";
import CustomLayout from "./containers/Layout";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./containers/Home";
import Services from "./containers/services";
import ProductList from "./containers/ProductList";
import Media from "./containers/media";
import Footer from "./containers/footer";
import Contactus from "./containers/contactus";
import Login from "./containers/Login";
import Signup from "./containers/Signup";


import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <Router>
        <CustomLayout {...this.props}>

        </CustomLayout>
        <BaseRouter />
         <Services />
         <ProductList />
        <Contactus />
         <Footer />
        </Router>


    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
