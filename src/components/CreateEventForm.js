import React from 'react'
import { createEvent } from '../actions/createEvent'
import { connect } from 'react-redux'

class CreateEventForm extends React.Component {
  state = {
    name: "",
    date: "",
    description: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createEvent(this.state)
    this.setState({
      name: "",
      date: "",
      description: "",
    })
  }

  render() {

    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
          <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
            </label>
            <label>
              Date:
          <input type='text' name='date' onChange={this.handleChange} value={this.state.date} />
            </label>
            <label>
              Description:
          <input type='text' name='description' onChange={this.handleChange} value={this.state.description} />
            </label>
            <input type='submit' value='Save' />
          </form>
      </div>
    )
  }
}

export default connect(null, { createEvent })(CreateEventForm)