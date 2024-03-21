import React, { useState } from 'react';
import Vedios from './Video/Chand.mp4';

const VideoPlayer = () => {
  const [comments, setComments] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);

  const handleCommentSubmit = (commentText) => {
    const newComment = { text: commentText, timestamp: currentTime };
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <video
        controls
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
      >
        <source src={Vedios} type="Video/mp4" />
      </video>
      <h2>Comments</h2>
      <CommentForm onCommentSubmit={handleCommentSubmit} />
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.text}</p>
          <p>Timestamp: {comment.timestamp}</p>
        </div>
      ))}
    </div>
  );
};

const CommentForm = ({ onCommentSubmit }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(commentText);
    setCommentText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Enter your comment..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default VideoPlayer;
