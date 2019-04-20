import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Post from './components/Post';

import './index.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        content: 'Hello Hello',
        author: 'Danilo Silva',
        time: '3 years ago',
      },
      {
        id: 2,
        content: 'You are an awesome person',
        author: 'Robert Jesus',
        time: '500 years ago',
      },
      {
        id: 3,
        content: 'I am not sure if I have anything to say',
        author: 'Nalcides Miranda',
        time: '25 minutes ago',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="main-wrapper">
        <Header />
        <div className="feed">
          {posts.map(post => (
            <Post author={post.author} time={post.time} key={post.id}>
              {post.content}
            </Post>
          ))}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
