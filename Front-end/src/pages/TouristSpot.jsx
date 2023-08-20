import React, { useState, useEffect} from 'react';
import { Box, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import {updateTouristSpot, addTouristSpot, uniqueTouristSpotList} from '../service/service';
import { estados } from '../Util/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const urlParams = new URLSearchParams(window.location.search);
const idEdit = urlParams.get('id');

const buttonText = idEdit ? 'Atualizar' : 'Cadastrar';
const pageTitle = idEdit ? 'Editar Ponto Turístico' : 'Cadastro de Ponto Turístico';

function TouristSpot() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidade, setCidade] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleEstadoChange = (event) => {
    setEstadoSelecionado(event.target.value);
  };


  useEffect(() => {
    if (idEdit) {
      uniqueTouristSpotList(idEdit)
        .then((value) => {
          if(value.status){
            setNome(value.data.nome);
            setDescricao(value.data.descricao);
            setEndereco(value.data.endereco);
            setEstadoSelecionado(value.data.estado);
            setCidade(value.data.cidade);
          }else{
            toast.error('Erro ao buscar os dados do Ponto Turístico.');
          }
          
        })
        .catch((error) => {
          toast.error('Algo de errado aconteceu, tente novamente mais tarde.');
        });
    }
  }, [idEdit]); 
  
  async function cadastrarOuAtualizarPontoTuristico(idEdit, newTouristSpot) {
    try {
      setIsButtonDisabled(true);
      if (idEdit) {
        const response = await updateTouristSpot(idEdit, newTouristSpot);
        if(response === 200){
          toast.success('Ponto Turístico atualizado com sucesso!');
        }else{
          toast.error('Erro ao atualizar Ponto Turístico.');
        }

      } else {
        const response = await addTouristSpot(newTouristSpot);
        if(response === 200){
          toast.success('Ponto Turístico cadastrado com sucesso!');
          setNome('');
          setDescricao('');
          setEndereco('');
          setEstadoSelecionado('');
          setCidade('');
        }else{
          toast.error('Erro ao cadastrar Ponto Turístico.');
        }
      }
    } catch (error) {
      toast.error('Algo de errado aconteceu, tente novamente mais tarde.');
    }finally {
      setIsButtonDisabled(false);
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
    <div> 
     
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
        <Button disabled={isButtonDisabled} type="submit" variant="contained" color="primary" className="w-full">
          {isButtonDisabled ? 'Processando...' : buttonText} 
        </Button>
      </form>
      <ToastContainer 
      autoClose={3000}
      position="bottom-right"
      theme="colored"  />
    </Box>
    
</div>
    
  );
}

export default TouristSpot;