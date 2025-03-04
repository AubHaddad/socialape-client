import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
//Mui
import { Grid, Typography } from "@material-ui/core";
//import theme from "../../util/theme";

import dayjs from "dayjs";
const styles = theme => ({
  ...theme.spread,
  commentImage: {
    maxWidth: 100,
    height: 100,
    objectFit: "cover",
    borderRadius: "50%"
  },
  commentData: {
    marginLeft: 20
  }
});

class Comments extends Component {
  render() {
    const { comments, classes } = this.props;

    return (
      <Grid container>
        {comments.map((comment, index) => {
          const { body, createdAt, userImage, userhandle } = comment;

          return (
            <Fragment key={createdAt}>
              <Grid item sm={10}>
                <Grid container>
                  <Grid item sm={2}>
                    <img
                      src={userImage}
                      alt="comment"
                      className={classes.commentImage}
                    />
                  </Grid>
                  <Grid item sm={8}>
                    <div className={classes.commentData}>
                      <Typography
                        variant="h5"
                        component={Link}
                        to={`/users/${userhandle}`}
                        color="primary"
                      >
                        {userhandle}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {dayjs(createdAt).format("h:mm a, MMM DD YYYY")}
                      </Typography>
                      <hr className={classes.invisibleSeperator} />
                      <Typography variant="body1">{body}</Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              {index !== comments.length - 1 && (
                <hr className={classes.visibleSeperator} />
              )}
            </Fragment>
          );
        })}
      </Grid>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default withStyles(styles)(Comments);
