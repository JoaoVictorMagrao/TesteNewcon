import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <> 
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <ToastContainer 
        autoClose={3000}
        position="bottom-right"
        theme="colored"/> 
      </>
   
  )
}

export default App
