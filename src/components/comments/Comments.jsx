import React, { useEffect, useState } from "react";
import { registerCommentsListener } from "../../api/events";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

const Comments = ({ uid, userName, eventId, eventData }) => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    if (eventData.comments) {
      registerCommentsListener(eventData.comments, async (docSnapshot) => {
        setComments({ id: docSnapshot.id, ...docSnapshot.data() });
      });
    } else {
      <h1>ładowanie storny</h1>;
    }
  }, [eventData]);
  return (
    <div>
      <div>
        <h3>Komentarze</h3>
      </div>
      {comments && (
        <CommentsList
          commentsRef={eventData.comments}
          setComments={setComments}
          comments={comments}
        />
      )}
      <AddComment
        uid={uid}
        userName={userName}
        eventId={eventId}
        comments={comments}
      />
    </div>
  );
};

export default Comments;
