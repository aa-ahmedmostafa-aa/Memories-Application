import React, { useState, useEffect } from "react";
import customStyle from "./styles.module.css";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

import useStyles from "./style";
export default function Form({ currentId, setCurrentId }) {
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id == currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postDate, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postDate));
    } else {
      dispatch(createPost(postDate));
    }
    clear();
  };
  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    setCurrentId(null);
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form} customFont`}
        onSubmit={handelSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Memory
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postDate.creator}
          onChange={(e) =>
            setPostData({ ...postDate, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postDate.title}
          onChange={(e) => setPostData({ ...postDate, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postDate.message}
          onChange={(e) =>
            setPostData({ ...postDate, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postDate.tags}
          onChange={(e) =>
            setPostData({ ...postDate, tags: e.target.value.split(",") })
          }
        />

        <div className={`${classes.fileInput} ${customStyle.uploadFile}`}>
          <FileBase
            id="fileInput"
            type="file"
            style={{ fontFamily: `"Poppins", sans-serif !important` }}
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postDate, selectedFile: base64 })
            }
          />
        </div>

        <Button
          className={`${classes.buttonSubmit} ${customStyle.customFont}`}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          {currentId ? "Update" : "Submit"}
        </Button>
        <Button
          className={`${classes.buttonClear} ${customStyle.customFont}`}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}
