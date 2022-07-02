import React from "react";
import { StyledComment } from "./Comments.styled";

const CommentsList = ({ comments }) => {
  const renderComments = comments.commentsHistory.map((comment) => {
    return (
      <StyledComment key={comment.createdAt}>
        <div>
          <h5>{comment.author}</h5>
          <p>{comment.body}</p>
        </div>
      </StyledComment>
    );
  });
  return renderComments;
};

export default CommentsList;
