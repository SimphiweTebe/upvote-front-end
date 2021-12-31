import React from 'react'
import SinglePost from './Post/SinglePost'
import './posts.scss';
import { useSelector } from 'react-redux'

function Posts({setCurrentId}) {
    
    const posts = useSelector(state => state.posts)

    return (
        <div className="post__wrapper">
            {
                !posts.length ? <h2>loading..</h2> 
                : posts.map(post => <SinglePost key={post._id} post={post} setCurrentId={setCurrentId} />)   
            }
        </div>
    )
}

export default Posts
