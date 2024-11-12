"use client";

import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import GameList from "@/components/Home/GameList";
import Hero from "@/components/Home/Hero";
import Posts from "@/components/Home/Posts";
import Search from "@/components/Home/Search";
import { app } from "@/shared/FirebaseConfig";

export default function Home() {
  const [posts, setPosts] = useState([]);

  // Firestore initialization
  const db = getFirestore(app);

  // Function to fetch posts from Firestore
  const getPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsList); // Set the posts data to the state
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Fetch posts when the component mounts
  useEffect(() => {
    getPosts();
  }, []); // Empty dependency array ensures this runs once after component mount


  return (
    <div className="px-4 sm:px-7 md:px-10 mt-8">
      <Hero />
      <Search />
      <GameList /> 
      <Posts posts={posts? posts: null} />  
    </div>
  );
}