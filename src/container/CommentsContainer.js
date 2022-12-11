import { useDispatch, useSelector } from "react-redux";
import Comments from "../components/Comments";
import {
  addComments,
  deleteComments,
  updateComments,
  isLikeComments
} from "../redux/module/comments";

const CommentsContainer = () => {
  const postId = useSelector((state) => state.comments?.post[0].postId);
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();

  return (
    <Comments
      postId={postId}
      comments={comments}
      onAddComments={(e) => {
        dispatch(addComments(e));
      }}
      onDeleteComments={(e) => {
        dispatch(deleteComments(e));
      }}
      onUpdateComments={(e) => {
        dispatch(updateComments(e));
      }}
      onIsLikeComments={(e) => {
        dispatch(isLikeComments(e));
      }}
    />
  );
};

export default CommentsContainer;
