import React, { Fragment } from "react";
import Proptypes from "prop-types";
import WithStyles from "@material-ui/core/styles/withStyles";
import dayjs from "dayjs";

import MuiLink from "@material-ui/core/Link";
import { Paper, Typography } from "@material-ui/core";

import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";

import { Link } from "react-router-dom";

const styles = theme => ({
  ...theme.spread
});

const StaticProfile = props => {
  const {
    classes,
    profile: { handle, createdAt, imageUrl, bio, website, location }
  } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="image-wrapper">
          <img className="profile-image" src={imageUrl} alt="profile" />
        </div>
        <hr />
        <div className="profile-details">
          <MuiLink
            component={Link}
            to={`/users/${handle}`}
            color="primary"
            variant="h5"
          >
            @{handle}
          </MuiLink>
          <hr />
          {bio && <Typography variant="body2">{bio}</Typography>}
          <hr />
          {location && (
            <Fragment>
              <LocationOn color="primary" /> <span>{location}</span>
              <hr />
            </Fragment>
          )}
          {website && (
            <Fragment>
              <LinkIcon color="primary" />
              <a href={website} target="_blank" rel="noopener noreferrer">
                {" "}
                {website}
              </a>
              <hr />
            </Fragment>
          )}
          <CalendarToday color="primary" />{" "}
          <span>Joined {dayjs(createdAt).format("MMM YYYY")} </span>
        </div>
      </div>
    </Paper>
  );
};
StaticProfile.propTypes = {
  profile: Proptypes.object.isRequired,
  classes: Proptypes.object.isRequired
};

export default WithStyles(styles)(StaticProfile);
