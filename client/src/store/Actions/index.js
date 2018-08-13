import ActionTypes from '../ActionTypes';

// Action Creators //

function updateFlag(flag){
  return {
      type: ActionTypes.NOT_FOUND_FLAG,
      flag: flag
  }
}

const Actions = {
  updateFlag,
}
export default Actions;