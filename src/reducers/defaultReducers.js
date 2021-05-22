const defaultReducer = (state = null, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  const { type, data } = action

  const actions = {
    SET: data => data,
    DELETE: _ => null,
    default: _ => state,
  }
  return (actions[type] || actions['default'])(data)
}

export const set = data => async dispatch => {
  dispatch({
    type: 'SET',
    data: data,
  })
}

export default defaultReducer
