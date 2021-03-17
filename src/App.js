import Message from './Message';
import logo from './logo.png' // relative path to image 


function App(){
    return (
       <div>
           <Message />
           <img src={logo} alt={"logo"}/> 
       </div> 
    )
}

export default App;