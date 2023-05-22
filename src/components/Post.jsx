import React, { useContext, useState } from "react";
import { FaEdit, FaTrashAlt, FaHeart } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "..";

const Post = ({
  title,
  caption,
  postimg,
  likesNumber,
  id,
  post_id,
  comment,
  Posts_page,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const deletePostHandler = async () => {
    try {
      const { data } = await axios.delete(
        `${server}/post/${post_id}`
      );
      toast.success(data.message);
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div
      className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6 my-7"
      key={id}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold" style={{ color: "#22b493" }}>
          {title}
        </h2>
        <div className="flex space-x-4">
          {!Posts_page ? (
            <>
              <FaEdit className="text-gray-600 cursor-pointer edit" />
              <FaTrashAlt
                onClick={() => deletePostHandler()}
                className="text-gray-600 cursor-pointer hover:text-red-500"
              />
            </>
          ) : (
            ``
          )}
        </div>
      </div>

      <div className="mb-4 ">
        <img src={postimg} alt="postImg" className="w-full rounded-lg" />
      </div>

      <div className="mb-4">
        <p className="text-gray-500">{caption}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Comments</h3>
        <div className="rounded-lg pt-4 border-b">
          <input
            type="text"
            class=" border-gray-400 outline-none border-none"
            placeholder="Add a comment...."
          />
        </div>

        <div className="rounded-lg pt-4 flex justify-between items-center">
          {/* Render comments here */}
          <div className="mb-2">
            {comment}
            iopudsfgujdspofghfhh
          </div>

          {comment && (
            <div>
              <FaTrashAlt className="text-gray-600 cursor-pointer hover:text-red-500" />
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between space-x-2">
        <FaHeart
          className={`text-xl cursor-pointer ${
            isLiked ? "text-red-500" : "text-gray-600"
          }`}
          onClick={handleLike}
        />
        <p className="text-gray-600 font-semibold">
          Liked by {likesNumber} people
        </p>
      </div>
    </div>
  );
};

export default Post;
