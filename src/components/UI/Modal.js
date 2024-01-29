import React from 'react'
import classes from './Modal.module.css'

const Backdrop = () => {
    return (
      <div className={classes.Backdrop}></div>
    )
  }

  const ModalOverlay = (props) => {
    return (
      <div className={classes.Overlay}>
        <div className={classes.content}>
            {props.children}
        </div>
      </div>
    )
  }
  


const Modal = (props) => {
  return (
    <>
    <Backdrop />
    <ModalOverlay>{props.children}</ModalOverlay>
    </>
  )
}

export default Modal