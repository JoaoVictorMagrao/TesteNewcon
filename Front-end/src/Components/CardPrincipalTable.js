import styles from './CardPrincipalInput.module.css'
import { Table } from 'reactstrap'
import BtnNovoCadastro from './BtnNovoCadastro'
import { Trash, Pencil, Eye } from 'phosphor-react'
import { usePontosContext } from '../context'

function CardPrincipalTable({ openModal, openModalEdit }) {
  const { pontos, loading, ExcluirPonto, visualizarItens } = usePontosContext()

  return (
    <div>
      <div className={styles.divPrincipal}>
        <div className='flex justify-end'>
          <BtnNovoCadastro openModal={openModal} />
        </div>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {pontos.length > 0 ? (
              pontos.map((ponto) => (
                <tr key={ponto.id}>
                  <td>{ponto.nome}</td>
                  <td>{ponto.descricao}</td>
                  <td className='flex'>
                    <Eye
                      size={25}
                      color='black'
                      onClick={() => {
                        visualizarItens(ponto.id)
                        openModal()
                      }}
                      className='cursor-pointer '
                    />

                    <Pencil
                      size={25}
                      color='black'
                      onClick={() => {
                        visualizarItens(ponto.id)
                        openModalEdit(ponto.id)
                      }}
                      className='cursor-pointer ml-3'
                    />

                    <Trash
                      size={25}
                      color='red'
                      onClick={() => ExcluirPonto(ponto.id)}
                      className='cursor-pointer ml-3'
                    />
                  </td>
                </tr>
              ))
            ) : loading ? (
              <p>Carregando...</p>
            ) : (
              <p>Nenhum ponto turístico cadastrado!</p>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default CardPrincipalTable
