import React, { useEffect } from "react";
import { registerCommentsListener } from "../../api/events";

const CommentsList = ({ commentsRef, setComments, comments }) => {
  const renderComments = comments.commentsHistory?.map((comment) => {
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
