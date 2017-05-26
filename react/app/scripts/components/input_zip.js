import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import lobApi from '../actions/lob_api.js'
import getClown from '../actions/get_clown.js'
import getClownAddress from '../actions/get_clown_address.js'

class InputZip extends React.Component {

  constructor (props) {
    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.submitAddress = this.submitAddress.bind(this);
    this.state = {
      zip: ""
    }
  }

  submitAddress (e) {
    console.log("about to dispatch this zip ",this.state.zip)
    this.props.dispatch(getClownAddress(this.state.zip))
  }

  handleFormChange (e) {
    console.log("this is zip: ",this.state.zip)
    this.setState({
      zip: e.target.value
    })
  }

  render () {
    return (<div>
      <input type='text' placeholder="Zip Code" value={this.state.zip} onChange={this.handleFormChange}/>
        <button onClick={this.submitAddress}>Submit Zip</button>
      </div>
    );
  }
}

export default connect(container.allState)(InputZip)
