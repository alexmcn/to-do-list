import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import bgImage from './bg-image.png';

const useStyles = makeStyles({
  root: {
    padding: '100px 20px 20px',
    color: 'white',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  },
});

const ListHeader = ({ title, subtitle }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h3" component="h2" color="inherit">
        {title}
      </Typography>
      <Typography gutterBottom color="inherit" component="p">
        {subtitle}
      </Typography>
    </div>
  );
};

ListHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default ListHeader;
