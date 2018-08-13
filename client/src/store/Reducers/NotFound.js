import ActionTypes from '../ActionTypes';

const INITIAL_STATE = {
  flag: false,
}

function NotFound(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.NOT_FOUND_FLAG:
      return { ...state, flag: action.flag };
    default:
      return state;
  }
}
export default NotFound;

// example
// return {
//   ...state,
//   first : {
//       ...state.first,
//       second : {
//           ...state.first.second,
//           [action.someId] : {
//               ...state.first.second[action.someId],
//               fourth : action.someValue
//           }
//       }
//   }
// }