import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoListItem = ({ id, isDone, title, onDelete, onToggleComplete }) => {
  const labelId = `checkbox-list-label-${id}`;

  return (
    <ListItem role={undefined} dense button onClick={onToggleComplete}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={isDone}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </ListItemIcon>
      <ListItemText
        id={labelId}
        primary={`${title} ${isDone ? '[Done]' : ''}`}
      />
      <ListItemSecondaryAction onClick={onDelete}>
        <IconButton edge="end" aria-label="Comments">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

TodoListItem.propTypes = {
  id: PropTypes.string,
  isDone: PropTypes.bool,
  title: PropTypes.string,
  onDelete: PropTypes.func,
  onToggleComplete: PropTypes.func,
};

export default TodoListItem;
