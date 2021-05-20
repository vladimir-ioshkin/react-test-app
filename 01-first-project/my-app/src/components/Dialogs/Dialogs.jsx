import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import Dialog from './DialogItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = () => {

    let dialogsData = [
        {id: 1, name:'Dimych'}, 
        {id: 2, name:'Bobby'}, 
        {id: 3, name:'Pyrozhop'},
        {id: 4, name:'Andrey'},
        {id: 5, name:'Nergal'}, 
        {id: 6, name:'RZA'},
        {id: 7, name:'Barney'}
    ]

    let messagesData = [
        {id: 1, message:'Hi'}, 
        {id: 2, message:'He-he-he'}, 
        {id: 3, message:'Bla-bla-bla'},
        {id: 4, message:'lol'},
        {id: 5, message:'How u doin?'}, 
        {id: 6, message:'Yo'},
        {id: 7, message:'it will be legen-wait-for-it-dary'}
    ]

    let dialogsElements = dialogsData
        .map ( dialog => <Dialog name={dialog.name} id={dialog.id} /> );

    let messagesElements = messagesData.
        map ( message => <Message message={message.message} /> );

    return (
        <div className={classes.dialogs}>
           <div className={classes.dialogsItems}>
              { dialogsElements }
           </div>
           <div className={classes.messages}>
                { messagesElements }
           </div>
        </div>
    )
}

export default Dialogs;