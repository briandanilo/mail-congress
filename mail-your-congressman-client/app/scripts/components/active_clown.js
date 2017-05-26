import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import lobApi from '../actions/lob_api.js'
import TestButton from './test_button'
import OfficeButton from './office_button'

class ActiveClown extends React.Component {

  constructor (props) {
    super(props);
    this.submitCart = this.submitCart.bind(this)
  }

  submitCart () {
    this.props.dispatch({type:"SUBMIT_CART"})
  }

  renderAddresses() {
    if (!this.props.letterBody){
      return this.props.activeAddress.map((i)=>{
        return (<OfficeButton addressType={i.type} street={i.street} city={i.city} state={i.state} zip={i.zip} />)
      })
    } else {
      console.log("we have a cart")
      return (<div>Sending letter to {this.props.addressCart.length} addresses</div>)
    }

    //return <OfficeButton addressType={this.props.activeAddress.type} street={this.props.activeAddress.street} city={this.props.activeAddress.city} state={this.props.activeAddress.state} zip={this.props.activeAddress.zip} />
  }


  renderClown () {

    return (<div className="clown-info">
        <div className="clown-bio">{this.props.activeClown.firstName} {this.props.activeClown.lastName}<br/></div>
        <div>{this.renderAddresses()}</div>
        <button type="submit" onClick={this.submitCart}>Write Letter</button>
      </div>)

  }

  render () {

  if (this.props.activeClown){
      return this.renderClown()
    } else {
      return null
    }

  }

}

export default connect(container.allState)(ActiveClown)
