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
      state.comments = state.comments.filter(
        (e) => e.commentsId !== parseInt(action.payload, 10)
      );
    },
    updateComments: (state, action) => {
      state.comments = state.comments.filter((e) => e);
    },
    isLikeComments: (state, action) => {
      const data = state.comments.find(
        (e) => e.commentsId === parseInt(action.payload, 10)
      );
      data.isLike = !data.isLike;
    },
  },
});

export const { addComments, deleteComments, isLikeComments, updateComments } =
  commentsSlice.actions;

export default commentsSlice.reducer;
