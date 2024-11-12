import React, { useState } from "react";
import PostModal from "./PostModal";
import PostItem from "./PostItem";

const Posts = ({ posts }) => {
  const [post, setPost] = useState();
  return (
    <>
       <PostModal post={post} />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-12">
      {posts.map((item) => ( 
        <div key={item.id} onClick={() => {document.getElementById("my_modal_1").showModal(); setPost(item)}}>
          <PostItem post={item}  key={item.id} del={false}/>
        </div>  
      ))}
    </div>
    </>
  );
};

export default Posts;
