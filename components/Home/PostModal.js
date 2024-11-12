import React from "react";
import PostItem from "./PostItem";

const PostModal = ({post}) => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */} 
      <dialog id="my_modal_1" className="modal p-5 w-[350px] rounded">
        <PostItem post={post}/>
      <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn rounded bg-slate-600 mt-3 text-white p-1">Close</button>
            </form>
      </dialog>
    </div>
  );
};

export default PostModal;
