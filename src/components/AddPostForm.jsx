import React, { useContext, useState } from 'react';
import dummy from "../assets/dummy.jpg";
import {toast} from 'react-hot-toast'
import axios from 'axios'
import { Context, server } from '..';


const AddPostForm = () => {
  const {isAuthenticated,setIsAuthenticated} = useContext(Context);

  const [title, setTitle] = useState('');
  const [caption,setCaption] = useState('');
  const [postImg, setPostImg] = useState(null);

  const handleAddPost = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('caption', caption);
    formData.append('post_img', postImg);
    try {
        const {data} = await axios.post(`${server}/post/new`,formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            },
            withCredentials:true
        })

        setIsAuthenticated(true);
        toast.success("Posted Uploaded");
        setTitle('');
        setCaption('');setPostImg(null);
  } catch (error) {
      setIsAuthenticated(false);
      console.log("failed to post")
  }

  }
  return (
    <div className="shadow-md flex flex-col gap-4 m-auto mt-3 py-5 pr-10 w-[38%] max-[1165px]:min-w-full">

      <div className="flex items-center gap-4">
        <label htmlFor="title" className="w-1/4 text-right font-semibold">
          Post Title:
        </label>
        <input
          value={title}
          name='title'
          type="text"
          placeholder="Enter post title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-3/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <label htmlFor="title" className="w-1/4 text-right font-semibold">
          Post Caption:
        </label>
        <input
          value={caption}
          name='caption'
          type="text"
          placeholder="Enter post title"
          onChange={(e) => setCaption(e.target.value)}
          className="w-3/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>


      <div className="flex items-center gap-4">
        <label htmlFor="postImage" className="w-1/4 text-right font-semibold">
          Post Image:
        </label>
        <input
          type="file"
          accept="image/*"
          name='postimg'
          onChange={(e) => setPostImg(e.target.files[0])}
          // className='hidden'
          className="px-4 py-1 text-white font-bold rounded-md cursor-pointer"
          style={{background: '#22b493'}}
        />
        <button
          type="submit"
          className="px-4 py-1 text-white font-bold rounded-md "
          style={{background: '#22b493'}}
          onClick={handleAddPost}
        >
          Add Post
        </button>
      </div>
    </div>
  );
};

export default AddPostForm;
