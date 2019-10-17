const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case 'EVENTS_FETCHED':
      return action.events
    case 'EVENT_CREATE_SUCCESS':
      console.log(action)
      return [...state, action.event]
    default:
      return state
  }
}

export default reducer