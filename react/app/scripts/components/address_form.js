import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import lobApi from '../actions/lob_api.js'
import TestButton from './test_button'


//For allowing a user to input a custom address
class AddressForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
     const target = event.target;
     const value = target.value;
     const name = target.name;

     this.setState({
       type:"create_address",
       [name]: value
     });
  }

  render () {
    return (
      <div className="addressForm">
        <div className="input-group">
          <input name="name" value={this.state.name} onChange={this.handleInputChange} type="text"className="form-control" placeholder="Name" aria-describedby="basic-addon2"></input>
          <input name="addressLine1" value={this.state.addressLine1} onChange={this.handleInputChange}  type="text" className="form-control" placeholder="Address Line 1" aria-describedby="basic-addon2"></input>
          <input name="addressLine2" value={this.state.addressLine2} onChange={this.handleInputChange}  type="text" className="form-control" placeholder="Address Line 2" aria-describedby="basic-addon2"></input>
          <div className="cityStateZip">
            <input name="city" value={this.state.city} onChange={this.handleInputChange}  type="text" className="form-control" placeholder="City" aria-describedby="basic-addon2"></input>
            <input name="state" value={this.state.state} onChange={this.handleInputChange}  type="text" className="form-control" placeholder="State" aria-describedby="basic-addon2"></input>
            <input name="zip" value={this.state.zip} onChange={this.handleInputChange}  type="text" className="form-control" placeholder="Zip" aria-describedby="basic-addon2"></input>
          </div>
        </div>
        <TestButton data={this.state}/>
      </div>
    );
  }
}

export default connect(container.allState)(AddressForm)
