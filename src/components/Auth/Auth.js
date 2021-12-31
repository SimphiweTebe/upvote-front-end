import React, {useState} from 'react'
import {BiShow} from 'react-icons/bi'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './styles.scss'
import {signin, signup} from '../../actions/auth'

const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

function Auth() {

    const appErrors = useSelector(state => state.features.errors)
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setSignup] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const history = useHistory()
    const dispatch = useDispatch()

    const handlePassword = ()=> {
        setShowPassword(!showPassword)
    }

    const switchAuth = ()=> {
        setSignup(!isSignup)
        setShowPassword(false)
    }

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(isSignup){
            dispatch(signup(formData, history))
        }else{
            dispatch(signin(formData, history))
        }
    }

    return (
        <section className="container">
           <div className="form__wrapper">
               <form className="auth-form" onSubmit={handleSubmit}>
                   <h3>{isSignup ? 'Sign Up' : 'Sign In'}</h3>
                   {
                       appErrors && (
                        <p className="errors">{appErrors}</p>
                       )
                   }
                   <div className="inputs">
                   {
                       isSignup && (
                        <>
                        <input type="text" name="firstName" placeholder="First name" autoFocus onChange={handleChange}/>
                        <input type="text" name="lastName" placeholder="Last name" onChange={handleChange} />
                        </>
                       )
                   }
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                        <label htmlFor="password" className="password">
                            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" onChange={handleChange} />
                            <BiShow onClick={handlePassword}/>
                        </label>
                    {
                        isSignup && <input type="password" name="confirmPassword" placeholder="Repeat password" onChange={handleChange}/>
                    }
                   </div>
                   <input type="submit" value={isSignup ? 'Sign up' : 'Login'} className="auth-form__submit"/>
               </form>
               <button onClick={switchAuth} className="form-switch">{isSignup ? 'Already have an account? Login' : 'Dont have an account? Sign up'}</button>
           </div>
        </section>
    )
}

export default Auth
