import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Tooltip, Zoom} from '@mui/material';
import { Trash, Pencil } from 'phosphor-react';
import { usePontosContext } from '../context';

function CardPrincipalTable({ openModal, openModalEdit }) {
  const { pontos, loading, ExcluirPonto, visualizarItens } = usePontosContext();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  return (
    <div>
      <div className='flex justify-end'>
        
      </div>
      <div className='w-3/5 mx-auto mt-5'>
      <TableContainer component={Paper}>
          <Table aria-label='pontos table'>
            <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Cidade</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Excluir</TableCell>
            </TableRow>
            </TableHead>
                <TableBody>
                    {pontos.length > 0 ? (
                      pontos.slice(startIndex, endIndex).map((ponto) => (
                        <TableRow key={ponto.id}>
                          <TableCell>{ponto.nome}</TableCell>
                          <TableCell>{ponto.descricao}</TableCell>
                          <TableCell>{ponto.endereco}</TableCell>
                          <TableCell>{ponto.estado}</TableCell>
                          <TableCell>{ponto.cidade}</TableCell>
                          <TableCell>
                          <Tooltip arrow TransitionComponent={Zoom} title="Editar">
                            <Pencil
                              size={25}
                              color='black'
                              onClick={() => {
                                visualizarItens(ponto.id);
                                openModalEdit(ponto.id);
                              }}
                              className='cursor-pointer ml-3'
                            />
                             </Tooltip>
                          </TableCell>
                          <TableCell>
                            <Tooltip arrow TransitionComponent={Zoom} title="Excluir">
                            <Trash
                              size={25}
                              color='red'
                              onClick={() => ExcluirPonto(ponto.id)}
                              className='cursor-pointer ml-3'
                            />
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : loading ? (
                      <TableRow>
                        <TableCell colSpan={7}>Carregando...</TableCell>
                      </TableRow>
                    ) : (
                      <TableRow>
                        <TableCell colSpan={7}>Nenhum ponto turístico cadastrado!</TableCell>
                      </TableRow>
                    )}
    </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            labelRowsPerPage="Linhas por página:"
            labelDisplayedRows={({ from, to, count }) => `${from} Até ${to} de ${count}`}
            component='div'
            count={pontos.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(event, newPage) => setPage(newPage)}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(parseInt(event.target.value, 10));
              setPage(0);
            }}
          />
        </TableContainer>
      </div>
    </div>
  );
}

export default CardPrincipalTable;