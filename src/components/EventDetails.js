import React from 'react'
import { connect } from 'react-redux'
import { loadEvent } from '../actions/loadEvent'
import { deleteEvent } from '../actions/deleteEvent'
import CreateEventForm from './CreateEventForm'

class EventDetails extends React.Component {
  state = {
    editMode: false
  }

  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  onDelete = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }

  onEdit = () => {
    this.setState({
      editMode: true
    })
  }

  render() {
    //const events = this.props.events
    const event = this.props.event
    return (
      <div>

        {this.state.editMode ? <CreateEventForm/> :
          <div>
            {event ? 
              <div>
                <h1>{event.name}</h1>
                <i>{event.date}</i>
                <p>{event.description}</p>
                <button onClick={this.onDelete}>Delete</button>
              </div>
              : '..Loading'
            }
          </div>
        }
        <button onClick={this.onEdit}>Edit</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
  event: state.event
})

export default connect(mapStateToProps, { loadEvent, deleteEvent })(EventDetails)