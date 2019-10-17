import React from 'react'
//import CreateEventForm from './CreateEventForm'
import { createEvent } from '../actions/createEvent'
import { connect } from 'react-redux'

class CreateEventFormContainer extends React.Component {
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createEvent(this.state)
    this.setState(null)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type='text' name='name' onChange={this.handleChange} />
          </label>
          <label>
            Date:
          <input type='text' name='date' onChange={this.handleChange} />
          </label>
          <label>
            Description:
          <input type='text' name='description' onChange={this.handleChange} />
          </label>
          <input type='submit' value='Add event'/>
        </form>
      {/* <CreateEventForm /> */}
      </div>
    )
  }
}

export default connect (null, {createEvent}) (CreateEventFormContainer)