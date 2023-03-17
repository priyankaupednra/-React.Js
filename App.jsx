import React  from 'react' 
import { ToastContainer,toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
 const App = () => {
  let handleSubmit = ()=>{
    toast.warning("logged in successfuly")
  
}
  return(
  <div>
    <ToastContainer/> 
    <button onClick={handleSubmit}>Click For Message</button>
    </div>
)
}

export default App ;