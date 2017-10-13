const INITIAL_STATE = {
    message: '',
    showSnack: false
}

export default function MessageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case "SNACKBAR_OPEN_REQUEST":
            return Object.assign({}, state, { showSnack: true, message: action.msg })

        case "SNACKBAR_CLOSE_REQUEST":
            return Object.assign({}, state, { showSnack: false, message: '' })

        default:
            return state;
    }
} 