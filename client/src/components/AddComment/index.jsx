import React, { useState } from "react";

import styles from "./AddComment.module.scss";

import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import axios from "../../axios";
import { useParams } from "react-router-dom";
import { fetchComments, setComments } from "../../redux/slices/comments";

export const Index = () => {
  const isAuth = useSelector(selectIsAuth);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const [disabled, setDisabled] = useState(false);
  const auhtor = useSelector(state => state.auth.data);
  

  const onSubmit = async () => {
    setDisabled(true);
    try {
      await axios.post(`/posts/${id}/comments`, { text });
      dispatch(fetchComments(id))
      setText('');
    } catch (err) {
      console.warn(err);
      alert("Ошибка при создании комментария!");
    }
    setDisabled(false);
  };

  return (
    <>
      <div className={styles.root}>
        <Avatar
          classes={{ root: styles.avatar }}
          src={auhtor?.avatarUrl}
        />
        <div className={styles.form}>
          <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="Написать комментарий"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
            disabled={!isAuth || disabled}
          />
          <Button onClick={onSubmit} disabled={!isAuth || disabled} variant="contained">
            Отправить
          </Button>
        </div>
      </div>
    </>
  );
};
