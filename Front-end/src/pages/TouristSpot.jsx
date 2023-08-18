import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { api, updatePonto } from '../service/service';
const Swal = require('sweetalert2')

function TouristSpot() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [estadoSelecionado, setEstadoSelecionado] = useState('');

  const estados = [
    { nome: 'Acre', sigla: 'AC' },
    { nome: 'Alagoas', sigla: 'AL' },
    { nome: 'Amapá', sigla: 'AP' },
    { nome: 'Amazonas', sigla: 'AM' },
    { nome: 'Bahia', sigla: 'BA' },
    { nome: 'Ceará', sigla: 'CE' },
    { nome: 'Distrito Federal', sigla: 'DF' },
    { nome: 'Espírito Santo', sigla: 'ES' },
    { nome: 'Goiás', sigla: 'GO' },
    { nome: 'Maranhão', sigla: 'MA' },
    { nome: 'Mato Grosso', sigla: 'MT' },
    { nome: 'Mato Grosso do Sul', sigla: 'MS' },
    { nome: 'Minas Gerais', sigla: 'MG' },
    { nome: 'Pará', sigla: 'PA' },
    { nome: 'Paraíba', sigla: 'PB' },
    { nome: 'Paraná', sigla: 'PR' },
    { nome: 'Pernambuco', sigla: 'PE' },
    { nome: 'Piauí', sigla: 'PI' },
    { nome: 'Rio de Janeiro', sigla: 'RJ' },
    { nome: 'Rio Grande do Norte', sigla: 'RN' },
    { nome: 'Rio Grande do Sul', sigla: 'RS' },
    { nome: 'Rondônia', sigla: 'RO' },
    { nome: 'Roraima', sigla: 'RR' },
    { nome: 'Santa Catarina', sigla: 'SC' },
    { nome: 'São Paulo', sigla: 'SP' },
    { nome: 'Sergipe', sigla: 'SE' },
    { nome: 'Tocantins', sigla: 'TO' },
  ];
  const handleEstadoChange = (event) => {

    setEstadoSelecionado(event.target.value);
  };
  const [cidade, setCidade] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newToulristSpot = {
      nome: nome,
      descricao: descricao,
      endereco: endereco,
      estado: estadoSelecionado,
      cidade: cidade
    };

    api.post('adicionaPontoTuristico', newToulristSpot).then((res) => {
      // getPontos()
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Cadastrado com sucesso!!',
        showConfirmButton: false,
        timer: 1500,
      })
    })
  };

  return (
    <Box className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Cadastro de Ponto Turístico</h2>
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
          Cadastrar
        </Button>
      </form>
    </Box>
  );
}

export default TouristSpot;