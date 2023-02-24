import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  comments: {
    items: [],
    status: "loading",
  },
  lastComments: {
    items: [],
    status: "loading"
  }
};

export const fetchLastComments = createAsyncThunk("comments/fetchLastComments", async () => {
  const { data } = await axios.get("/comments");
  return data;
});

export const fetchComments = createAsyncThunk("comments/fetchComments", async (id) => {
  const { data } = await axios.get(`/posts/${id}/comments`);
  return data;
});


const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
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

      // Получение послдених комментариев
  [fetchLastComments.pending]: (state) => {
    state.lastComments.items = [];
    state.lastComments.status = "loading";
  },
  [fetchLastComments.fulfilled]: (state, action) => {
    state.lastComments.items = action.payload;
    state.lastComments.status = "loaded";
  },
  [fetchLastComments.rejected]: (state) => {
    state.lastComments.items = [];
    state.lastComments.status = "error";
  },
  },
});

export const commentsReducer = commentsSlice.reducer;