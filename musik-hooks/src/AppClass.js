import React,{Component} from "react";
class App extends Component{
  state={
    count:0,
    //ison:prevState.count+1
  }

  increamentCount = () => {
    this.setState(prevState => ({
      count:prevState.count+1
    }));
  };

  toggleLight=()=>{
    this.setState(prevState=>({
      ison:!prevState.ison
    }))
  }
  render(){
    return(
      <>
        <h2>Counter</h2>

       
        <h2>Toggle Light</h2>

        <div style={{
           heigh:'50px',
           width:'50px',
           background: this.state.ison ? "yello":"grey"
          }}
           onClick={this.toggleLight}

        />
    </>
    )
  
  }
}

export default App;
