import React,{Component,useState} from 'react';

class App extends Component{

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    render(){
        return(
            <div style={{textAlign:'center'}}>
            <h2>Login</h2>
            <form  style={{
                direction:'grid',alignItems:'center',justifyItems:'center'}} onSubmit={handleSubmit}>
                <input type="text" placeholder='Username' onChange={event=> setUsername(event.target.value)} name='username'/>
                <input type="text" placeholder='Password' onChange={event=> setUsername(event.target.value)} name='password'/>
                <button type="submit"></button>
            </form>
            </div>
            )
    }
}

export default App;