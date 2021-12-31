import React from 'react'
import SinglePost from './Post/SinglePost'
import './posts.scss';
import Loading from '../Loading'
import { useSelector } from 'react-redux'

function Posts({setCurrentId}) {
    
    const posts = useSelector(state => state.posts)

    return (
        <>
        {
            !posts.length ? <Loading />
            : (
                <div className="post__wrapper">
                    {posts.map(post => <SinglePost key={post._id} post={post} setCurrentId={setCurrentId} />)}
                </div>
            )   
        }
        </>
    )
}

export default Posts
