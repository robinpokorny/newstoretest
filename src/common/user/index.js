const CHANGE_NAME = 'CHANGE_NAME'

export const changeName = (target) => ({
  type: CHANGE_NAME,
  payload: target
})

export default (state = { name: 'Robin' }, action) => {

  switch (action.type) {

    case CHANGE_NAME:
      return { ...state, name: action.payload };

    default:
      return state;

  }
}
