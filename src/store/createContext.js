import React from "react";

const cartContext=React.createContext({
    items:[],
    totalValue:0,
    AddItem:()=>{},
    BuyItem:()=>[]
})

export default cartContext;