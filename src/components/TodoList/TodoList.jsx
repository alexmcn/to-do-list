import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const TodoList = ({ todos }) => {
  const classes = useStyles();
  if (!todos || !todos.length) return null;

  return (
    <List className={classes.root}>
      <pre>
        {todos.map(todo => {
          return JSON.stringify(todo, null, ' ');
        })}
      </pre>
    </List>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
};

export default TodoList;
