import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Avatar, Grid, Typography } from '@material-ui/core';

import ProfileImage from './profile-image.png';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

const UserProfile = ({ userName }) => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Avatar alt={userName} src={ProfileImage} className={classes.avatar} />
      <Typography />
    </Grid>
  );
};

UserProfile.propTypes = {
  userName: PropTypes.string,
};

export default UserProfile;
