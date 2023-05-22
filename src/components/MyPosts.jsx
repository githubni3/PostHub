import React, { useContext, useEffect, useState } from 'react';
import { Context, server } from '..';
import { Navigate } from 'react-router-dom';
import axios from 'axios'
import Post from './Post';
import AddPostForm from './AddPostForm';

const MyPosts = () => {
  const {isAuthenticated,setIsAuthenticated} = useContext(Context);

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    axios.get(`${server}/post/all`,{
      withCredentials:true
    }).then((res)=>{
      setPosts(res.data.allPosts)
    }).catch((error)=>{
    })
  },[])
  if(!isAuthenticated) return <Navigate to={"/signin"}/>

  return (
    <div>

        <h1 className="text-3xl pt-7 max-[784px]:text-2xl font-bold text-center" style={{color: '#22b493'}}>My Posts</h1>
        {
          posts.map((item,index)=> (
            <Post 
              title={item.title}
              caption={item.caption}
              postimg={item.image.url}
              likesNumber={item.likes.length}
              id={index}
              comment={item.comments[0]}
              Posts_page = {false}
              post_id = {item._id}
            />
          ))
        }
    </div>

  );
}

export default MyPosts
