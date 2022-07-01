import { Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import {
  addComment,
  createCommentsHistory,
  updateEvent,
} from "../../api/events";

const AddComment = ({ uid, userName, eventId, comments }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button>Dodaj komentarz</button>
      </form>
    </div>
  );
};

export default AddComment;
