import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'

class StripeComponent extends React.Component {

  constructor (props) {
    super(props);
    Stripe.setPublishableKey('pk_test_M6J2BeEVdWribuoxWTdWsGRK'); // set your test public key
  }

  handleSubmit (e) {
    e.preventDefault();
    Stripe.card.createToken(e.currentTarget, function (status, response) {
      console.log( status, response );
    });
  }

  renderPaymentForm() {
    return <form method="post" onSubmit={ this.handleSubmit }>
      <input size="20" data-stripe="address_line1" placeholder="address_line1"/><br/>
      <input size="20" data-stripe="address_line2" placeholder="address_line2"/><br/>
      <input size="20" data-stripe="address_city" placeholder="address_city"/><br/>
      <input size="20" data-stripe="address_state" placeholder="address_state"/><br/>
      <input size="20" data-stripe="address_zip" placeholder="address_zip"/><br/>
      <input size="20" data-stripe="number" placeholder="number"/><br/>
      <input size="4" data-stripe="cvc" placeholder="cvc" /><br/>
      <input size="10" data-stripe="exp-month" placeholder="exp-month" /><br/>
      <input size="10" data-stripe="exp-year" placeholder="exp-year" /><br/>
      <button type="submit">Pay</button>
    </form>;
  }

  render() {
    if (this.readyToCheckout)
      return this.renderPaymentForm()
    else
      return null
  }

}

export default connect(container.allState)(StripeComponent)
