import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import AddressForm from './address_form'
import InputZip from './input_zip'
import ActiveClown from './active_clown'
import Letter from './letter'

class AppRoot extends React.Component {
  render() {
    return (<div>
      <InputZip />
      <ActiveClown />
      <Letter />
    </div>);
  }
}

export default AppRoot;
