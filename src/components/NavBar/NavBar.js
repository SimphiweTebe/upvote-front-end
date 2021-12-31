import React, {useState, useEffect} from 'react';
import './styles.scss'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleForm } from '../../actions/interface';
import decode from 'jwt-decode'

function NavBar() {

    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const logOut = ()=>{
        dispatch({type: 'LOGOUT'})
        history.push('/')
        setUser(null)
    }
    
    useEffect(()=>{
        const token = user?.token

        if(token){
            const decodedToken = decode(token)

            if(decodedToken.exp * 1000 < new Date().getTime()) logOut()
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])

    const addNewPost = () =>{
        dispatch(toggleForm())
    }

    return (
        <nav className="app__bar">
            <Link to="/" className="logo">UPvote.</Link>
            <div className="options">
               {
                   user ? (
                    <>
                    <div className="profile">
                        <span className="username">{user.result.name.charAt(0)}{user.result.name.split(" ")[1].charAt(0)}</span>
                        {/* <span className="fullname">{user.result.name}</span> */}
                    </div>
                    <span className="upload" onClick={addNewPost}>New</span>
                    <Link to="/" className="links logout" onClick={logOut}>Logout</Link>
                    </>
                   ): (
                    <Link to="/auth" className="links login">Sign in</Link>
                   )
               }
            </div>
        </nav>
    )
}

export default NavBar
