import ActionTypes from '../ActionTypes';

const INITIAL_STATE = {
    message: '',
    showSnack: false
}

export default function MessageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case ActionTypes.SNACKBAR_OPEN_REQUEST:
            // return Object.assign({}, state, { showSnack: true, message: action.msg })
            return { ...state, showSnack: true, message: action.msg };

        case ActionTypes.SNACKBAR_CLOSE_REQUEST:
            // return Object.assign({}, state, { showSnack: false, message: '' })
            return { ...state, showSnack: false, message: '' };

        default:
            return state;
    }
} 