import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForumItem(props) {
  const navigate = useNavigate();
  return (
    <div className='forum-item' onClick={() => navigate(props.link)}>
      <h3 className='lucky-font text-xl'>{props.title}</h3>
      <p className='font-normal text-sm'>{props.content}</p>
    </div>
  );
}
