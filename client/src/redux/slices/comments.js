import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  comments: {
    items: [],
    status: "loading",
  },
};

export const fetchComments = createAsyncThunk("posts/fetchComments", async (id) => {
  const { data } = await axios.get(`/posts/${id}/comments`);
  return data;
});


const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action) => {
      state.comments.items = state.comments.items.concat(action.payload);
    }
  },
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.comments.status = "loading";
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.comments.items = action.payload;
      state.comments.status = "loaded";
    },
    [fetchComments.rejected]: (state) => {
      state.comments.items = [];
      state.comments.status = "error";
    },
  },
});

export const commentsReducer = commentsSlice.reducer;

export const { setComments } = commentsSlice.actions;
