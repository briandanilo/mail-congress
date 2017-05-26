import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import lobApi from '../actions/lob_api.js'
import TestButton from './test_button'
import OfficeButton from './office_button'

class Checkout extends React.Component {

  constructor (props) {
    super(props);
    this.submitCart = this.submitCart.bind(this)
  }

  submitCart () {
    this.props.dispatch({type:"SUBMIT_CART"})
  }

  renderCheckout() {
    return (<ul>Your Cart:
      <li>To {this.props.activeClown.firstName} {this.props.activeClown.lastName}</li>
      <li>This many letters: {this.props.addressCart.length}</li>
      <li>The letter reads: {this.props.letterBody}</li>
      </ul>)
  }

  render () {
    if (this.props.readyToCheckout)
      return this.renderCheckout()
    else return null
  }

}

export default connect(container.allState)(Checkout)
