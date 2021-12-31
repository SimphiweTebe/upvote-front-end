import { LIKE, DELETE, FETCH_ALL, CREATE_POST, UPDATE} from '../constants/actionTypes'

function postReducer(posts = [], action){

    switch(action.type){

        case LIKE:
            return posts.map(post => post._id === action.payload._id ? action.payload : post)

        case DELETE:
            return posts.filter(post => post._id !== action.payload)

        case FETCH_ALL:
            return action.payload

        case CREATE_POST:
            return [...posts, action.payload]

        case UPDATE:
            return posts.map(post => post._id === action.payload._id ? action.payload : post)
        
        default:
            return posts
    }
}

export default postReducer