import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../components/Post";
import { TagsBlock } from "../components/TagsBlock";
import { CommentsBlock } from "../components/CommentsBlock";
import { fetchPosts, fetchTags } from "../redux/slices/posts";
import { useParams } from "react-router-dom";
import { fetchLastComments } from "../redux/slices/comments";

const PostsByTag = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);
  const { posts, tags } = useSelector((state) => state.posts);
  const [sortBy, setSortBy] = React.useState(
    localStorage.getItem("sortPostsBy")
      ? localStorage.getItem("sortPostsBy")
      : "createdAt"
  );

  const comments = useSelector(state => state.comments.lastComments);


  const isPostsLoading = posts.status === "loading";
  const isTagsLoading = tags.status === "loading";
  const isCommentsLoading = comments.status === "loading";

  React.useEffect(() => {
    dispatch(fetchTags());
    dispatch(fetchLastComments());
  }, []);

  const handleTabClick = (e) => {
    console.log(e.target.dataset.value);
    setSortBy(e.target.dataset.value);
  };

  React.useEffect(() => {
    localStorage.setItem("sortPostsBy", sortBy);
    localStorage.setItem('tag', slug);
    dispatch(fetchPosts({sortBy, tag: slug}));
  }, [sortBy, slug]);
  return (
    <>
      <Tabs
        style={{ marginBottom: 15 }}
        value={sortBy}
        aria-label="basic tabs example"
      >
        <Tab
          value={"createdAt"}
          data-value={"createdAt"}
          onClick={handleTabClick}
          label="Новые"
        />
        <Tab
          value={"viewsCount"}
          data-value={"viewsCount"}
          onClick={handleTabClick}
          label="Популярные"
        />
      </Tabs>
      <h1>Тэг - {slug}</h1>
      <Grid container spacing={4}>
        <Grid lg={8} xs={12} item>
          {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
            isPostsLoading ? (
              <Post isLoading={true} key={index} />
            ) : (
              <Post
                id={obj._id}
                title={obj.title}
                imageUrl={
                  obj.imageUrl
                    ? process.env.REACT_APP_API_URL + `${obj.imageUrl}`
                    : ""
                }
                user={obj.user}
                createdAt={obj.createdAt}
                viewsCount={obj.viewsCount}
                commentsCount={obj.commentsCount}
                tags={obj.tags}
                isEditable={userData?._id === obj.user._id}
              />
            )
          )}
        </Grid>
        <Grid lg={4} xs={12} item>
          <TagsBlock items={tags.items} isLoading={isTagsLoading} />
          <CommentsBlock
            items={comments.items}
            isLoading={isCommentsLoading}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PostsByTag;
