import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { Button, Input, Label, FormGroup } from 'reactstrap'
import { X } from 'phosphor-react'
/* Importando a baseURL: 'https://localhost:7028/' para só passar o endpoint */
import { api, updatePonto } from '../service/service'
/* Importando o context para usar todas as funções no componente Modal */
import { usePontosContext } from '../context'
const Swal = require('sweetalert2')

/*------------------- Modal para cadastrar e visualizar os pontos turísticos -------------------*/

export function ModalCadastrarPonto({ modalIsOpen, closeModal }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const { getPontos, visualizar } = usePontosContext()

  /*------------------- Função executado no clique do botão salvar, aonde pega os dados dos input para enviar para o banco -------------------*/
  function submit() {
    const data = {
      nome: name,
      descricao: description,
      endereco: address,
      estado: state,
      cidade: city,
    }

    api.post('adicionaPontoTuristico', data).then((res) => {
      getPontos()
      closeModal()
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Cadastrado com sucesso!!',
        showConfirmButton: false,
        timer: 1500,
      })
    })
  }
  /*------------------- FIM submit -------------------*/

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <form>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-end'>
            <X size={25} color='red' className='cursor-pointer' onClick={closeModal} />
          </div>

          <FormGroup>
            <Label>Nome</Label>
            <Input
              required
              disabled={visualizar ? true : false}
              value={visualizar ? visualizar.nome : name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label>Descrição</Label>
            <Input
              type='textarea'
              disabled={visualizar ? true : false}
              value={visualizar ? visualizar.descricao : description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Endereço</Label>
            <Input
              disabled={visualizar ? true : false}
              value={visualizar ? visualizar.endereco : address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Estado</Label>
            <Input
              disabled={visualizar ? true : false}
              value={visualizar ? visualizar.estado : state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Cidade</Label>
            <Input
              disabled={visualizar ? true : false}
              value={visualizar ? visualizar.cidade : city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </FormGroup>
        </div>
        <div className='flex pt-2 justify-end'>
          <Button disabled={visualizar ? true : false} onClick={submit} color='primary'>
            Salvar
          </Button>
        </div>
      </form>
    </Modal>
  )
}

/*------------------- Modal para atualizar os pontos turísticos -------------------*/
export function ModalEditarPonto({ modalIsOpenEdit, closeModalEdit, customStyles }) {
  const { getPontos, visualizar } = usePontosContext()

  const [nameEdit, setNameEdit] = useState('')
  const [descriptionEdit, setDescriptionEdit] = useState('')
  const [addressEdit, setAddressEdit] = useState('')
  const [stateEdit, setStateEdit] = useState('')
  const [cityEdit, setCityEdit] = useState('')

  useEffect(() => {
    if (visualizar) {
      setNameEdit(visualizar.nome)
      setDescriptionEdit(visualizar.descricao)
      setAddressEdit(visualizar.endereco)
      setStateEdit(visualizar.estado)
      setCityEdit(visualizar.cidade)
    }
  }, [visualizar])

  async function submitEdit() {
    const data = {
      nome: nameEdit,
      descricao: descriptionEdit,
      endereco: addressEdit,
      estado: stateEdit,
      cidade: cityEdit,
    }
    await updatePonto(visualizar.id, data)
    getPontos()
  }

  return (
    <Modal isOpen={modalIsOpenEdit} onRequestClose={closeModalEdit} style={customStyles}>
      <div className='flex justify-end'></div>
      <form onSubmit={submitEdit}>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-end'>
            <X size={25} color='red' className='cursor-pointer' onClick={closeModalEdit} />
          </div>

          <FormGroup>
            <Label>Nome</Label>
            <Input required value={nameEdit} onChange={(e) => setNameEdit(e.target.value)} />
          </FormGroup>

          <FormGroup>
            <Label>Descrição</Label>
            <Input
              type='textarea'
              value={descriptionEdit}
              onChange={(e) => setDescriptionEdit(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Endereço</Label>
            <Input value={addressEdit} onChange={(e) => setAddressEdit(e.target.value)} required />
          </FormGroup>

          <FormGroup>
            <Label>Estado</Label>
            <Input value={stateEdit} onChange={(e) => setStateEdit(e.target.value)} required />
          </FormGroup>

          <FormGroup>
            <Label>Cidade</Label>
            <Input value={cityEdit} onChange={(e) => setCityEdit(e.target.value)} required />
          </FormGroup>
        </div>
        <div className='flex pt-2 justify-end'>
          <Button onClick={submitEdit} color='primary'>
            Atualizar
          </Button>
        </div>
      </form>
    </Modal>
  )
}
