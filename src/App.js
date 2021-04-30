import './App.css';
import {useEffect, useState} from 'react'
import Todo from './components/Todo';
import db from './firebase';
import firebase from 'firebase';
import {Button, FormControl,  Input, InputLabel} from '@material-ui/core'
function App() {
  const [todos,settodos]=useState([]);
  const [input,setinput]=useState("");
  //fetch the data from the database as the apploads
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','asc').onSnapshot(snapshot=>
      settodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
    )
  }, [])

  //(doc=>({})) here we are returning an object
  const addtodo=(e)=>{
    e.preventDefault();
    db.collection('todos').add({
      todo:input,
      //here we will store the storege time of daata in our database
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setinput("");
  } 
  //firebase is a realtime database and we here we don't need api hitting thing here we can directly acces the data base from frontend
  return (
    <div className="App">
      <form onSubmit={addtodo}>
      <h1>TODO-APP</h1>
        <FormControl>
    <InputLabel htmlFor="my-input">Todo</InputLabel>
    <Input autoComplete="off" onChange={(e)=>setinput(e.target.value)} value={input} id="my-input" aria-describedby="my-helper-text" />
  </FormControl>
          <Button style={{margin:"10px"}} disabled={!input} color="primary" variant="contained" type="submit" >AddTodo</Button>
        {todos.map(todo=><Todo todo={todo}/>)}
      </form>
      </div>
  );
}

export default App;
