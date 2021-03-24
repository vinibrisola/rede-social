import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

});

function Header() {
  return (
    <header className='header'>
      <div className='toolbar'>
        <div>
          <span> Rede social</span>
        </div>
        <div>
          <Button color='primary' variant="contained">NOVO POST</Button>
          <span>img1</span>
          <span>img2</span>
        </div>
      </div>
    </header>
  );
}

export default Header;