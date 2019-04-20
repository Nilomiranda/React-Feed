import React from 'react';

import PostHeader from './PostHeader';

import './styles/post.scss';

const Post = (props) => {
  const { author, time, children } = props;

  return (
    <div className="post-card">
      <PostHeader author={author} time={time} />
      <p>{children}</p>
    </div>
  );
};

export default Post;
