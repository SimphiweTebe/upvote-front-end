import React, {useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getPosts} from '../../actions/posts'

import Posts from '../Post/Posts'
import Form from '../Form'

function Home() {

    const dispatch = useDispatch();
    const features = useSelector(state => state.features)
    const [ currentId, setCurrentId ] = useState(null)

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch])

    return (
        <>
            <section className="container">
                    <Posts setCurrentId={setCurrentId}/>
            </section>
            {
                features.showFormModal && (
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                )
            }
        </>
    )
}

export default Home
