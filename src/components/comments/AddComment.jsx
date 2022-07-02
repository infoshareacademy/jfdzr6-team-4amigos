import { Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import {
  addComment,
  createCommentsHistory,
  updateEvent,
} from "../../api/events";
import { StyledAddComment, StyledBtn, StyledInputDiv } from "./Comments.styled";

const AddComment = ({ uid, userName, eventId, comments }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim() || commentText.length > 100) {
      return;
    }
    if (!comments) {
      const commentRef = await createCommentsHistory({
        body: commentText,
        idAuthor: uid,
        author: userName,
      });
      await updateEvent(eventId, { comments: commentRef });
    } else {
      addComment(comments.id, {
        commentsHistory: [
          ...comments.commentsHistory,
          {
            author: userName,
            idAuthor: uid,
            body: commentText,
            createdAt: Timestamp.fromDate(new Date()),
          },
        ],
      });
    }
    setCommentText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <StyledAddComment>
          <input
            type="text"
            name="comment"
            placeholder="Twój komentarz"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <StyledBtn>Dodaj komentarz</StyledBtn>
        </StyledAddComment>
      </form>
    </div>
  );
};

export default AddComment;
