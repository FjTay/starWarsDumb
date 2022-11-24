import React from "react";
import "./UserComment.css";

function UserComment({ commentData }) {
  return (
    <div className="comment">
      {commentData ? (
        <>
          <div className="comment-header"><p>{commentData.name} wrote :</p></div>
          <div className="comment-body"><p><i>{commentData.data}</i></p></div>
          <div className="comment-footer"><p>{commentData.date}</p></div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default UserComment;
