import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import TodoListItem from 'components/TodoListItem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const TodoList = ({ todos }) => {
  const classes = useStyles();
  if (!todos || !todos.length) return null;

  console.log(todos);

  return (
    <List className={classes.root}>
      {todos.map(todo => (
        <TodoListItem key={todo.id} id={todo.id} />
      ))}
    </List>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
};

export default TodoList;
