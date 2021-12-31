import React from 'react';
import moment from 'moment';
import { AiOutlineHeart, AiFillDelete, AiFillHeart, AiFillEdit } from 'react-icons/ai';
import { useDispatch } from 'react-redux'
import { toggleForm } from '../../../actions/interface';
import { deletePost, likePost } from '../../../actions/posts';

function SinglePost({post, setCurrentId}) {

    const user = JSON.parse(localStorage.getItem('profile'))
    const defaultImage = 'https://i.pravatar.cc/150?img=3';
    const dispatch = useDispatch();

    const handleEdit = ()=> {
        setCurrentId(post._id)
        dispatch(toggleForm())
    }

    const Likes = () => {
        if (post.likes.length > 0) {
           return post.likes.find((like) => like === user?.result?._id)
              ? (
                 <>
                    <button disabled={!user?.result} className="likes liked-post" onClick={()=> dispatch(likePost(post._id))}><AiFillHeart /></button>
                    <p className="likes-count">{post.likes.length}</p>
                 </>
              ) : (
                <>
                    <button disabled={!user?.result} className="likes" onClick={()=> dispatch(likePost(post._id))}><AiOutlineHeart /></button>
                    <p className="likes-count">{post.likes.length}</p>
                </>
              );
        }

        return (
            <>
                <button disabled={!user?.result} className="likes" onClick={()=> dispatch(likePost(post._id))}><AiOutlineHeart /></button>
                <p className="likes-count">{post.likes.length}</p>
            </>
        )
     };
  

    return (
        <div className="post">
            {
                user?.result?._id === post?.creator && (
                    <span className="edit" onClick={handleEdit}><AiFillEdit /></span>
                )
            }
            {
                Likes()
            }
            {
                user?.result?._id === post?.creator && (
                    <span className="delete" onClick={()=> dispatch(deletePost(post._id))}><AiFillDelete /></span> 
                )
            }   
            <img className="post__image" src={post.selectedFile} alt={post.title} />
            <p className="post__title">{post.title}</p>
            <div className="post__header">
                <img src={defaultImage} alt={post.name} className="photo" />
                <h6 className="username">{post.name}</h6>
            </div>
            <p className="date">{moment(post.createdAt).fromNow()}</p>
        </div>
    )
}

export default SinglePost
