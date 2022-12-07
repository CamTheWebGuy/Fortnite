import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForumPost(props) {
  const navigate = useNavigate();
  return (
    <div
      className='forum-item flex justify-between'
      onClick={() => navigate(props.link)}>
      <div className='post-title'>
        <h3 className='lucky-font text-xl'>{props.title}</h3>
        <p className='font-normal text-sm'>{props.content}</p>
      </div>
      <div className='flex'>
        <div className='post-details'>
          <p className='font-normal text-sm'>Replies: {props.replies}</p>
          <p className='font-normal text-sm'>Views: 143</p>
        </div>

        <div className='last-comment flex'>
          <img
            className='mx-5 rounded-full'
            src={props.img}
            width={50}
            height={50}
            alt={props.lastCommenter}
          />
          <div className='lc-user'>
            <h4 className='font-normal text-sm'>{props.lastCommentDate}</h4>
            <h6 className='font-light text-xs'>{props.lastCommenter}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
