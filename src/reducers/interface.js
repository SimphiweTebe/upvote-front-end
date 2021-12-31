import { LOADING, ERROR, TOGGLE_FORM } from '../constants/actionTypes'

const initialState = {
    showFormModal: false,
    errors: null,
    loading: false
}

function uiReducer(state = initialState, action){
    switch(action.type){
        case TOGGLE_FORM:
            const modalState = state.showFormModal
            return {...state, showFormModal: !modalState}

        case ERROR:
            return {...state, errors: action.payload }

        case LOADING:
            const loadState = state.showFormModal
            return {...state, loading: !loadState}

        default:
            return state
    }
}

export default uiReducer;