import React from "react";
import Post from "./Post";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./style";

export default function Posts({setCurrentId}) {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={2}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}
