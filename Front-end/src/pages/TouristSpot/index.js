import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { uniqueTouristSpotList } from '../../service/service';
import { AddOrRegisterTouristPoint } from './functions/addOrRegisterTouristPoint';
import FormTouristSpost from '../../Components/FormTouristSpot';
import { estados } from '../../Util/util';
import { toast } from 'react-toastify';

const urlParams = new URLSearchParams(window.location.search);
const idEdit = urlParams.get('id');

function TouristSpot() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidade, setCidade] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const navigate = useNavigate();

  let dataProps = {
    pageTitle: pageTitle,
    nome: nome,
    descricao: descricao,
    endereco: endereco,
    estado: estadoSelecionado,
    cidade: cidade,
    estados: estados,
    isButtonDisabled: isButtonDisabled,
    buttonText: buttonText
  }

  const handleEstadoChange = (event) => {
    setEstadoSelecionado(event.target.value);
  };

  useEffect(() => {
    const urlVerificaId = window.location.href;
    if (urlVerificaId.includes('id')) {
      setButtonText('Atualizar');
      setPageTitle('Editar Ponto Turístico');
      uniqueTouristSpotList(idEdit)
        .then((value) => {
          if (value.status) {
            setNome(value.data.nome);
            setDescricao(value.data.descricao);
            setEndereco(value.data.endereco);
            setEstadoSelecionado(value.data.estado);
            setCidade(value.data.cidade);
          } else {
            toast.error('Erro ao buscar os dados do Ponto Turístico.');
          }

        })
        .catch((error) => {
          toast.error('Algo de errado aconteceu, tente novamente mais tarde.');
        });
    } else {
      setButtonText('Cadastrar');
      setPageTitle('Cadastro de Ponto Turístico');
      setNome('');
      setDescricao('');
      setEndereco('');
      setEstadoSelecionado('');
      setCidade('');
    }
  }, [idEdit]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newTouristSpot = {
      nome: nome,
      descricao: descricao,
      endereco: endereco,
      estado: estadoSelecionado,
      cidade: cidade
    };

    AddOrRegisterTouristPoint(idEdit, newTouristSpot, setIsButtonDisabled, setNome, setDescricao, setEndereco, setEstadoSelecionado, setCidade, toast, navigate);
  };

  return (
    <div>

      <FormTouristSpost
        handleSubmit={handleSubmit}
        handleEstadoChange={handleEstadoChange}
        setNome={setNome}
        setDescricao={setDescricao}
        setEndereco={setEndereco}
        setCidade={setCidade}
        data={dataProps}
      />

    </div>
  );
}

export default TouristSpot;