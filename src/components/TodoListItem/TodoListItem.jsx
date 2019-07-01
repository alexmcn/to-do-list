import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({}));

const TodoListItem = ({ id, isDone, title, onToggleComplete }) => {
  const classes = useStyles();

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
      <ListItemText id={labelId} primary={title} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="Comments">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoListItem;
