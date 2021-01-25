import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import memories from "./images/memories.jpg";
import { Posts, Form } from "./components";
import useStyles from "./style";
function App() {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="center">
          Welcome to Memories Application
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            className={classes.mainContainer}
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
