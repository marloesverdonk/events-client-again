import request from 'superagent'

export const EVENT_DELETE = 'EVENT_DELETE'

const baseUrl = 'http://localhost:4000'

const eventDeleteSuccess = eventId => ({
  type: EVENT_DELETE,
  eventId
})

export const deleteEvent = (id) => dispatch => {
  request
    .delete(`${baseUrl}/events/${id}`)
    .send(id)
    .then(response => {
      dispatch(eventDeleteSuccess(response.body.id))
    })
    .catch(console.error)
}

