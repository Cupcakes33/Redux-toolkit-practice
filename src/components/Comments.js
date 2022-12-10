import { useState } from "react";

const Comments = ({
  comments,
  onAddComments,
  onRemoveComments,
  onIsLikeComments,
}) => {
  const [input, setInput] = useState("");
  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const buttonClickHandler = () => {
    onAddComments(input);
    setInput("");
  };

  const deleteHandler = (id) => {
    onRemoveComments(id);
  };
  const likeChangeHandler = (id) => {
    onIsLikeComments(id);
  };

  return (
    <>
      <h1>This is Comments</h1>
      <input onChange={inputChangeHandler} value={input} />
      <button onClick={buttonClickHandler}>Add Comments</button>
      <ul>
        {comments.map((comment, n) => {
          return (
            <li className="listStyle" key={`list${n}`}>
              {comment.isLike ? <div>❤</div> : null}
              <span>{comment.commentsText}</span>
              <button
                onClick={() => {
                  deleteHandler(comment.id);
                }}
              >
                delete
              </button>
              <button
                onClick={() => {
                  likeChangeHandler(comment.id);
                }}
              >
                isLike
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Comments;
