import { Button } from 'reactstrap'

function BtnNovoCadastro({ openModal }) {
  return (
    <div>
      <Button onClick={openModal} color='primary'>
        NOVO CADASTRO
      </Button>
    </div>
  )
}

export default BtnNovoCadastro
