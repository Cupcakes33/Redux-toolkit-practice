import { current, createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [{ postId: 10000000 }],
  comments: [
    {
      postId: 0,
      commentsId: 0,
      text: "1st comment",
      isLike: false,
      createAt: "4:03:23",
    },
  ],
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComments: (state, action) => {
      const { postId, text, createAt } = action.payload;
      state.comments.push({
        postId: postId,
        commentsId: Date.now(),
        text: text,
        isLike: false,
        createAt: createAt,
      });
    },
    deleteComments: (state, action) => {
      comments: state.comments.filter(
        (comment) => comment !== action.payload
      );
    },
    isLikeComments: (state, action) => {},
    updateComments: (state, action) => {},
  },
});

export const { addComments, deleteComments, isLikeComments, updateComments } =
  commentsSlice.actions;

export default commentsSlice.reducer;
