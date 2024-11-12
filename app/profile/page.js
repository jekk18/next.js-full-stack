"use client"
import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { app } from "@/shared/FirebaseConfig";
import PostItem from "@/components/Home/PostItem";

function Profile() {
  const [posts, setPosts] = useState([]);
  const db = getFirestore(app);

  // Fetch posts from Firestore
  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const postsData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setPosts(postsData);
  };

  // Delete post function
  const handleDelete = async (postId) => {
    try {
      await deleteDoc(doc(db, "posts", postId));
      console.log("Post deleted:", postId);
      setPosts(posts.filter(post => post.id !== postId)); // Update local state
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
       <h2 className="text-[30px] font-bold text-blue-600">Profile</h2>
        <p>
            Manage Or Delete Post
        </p> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-12">
        {posts.map(post => ( 
           <PostItem post={post}  key={post.id} del={true} handleDel={handleDelete}/> 
        ))}
      </div>
    </div>
  );
}

export default Profile;