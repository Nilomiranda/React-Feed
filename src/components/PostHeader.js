import React from 'react';

import './styles/post-header.scss';

const PostHeader = (props) => {
  const { author, time } = props;

  return (
    <div className="header">
      <img src="https://avatars2.githubusercontent.com/u/25915040?v=4" alt="user avatar" />
      <div className="post-metadata">
        <p className="post-author">{author}</p>
        <p className="post-time">{time}</p>
      </div>
    </div>
  );
};

export default PostHeader;
