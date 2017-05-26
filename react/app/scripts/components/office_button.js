import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import lobApi from '../actions/lob_api.js'

// displays clown address and a checkbox
// for user to add clown to shopping cart
class OfficeButton extends React.Component {

  constructor (props) {
    super(props);
    this.addToCart = this.addToCart.bind(this)
    this.state = {
      addressType: this.props.addressType,
      street: this.props.street,
      city: this.props.city,
      state: this.props.state,
      zip: this.props.zip,
    }
  }

  addToCart(e){
    this.props.dispatch({type:"ADD_TO_CART",data:this.state})
  }

  render () {
    return (<div className="clown-address">{this.props.addressType} Office <br/>
        {this.props.street} <br/>
        {this.props.city}, {this.props.state}, {this.props.zip}<br/>
        <input type="checkbox" onClick={this.addToCart}></input>Add to cart
        </div>)
    }
  }

export default connect(container.allState)(OfficeButton)
