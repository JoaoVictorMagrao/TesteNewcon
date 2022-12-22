import './App.css'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'

import CardPrincipalTable from './Components/CardPrincipalTable'
import Titulo from './Components/Titulo'
import { ModalCadastrarPonto, ModalEditarPonto } from './Components/Modal'
import { usePontosContext } from './context'

Modal.setAppElement('#root')
function App() {
  const [refresh, setRefresh] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalIsOpenEdit, setIsOpenEdit] = useState(false)
  const [data, setData] = useState('')
  const { setVisualizar, pontos } = usePontosContext()

  useEffect(() => {
    setRefresh(!refresh)
  }, [pontos])

  function openModal() {
    setVisualizar('')
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModalEdit() {
    setIsOpenEdit(true)
  }

  function closeModalEdit() {
    setIsOpenEdit(false)
  }

  return (
    <div className='App'>
      <Titulo />
      <ModalCadastrarPonto data={data} modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <ModalEditarPonto
        data={data}
        modalIsOpenEdit={modalIsOpenEdit}
        closeModalEdit={closeModalEdit}
      />
      <div>
        <CardPrincipalTable
          openModal={openModal}
          openModalEdit={openModalEdit}
          setData={() => setData()}
        />
      </div>
    </div>
  )
}

export default App
