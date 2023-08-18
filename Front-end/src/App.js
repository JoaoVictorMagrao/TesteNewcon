import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  

  

  return (
    <BrowserRouter>
    <Router />
  </BrowserRouter>
    // <div className='App'>
        
    //   <ModalCadastrarPonto data={data} modalIsOpen={modalIsOpen} closeModal={closeModal} />
    //   <ModalEditarPonto
    //     data={data}
    //     modalIsOpenEdit={modalIsOpenEdit}
    //     closeModalEdit={closeModalEdit}
    //   />
    //   <div>
    //   <DrawerLeft/>
    //     <CardPrincipalTable
    //       openModal={openModal}
    //       openModalEdit={openModalEdit}
    //       setData={() => setData()}
    //     />
    //   </div>
    
    // </div>
   
  )
}

export default App
