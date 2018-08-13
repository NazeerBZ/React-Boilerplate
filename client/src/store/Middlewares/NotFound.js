import Actions from '../Actions';

function updateFlag_middleware(flag) {
  return (dispatch) => {
    dispatch(Actions.updateFlag(flag))
  }
}

// more middewares...

export {
  updateFlag_middleware,
}