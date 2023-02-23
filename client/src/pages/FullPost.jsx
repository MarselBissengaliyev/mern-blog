import React from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";

import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../redux/slices/comments";

export const FullPost = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchComments(id));
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении статьи");
      });
  }, []); 

  React.useEffect(() => {
    axios
    .get(`/posts/${id}`)
    .then((res) => {
      const { viewsCount } = data;
      setData({...res.data, viewsCount});
      setIsLoading(false);
    })
    .catch((err) => {
      console.warn(err);
      alert("Ошибка при получении статьи");
    });
  }, [comments.items.length])


  if (isLoading) {
    return <Post isLoading={isLoading} />;
  }

  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={
          data.imageUrl
            ? process.env.REACT_APP_API_URL + `${data.imageUrl}`
            : ""
        }
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={data.commentsCount}
        tags={data.tags}
        isFullPost
      >
        <ReactMarkdown children={data.text} />
      </Post>
      <CommentsBlock
        items={Boolean(comments.items) ? comments.items : []}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};
