import { useState } from "react";

const Comments = ({ postId, comments, onAddComments, onDeleteComments }) => {
  const today = new Date();
  const timeStringify = today.toLocaleTimeString("ko");
  const [input, setInput] = useState("");
  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const addCommentsData = {
      postId: postId,
      text: input,
      createAt: timeStringify,
    };
    onAddComments(addCommentsData);
    setInput("");
  };

  const deleteButtonHandler = (id) => {
    onDeleteComments(id);
  };

  return (
    <div className="box">
      <div className="headerWrapper">
        <span>ID : {postId}</span>
      </div>
      <div className="contentsWrapper"></div>
      <div className="contentsComments">
        {comments.map((comments, n) => {
          return (
            <div key={`comments${n}`}>
              <input value={comments.text} readOnly />
              <button
                onClick={() => {
                  deleteButtonHandler(comments.commentsId);
                }}
              >
                delete
              </button>
              <button>update</button>
              <span>{comments.createAt}</span>
            </div>
          );
        })}
      </div>
      <form className="contentsInput" onSubmit={formSubmitHandler}>
        <input type="text" value={input} onChange={inputChangeHandler} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Comments;
