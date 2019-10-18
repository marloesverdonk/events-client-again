const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case 'EVENT_FETCHED':
     // console.log(action.event)
      return action.event
    default:
      return state
  }
}

export default reducer