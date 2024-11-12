"use client";
import React, { useEffect, useState } from "react";
import Data from "@/shared/Data";

const GameList = () => {
  const [games, setGames] = useState();
  useEffect(() => {
    setGames(Data);
  }, []); 

  return (
    <div className="flex gap-5 justify-center mt-20 flex-wrap">
      {games?.map((item) => (
        <div key={item.id} className="rounded bg-gray-500 w-auto text-white text-center p-3 cursor-pointer">
          <h1>{item.imageName}</h1>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default GameList;
