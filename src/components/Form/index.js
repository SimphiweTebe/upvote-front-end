import React, {useEffect} from 'react'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import {AiFillCloseCircle} from 'react-icons/ai'
import './form.scss'
import { toggleForm } from '../../actions/interface';

function Form({ currentId }) {

    const dispatch = useDispatch()
    const post = useSelector(state => currentId ? state.posts.find(p => p._id === currentId): null)
    const appErrors = useSelector(state => state.features)
    const user = JSON.parse(localStorage.getItem('profile'))

    const [postData, setPostData] = React.useState({
        title: '',
        tags: '',
        selectedFile: ''
    })
    const [errors, setErrors] = React.useState(appErrors)

    useEffect(()=>{
        if(post){
            setPostData(post)
        }
    },[post])

    const handleChange = e => {
        setPostData({...postData, [e.target.name] : e.target.value })
    }

    const handleClear = () => {
        setPostData({title: '', selectedFile: '' })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(currentId){
            dispatch(updatePost(currentId,{...postData, name: user?.result?.name}))
        }else{
            dispatch(createPost({...postData, name: user?.result?.name}))
        }
        dispatch(toggleForm())
    }

    console.log(appErrors);

    return (
        <div className="form">
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <span className="close" onClick={()=> dispatch(toggleForm())}><AiFillCloseCircle /></span>
                <h6 className="form__title">{post ? "Edit post" : "Create a new post"}</h6>
                <div className="form__inputs">
                    <input type="text" name="title" placeholder="Title" onChange={handleChange} value={postData.title}/>
                    <div className="file">
                        <FileBase
                            type="file"
                            value={postData.selectedFile}
                            multiple={false}
                            onDone={({base64})=> setPostData({...postData, selectedFile: base64})}
                        />
                    </div>
                    <div className="form__button__group">
                        <button type="submit">Submit</button>
                        <button type="reset" onClick={handleClear}>Clear</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
