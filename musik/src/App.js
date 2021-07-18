//import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
class App extends Component{
  state={artistQuery:''};
  updateQuery=event=>{
    console.log('event.target.value',event.target.value);
    this.setState({artistQuery:event.target.value})
  }

  handleKeyPress=(event)=>{
    if(event.key === 'Enter'){
      this.searchArtist();
    }
     // console.log('this.state',this.state);
   }
  searchArtist=()=>{
    console.log('this.state',this.state);
  } 

  render(){
    return(
      <div class="search">
        <h2>Hello,Welcome!</h2>
        <input onChange={this.updateQuery} placeholder="Search for an artist? " onKeyPress={this.handleKeyPress}/>
        <button onClick={this.searchArtist}>Search</button>
      </div>
    )
  }
}

export default App;
