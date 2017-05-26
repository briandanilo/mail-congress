import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import AddressForm from './address_form'
import InputZip from './input_zip'
import ActiveClown from './active_clown'
import Letter from './letter'
import Checkout from './checkout'
import StripeComponent from './stripe'


// For dev purposes, instead of url routing
// I just return all components
// but each component only returns anything
// if certain conditions are present

class AppRoot extends React.Component {
  render() {
    return (<div>
      <InputZip />
      <ActiveClown />
      <Letter />
      <Checkout />
      <StripeComponent />
    </div>);
  }
}

export default AppRoot;
