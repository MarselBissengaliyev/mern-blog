import React from "react";

import styles from "./AddComment.module.scss";

import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import axios from "../../axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addComment, fetchComments } from "../../redux/slices/comments";
import { selectIsAuth } from "../../redux/slices/auth";

export const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const [text, setText] = React.useState("");
  const user= useSelector(state => state.auth.data);
  const { id } = useParams();
  const onSubmit = async () => {
    try {
      const fields = { text };

      await axios.post(`/posts/${id}/comments`, fields);
      setText('');
      dispatch(fetchComments(id));
    } catch (err) {
      console.warn(err);
      alert("Ошибка при создании комментария!");
    }
  };

  return (
    <>
      <div className={styles.root}>
        <Avatar
          classes={{ root: styles.avatar }}
          src={user?.avatarUrl}
        />
        <div className={styles.form}>
          <TextField
            onChange={(e) => setText(e.target.value)}
            value={text}
            label="Написать комментарий"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
            disabled={!isAuth}
          />
          <Button disabled={!isAuth} onClick={onSubmit} variant="contained">
            Отправить
          </Button>
        </div>
      </div>
    </>
  );
};
