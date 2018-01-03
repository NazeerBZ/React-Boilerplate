import ActionTypes from '../ActionTypes';

export default class Actions {

    static snackbarOpenRequest(msg) {
        return {
            type: ActionTypes.SNACKBAR_OPEN_REQUEST,
            msg: msg
        }
    }

    static snackbarCloseRequest() {
        return {
            type: ActionTypes.SNACKBAR_CLOSE_REQUEST,
            msg: ''
        }
    }
}







