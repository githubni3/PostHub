import React, { useState } from 'react';
import dummy from "../assets/dummy.jpg";

const initial_state = {
  postimg: dummy,
  likesNumber : 0,
  title:'',
  caption :''
}

const AddPostForm = ({handleAddFormData}) => {
  const [post, setPost ] = useState(initial_state)

  const handleChange = (e) => {
    setPost({...post,
      [e.target.name] : e.target.value 
    });

  }
  const handleAddPost = (e) => {
    e.preventDefault();
    handleAddFormData(post);
    setPost(initial_state)
  }
  return (
    <div className="shadow-md flex flex-col gap-4 m-auto mt-3 py-5 pr-10 w-[38%] max-[1165px]:min-w-full">

      <div className="flex items-center gap-4">
        <label htmlFor="title" className="w-1/4 text-right font-semibold">
          Post Title:
        </label>
        <input
          value={post.title}
          name='title'
          type="text"
          placeholder="Enter post title"
          onChange={handleChange}
          className="w-3/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <label htmlFor="title" className="w-1/4 text-right font-semibold">
          Post Caption:
        </label>
        <input
          value={post.caption}
          name='caption'
          type="text"
          placeholder="Enter post title"
          onChange={handleChange}
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
          className='hidden'
        />

        <label
          htmlFor="postImage"
          className="px-4 py-1 text-white font-bold rounded-md cursor-pointer"
          style={{background: '#22b493'}}
          onClick={handleChange}       


        >
          Upload Post Image
        </label>
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
