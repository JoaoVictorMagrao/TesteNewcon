import React, { useState} from 'react';
import { Box, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import {atualizarPontoTuristico, cadastrarPontoTuristico} from '../service/service';
import { estados } from '../Util/util';
const urlParams = new URLSearchParams(window.location.search);
const idEdit = urlParams.get('id');

const buttonText = idEdit ? 'Atualizar' : 'Cadastrar';
const pageTitle = idEdit ? 'Editar Ponto Turístico' : 'Cadastro de Ponto Turístico';

const Swal = require('sweetalert2')

function TouristSpot() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidade, setCidade] = useState('');

  const handleEstadoChange = (event) => {
    setEstadoSelecionado(event.target.value);
  };

  // getPontos()
  
  async function cadastrarOuAtualizarPontoTuristico(idEdit, newTouristSpot) {
    try {
      if (idEdit) {

        const response = await atualizarPontoTuristico(idEdit, newTouristSpot);
        if(response === 200){
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Ponto Turístico atualizado com sucesso!!!',
            showConfirmButton: false,
            timer: 1500,
          })
      
          setNome('');
          setDescricao('');
          setEndereco('');
          setEstadoSelecionado('');
          setCidade('');
        }else{
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Erro ao cadastrar Ponto Turístico.',
            showConfirmButton: false,
            timer: 1500,
          })
        }

      } else {
        const response = await cadastrarPontoTuristico(newTouristSpot);
        if(response === 200){
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Cadastrado com sucesso!!',
            showConfirmButton: false,
            timer: 1500,
          })
      
          setNome('');
          setDescricao('');
          setEndereco('');
          setEstadoSelecionado('');
          setCidade('');
        }else{
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Erro ao cadastrar ponto turístico.',
            showConfirmButton: false,
            timer: 1500,
          })
        }
      }
    } catch (error) {
      // Lógica de tratamento de erro geral
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

      const newTouristSpot = {
        nome: nome,
        descricao: descricao,
        endereco: endereco,
        estado: estadoSelecionado,
        cidade: cidade
      };
  
      cadastrarOuAtualizarPontoTuristico(idEdit, newTouristSpot);
  };

  return (
    <Box className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{pageTitle}</h2>
        <TextField label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} fullWidth className="mb-4" />
        <TextField label="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} fullWidth multiline className="mb-4" />
        <TextField label="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} fullWidth className="mb-4" />
        <FormControl fullWidth margin="normal">
          <InputLabel>Estado</InputLabel>
          <Select
            value={estadoSelecionado}
            onChange={handleEstadoChange}
            label="Estado"
          >
            {estados.map((estado) => (
              <MenuItem key={estado.nome} value={estado.sigla}>
                {estado.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField label="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} fullWidth className="mb-4" />
        <Button type="submit" variant="contained" color="primary" className="w-full">
          {buttonText}
        </Button>
      </form>
    </Box>
  );
}

export default TouristSpot;