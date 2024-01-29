import { useState } from "react"
import cartContext from "./createContext"

const ContextProvider = (props) => {
    const [items,setItems]=useState([]);
    const [totalValue,setTotalValue]=useState(0);

    const AddItem=(item)=>{
        let index=items.findIndex(itemm=>itemm.id===item.id);
        let indexItem=items[index];
        if(indexItem){
            return;
        }
        setItems((itemss)=> [...itemss,item])
    }
    const BuyItem=(BuyItem)=>{
        let index=items.findIndex(itemm=>itemm.id===BuyItem.item.id);
        let indexItem=items[index];
        
        if(BuyItem.type==='Large'){
            console.log(indexItem)
           let updatedItem={...indexItem,Large:(+indexItem.Large)-1};
           items[index]=updatedItem;
           setItems(items=>[...items]);
        }
        else if(BuyItem.type === 'Medium'){
            console.log(BuyItem)
        }else{
            console.log(BuyItem)
        }
    }
    console.log(items);
  return (
    <cartContext.Provider value={{
        items:items,
        totalValue:totalValue,
        AddItem:AddItem,
        BuyItem:BuyItem
    }}>
        {props.children}
    </cartContext.Provider>
  )
}

export default ContextProvider