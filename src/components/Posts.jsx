import React, {useContext, useEffect, useState} from 'react';
import AddPostForm from "./AddPostForm";
import Post from './Post';
import { Context, server } from '..';
import axios from 'axios'
import { Navigate } from 'react-router-dom';



const Posts = () => {
  const [posts, setPosts] = useState([])
  const {isAuthenticated,setIsAuthenticated} = useContext(Context);

  useEffect(()=>{
    axios.get(`${server}/post/all`,{
      withCredentials:true
    }).then((res)=>{
      setPosts(res.data.allPosts)
    }).catch((error)=>{
    })
  },[])
  // if(!isAuthenticated) return <Navigate to={"/signin"}/>

  return (
    <div>
        <AddPostForm/>

        <h1 className="text-3xl pt-7 max-[784px]:text-2xl font-bold text-center" style={{color: '#22b493'}}>All Posts</h1>
        {
          posts.map((item,index)=> (
            <Post 
              title={item.title}
              caption={item.caption}
              postimg={item.image.url}
              likesNumber={item.likes.length}
              id={index}
              comment={item.comments[0]}
              Posts_page = {true}
            />
          ))
        }
    </div>

  );
};

export default Posts;
