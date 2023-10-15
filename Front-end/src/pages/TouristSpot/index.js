import React, { useState, useEffect} from 'react';

import { uniqueTouristSpotList } from '../../service/service';
import { AddOrRegisterTouristPoint } from './functions/addOrRegisterTouristPoint';
import FormTouristSpost from '../../Components/FormTouristSpot';
import { estados } from '../../Util/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const urlParams = new URLSearchParams(window.location.search);
const idEdit = urlParams.get('id');

const buttonText = idEdit ? 'Atualizar' : 'Cadastrar';
const pageTitle = idEdit ? 'Editar Ponto Turístico' : 'Cadastro de Ponto Turístico';

function TouristSpot() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipoAtracao, setTipoAtracao] = useState('');
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidade, setCidade] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  let data = {
    pageTitle: pageTitle,
    nome: nome, 
    descricao: descricao,
    tipo_atracao: tipoAtracao,
    estado: estadoSelecionado,
    cidade: cidade,
    estados: estados,
  }
  

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
            setTipoAtracao(value.data.tipo_atracao);
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
  

  const handleSubmit = async (event) => {
    event.preventDefault();

      const newTouristSpot = {
        nome: nome,
        descricao: descricao,
        tipo_atracao: tipoAtracao,
        estado: estadoSelecionado,
        cidade: cidade
      };
  
      AddOrRegisterTouristPoint(idEdit, newTouristSpot, setIsButtonDisabled, setNome, setDescricao, setTipoAtracao, setEstadoSelecionado, setCidade, toast);
  };



  return (
    <div> 
      <FormTouristSpost
        handleSubmit={handleSubmit}
        handleEstadoChange={handleEstadoChange}
        setNome={setNome}
        data={data}
        />
    </div> 
  );
}

export default TouristSpot;