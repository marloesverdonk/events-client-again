const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case 'EVENTS_FETCHED':
      return action.events
    case 'EVENT_CREATE_SUCCESS':
      return [...state, action.event]
    case 'EVENT_DELETE':
      return state.filter(event => event.id !== Number(action.eventId))
    case 'EVENT_UPDATE':
      return [...state, action.data]
    default:
      return state
  }
}

export default reducer