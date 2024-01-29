import React, { useContext, useRef } from 'react';
import classes from './Form.module.css'
import cartContext from '../../store/createContext';
let i=0;

const Form = () => {
    const CartCtx = useContext(cartContext);

    const name=useRef();
    const description=useRef();
    const prize=useRef();
    const large=useRef();
    const medium=useRef();
    const small=useRef();
    
    const CollectData=(event)=>{
        event.preventDefault();
        let Name=name.current.value;
        let Description=description.current.value;
        let Prize=prize.current.value;
        let Large=large.current.value;
        let Medium=medium.current.value;
        let Small=small.current.value;
        let obj={
            id:i++,
            Name,
            Description,
            Prize,
            Large,
            Medium,
            Small
        }
        CartCtx.AddItem(obj)
    }




  return (
    <div className={classes.formContainer}>
        <form className={classes.Formm} onSubmit={CollectData}>
           <div className={classes.Name}>
            <label>Name</label>
            <input ref={name} type='text'/>
           </div>

           <div className={classes.Description}>
            <label>Description</label>
            <input ref={description} type='text'/>
           </div>

           <div className={classes.Prize}>
            <label>Price</label>
            <input ref={prize} type='number'/>
           </div>

           <div className={classes.Large}>
            <label>L</label>
            <input ref={large} type='number'/>
           </div>

           <div className={classes.Medium}>
            <label>M</label>
            <input ref={medium} type='number'/>
           </div>

           <div className={classes.Small}>
            <label>S</label>
            <input ref={small} type='number'/>
           </div>
           <div>
            <button>ADD</button>
           </div>

        </form>
    </div>
  )
}

export default Form