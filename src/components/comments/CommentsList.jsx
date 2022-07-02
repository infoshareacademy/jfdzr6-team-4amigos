import React from "react";

const CommentsList = ({ comments }) => {
  const renderComments = comments.commentsHistory.map((comment) => {
    return (
      <div key={comment.createdAt}>
        <h5>{comment.author}</h5>
        <p>{comment.body}</p>
      </div>
    );
  });
  return renderComments;
};

export default CommentsList;
