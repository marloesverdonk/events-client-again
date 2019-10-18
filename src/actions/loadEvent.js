import request from 'superagent'

export const EVENT_FETCHED = 'EVENT_FETCHED'

const baseUrl = 'http://localhost:4000'

const eventLoadSuccess = event => ({
  type: EVENT_FETCHED,
  event
})

export const loadEvent = (id) => dispatch => {
  request
    .get(`${baseUrl}/events/${id}`)
    .send(id)
    .then(response => {
      dispatch(eventLoadSuccess(response.body))
    })
    .catch(console.error)
}

