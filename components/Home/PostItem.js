import React from 'react'

const PostItem = ({post, del, handleDel}) => {
  return (
    <div 
          className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4 cursor-pointer"
        >
          <div className="min-h-[256px]">
            {/* <img
              src="https://readymadeui.com/Imagination.webp"
              className="w-full"
            /> */}
            {post?.image}
          </div>

          <div className="p-6">
            <h3 className="text-gray-800 text-xl font-bold">{post?.title}</h3>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
             {post?.description}
            </p>
            
            <button 
              type="button"
              className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
            >
              {post?.link}
            </button>
            {del && <button 
            onClick={() => handleDel(post.id)}
              type="button"
              className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none ml-4 bg-red-600 hover:bg-red-700 active:bg-red-600"
            >
              Delete
            </button>}
          </div>
        </div>
  )
}

export default PostItem