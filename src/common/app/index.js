const CHANGE_TAB = 'CHANGE_TAB'

export const changeTab = (target) => ({
  type: CHANGE_TAB,
  payload: target
})

export default (state = { activeTab: 'home' }, action) => {

  switch (action.type) {

    case CHANGE_TAB:
      return { ...state, activeTab: action.payload };

    default:
      return state;

  }
}
