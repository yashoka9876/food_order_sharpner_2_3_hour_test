import { useContext, useState } from "react";
import cartContext from "./store/createContext";
import Modal from "./components/UI/Modal";
import Form from "./components/Form/Form";
import ListItem from "./components/ListItem/ListItem";
import Header from "./components/UI/Header";


function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <Form></Form>
      <ListItem></ListItem>
    </div>
  );
}

export default App;
