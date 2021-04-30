import { Modal, Button,IconButton, List, ListItem, ListItemAvatar, ListItemText, makeStyles } from '@material-ui/core'
import React,{useState} from 'react'
import db from '../firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Autorenew } from '@material-ui/icons';
function Todo(props) {
    const [open,setopen]=useState(false)
    const [input,setinput]=useState("");
        const modalstyle = makeStyles((theme) => ({
        paper: {
          margin:'auto',
          alignContent:'center',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));
    const useStyles = makeStyles((theme) => ({
        root: {
          margin:'auto',
          marginTop:"8px",
          width: '100%',
          maxWidth: '36ch',
          border:"5px solid black",
          borderRadius:"5px",
          backgroundColor: theme.palette.background.paper

        }
        
      }));

    const classes = useStyles();
    const classes1= modalstyle();
    return (
        <div>
         <Modal
        open={open}
        onClose={()=>setopen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >        
        <div  className={classes1.paper}>
      <h2 id="simple-modal-title">Update</h2>
      <p id="simple-modal-description">
        Change the data if you like 
      </p>
      <input placeholder={props.todo.todo} value={input} onChange={(e)=>setinput(e.target.value)}/>
      <Button style={{margin:"10px"}} color="primary" variant="contained" onClick={()=>{
          db.collection('todos').doc(props.todo.id).set({
              todo:input
          },{merge:true})
          setopen(false)
      }}>UPDATE</Button>
     
    </div>

      </Modal>
    
         <List  className={classes.root}  >
      <ListItem >
        
        <ListItemText 
          primary={props.todo.todo} 
          secondary="..ToDo"  
        />
             <IconButton edge="end" aria-label="delete">
                      <DeleteIcon onClick={()=>db.collection('todos').doc(props.todo.id).delete()} />
              </IconButton>
              <IconButton edge="end" aria-label="edit">
                      <EditIcon onClick={()=>setopen(true)} />
              </IconButton>
              
      </ListItem>        
      </List>
        </div>
    )
}

export default Todo;
