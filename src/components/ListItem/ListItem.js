import React, { useContext } from 'react'
import cartContext from '../../store/createContext'
import classes from './ListItem.module.css'

const ListItem = () => {
    let cartCtx=useContext(cartContext);
    let list=cartCtx.items;

    const BuyItemm=(obj)=>{
        cartCtx.BuyItem(obj)
    }

  return (
    <div className={classes.aboveUL}>
        <ul className={classes.MainContainer}>
            {list.map((item)=><li key={item.id}>
                <div className={classes.container}>
                    <div className={classes.containerItem}>
                        <div>{item.Name}</div>
                        <div>{item.Description}</div>
                        <div>{item.Prize}</div>
                    </div>
                    <div className={classes.containerButton}>
                        <button onClick={()=>{BuyItemm({type:'Large',item:item})}}> Buy Large ({item.Large})</button>
                        <button onClick={()=>{BuyItemm({type:'Medium',item:item})}}>Buy Medium ({item.Medium})</button>
                        <button onClick={()=>{BuyItemm({type:'Small',item:item})}}>Buy Small ({item.Small})</button>
                    </div>
                </div>
            </li>)}
        </ul>
    </div>
  )
}

export default ListItem