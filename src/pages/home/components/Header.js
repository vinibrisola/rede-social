import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles({
  appbar: {
    boxShadow: 'none',
  },
  img: {
    maxHeight: 55,
  },
  grow: {
    flexGrow: '1',
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',

  },
  button: {
    marginRight: 10
  },
  bell: {
    marginRight: 10
  }

});

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="inherit" className={classes.appbar}>
      <Toolbar>
        <img src="/images/logo.png" alt="logo" className={classes.img} />
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Button color='primary' variant="contained" className={classes.button}>NOVO POST</Button>
          <SvgIcon>
            <Bell></Bell>
          </SvgIcon>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.bell} />
        </div>

      </Toolbar>
    </AppBar>
  );
}

export default Header;