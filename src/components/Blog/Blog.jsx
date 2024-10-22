import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types';
import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleAddToBookmark}) => {
    const {title,cover,author_img,author,reading_time,posted_date,
        hashtags
    }=blog;
   
    
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt={`cover picture of title ${title}`}  ></img>
            <div className='flex justify-between '>

                <div className='flex'>
                      <img className='w-14' src={author_img} alt="" />
                      <div className='ml-6'>
                         <h3 className='text-2xl'>{author}</h3>
                         <p>{posted_date}</p>
                      </div>

                </div>

                <div>

                    <span>{reading_time} min read </span>
                    <button
                    onClick={handleAddToBookmark}
                     className='ml-2 text-red-600 text-2xl'   
                     > <FaBookmark></FaBookmark>
                     </button>

                </div>

            </div>
           
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=> <span key={idx}> <a href=''> #{hash} </a>   </span> )
                }
            </p>
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired
}

export default Blog;
