import React from 'react';
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.container}>
        <h1>Amazone Clothes application</h1>
        <button>
            <span>selectedItem</span>
            <span>100</span>
        </button>
    </div>
  )
}

export default Header