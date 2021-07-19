import React,{useState} from 'react';

const App=()=>{ 
    const [count,setCount]=useState(0)

    const incrementCount=()=>{
        setCount(prevCount=> prevCount+1)
    }

        return(
            <>
                 <h2>Counter</h2>
                <button onClick={this.incrementCount}>{this.state.count} i was clicking times</button>
            

                <h2>Toggle Light</h2>
                <div style={{
                    height:'50px',width:'50px',background:'grey'
                }}></div>
            </>
        );
};

export default App;