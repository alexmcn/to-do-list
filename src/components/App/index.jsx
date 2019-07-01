import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

import ListHeader from 'components/ListHeader';
import TodoLists from 'components/TodoLists';
import UserProfile from 'components/UserProfile';

const App = () => {
  const drawerWidth = 280;

  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <nav className={classes.drawer}>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <UserProfile userName="Guglielmo Marconi" />
          <TodoLists />
        </Drawer>
      </nav>
      <main className={classes.content}>
        <ListHeader title="Team To-Do List" subtitle="Monday 1 July" />
      </main>
    </div>
  );
};

export default App;
