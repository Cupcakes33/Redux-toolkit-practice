import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

const deleteFilter = (array, id) => {
  return array.filter((comment) => {
    return comment.id !== id;
  });
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComments: (state, action) => {
      state.comments.push({
        id: Date.now(),
        commentsText: action.payload,
        isLike: true,
      });
    },
    removeComments: (state, action) => {
      return {
        comments: deleteFilter(current(state.comments), action.payload),
      };
    },
    isLikeComments: (state, action) => {
      const index = state.comments.findIndex((comment) => {
        return comment.id === action.payload;
      });
      state.comments[index].isLike = !state.comments[index].isLike;
    },
  },
});
console.log(commentsSlice);
export const { addComments, removeComments, isLikeComments } =
  commentsSlice.actions;

export default commentsSlice.reducer;
