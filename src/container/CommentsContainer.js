import { useDispatch, useSelector } from "react-redux";
import Comments from "../components/Comments";
import {
  addComments,
  removeComments,
  isLikeComments,
} from "../redux/module/commentsSlice";

const CommentsContainer = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);

  const onAddComments = (e) => {
    dispatch(addComments(e));
  };
  const onRemoveComments = (e) => {
    dispatch(removeComments(e));
  };
  const onIsLikeComments = (e) => {
    dispatch(isLikeComments(e));
  };

  return (
    <Comments
      comments={comments}
      onAddComments={onAddComments}
      onRemoveComments={onRemoveComments}
      onIsLikeComments={onIsLikeComments}
    />
  );
};

export default CommentsContainer;
