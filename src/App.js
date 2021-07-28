import react from 'react';
import {ChatEngine} from 'react-chat-engine';
import "./App.css";
import ChatFeed  from './components/ChatFeed';
import Login from './components/Login';
const App =()=>{
    if(!localStorage.getItem('username')) return <Login />
return(
    <ChatEngine 
     height = "100vh"
     
     userName= {localStorage.getItem('username')}
     userSecret={localStorage.getItem('password')}
     projectID='3f0a3773-6d11-4501-bb1b-cb98f1546e63'
    
     renderChatFeed = {(chatAppProps)=><ChatFeed {...chatAppProps}/>}
    
    />
)
}
export default App;