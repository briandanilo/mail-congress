import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import lobApi from '../actions/lob_api.js'

class Letter extends React.Component {

  constructor (props) {
    super(props);
    this.submitLetterBody = this.submitLetterBody.bind(this)
    this.state = {
      letterBody: ""
    }
  }

  submitLetterBody(){
    this.props.dispatch({type:"SUBMIT_LETTER_BODY",data:this.state})
  }

  renderLetterBody(){
    return (<div>
        <input type="text" className="letter-body-text"></input>
        <button onClick={this.submitLetterBody}>Submit</button>
    </div>);
  }

  render () {
    if (this.props.letterBody)
      return <div className="letter-container">{this.renderLetterBody()}</div>
    else return null
  }
}

export default connect(container.allState)(Letter)
