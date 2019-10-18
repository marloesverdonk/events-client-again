import request from 'superagent'

export const EVENT_UPDATE = 'EVENT_UPDATE'

const baseUrl = 'http://localhost:4000'

const eventUpdateSuccess = data => ({
  type: EVENT_UPDATE,
  data
})

export const updateEvent = (id, data) => dispatch => {
  request
    .patch(`${baseUrl}/events/${id}`)
    .send(data)
    .then(response => {
      dispatch(eventUpdateSuccess(response.body))
    })
    .catch(console.error)
}
