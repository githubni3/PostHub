import React, {useState} from 'react';
import dummyData from './dummyData';
import AddPostForm from "./AddPostForm";
import Post from './Post';



const Posts = () => {
  const [posts, setPosts] = useState(dummyData);
  console.log()

  const handleAddFormData = (data) => {
    setPosts([
      ...posts,
      {...data, id: posts.length+1}
    ])

  }

  return (
    <div>
        <AddPostForm handleAddFormData={handleAddFormData}/>

        <h1 className="text-3xl pt-7 max-[784px]:text-2xl font-bold text-center" style={{color: '#22b493'}}>All Posts</h1>
        {
          posts.map((item)=> (
            <Post 
              title={item.title}
              caption={item.caption}
              postimg={item.postimg}
              likesNumber={item.likesNumber}
              id={item.id}
              comment={item.comment}
            />
          ))
        }
    </div>

  );
};

export default Posts;
