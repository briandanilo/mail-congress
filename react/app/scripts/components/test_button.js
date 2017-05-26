import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import lobApi from '../actions/lob_api.js'

//button for testing APIs
class TestButton extends React.Component {

  constructor (props) {
    super(props);
    this.testApi = this.testApi.bind(this)
  }

  testApi(){
    this.props.dispatch(lobApi(this.props.data))
  }

  render () {
    return (
      <div className="test-btn-container">
        <button type="button" className="btn btn-default" onClick={this.testApi}>SUBMIT</button>
      </div>
    );
  }
}

export default connect(container.allState)(TestButton)
