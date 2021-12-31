import * as api from '../api';
import { AUTH, ERROR } from '../constants/actionTypes'

export const signin = (formData, history)=> async (dispatch)=> {
    try {
        const { data } = await api.signIn(formData)
        dispatch({ type: AUTH, data })
        history.push('/')
    } catch (error) {
        dispatch({ type: ERROR, payload:  error.response.data.message})
    }
}

export const signup = (formData, history)=> async (dispatch)=> {
    try {
        const { data } = await api.signUp(formData)
        dispatch({ type: AUTH, data })
        history.push('/')
    } catch (error) {
        dispatch({ type: ERROR, payload:  error.response.data.message})
    }
}