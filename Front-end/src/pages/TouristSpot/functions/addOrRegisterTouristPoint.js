import {updateTouristSpot, addTouristSpot} from '../../../service/service';

export const AddOrRegisterTouristPoint = async (idEdit, newTouristSpot, setIsButtonDisabled, setNome, setDescricao, setTipoAtracao, setEstadoSelecionado, setCidade, toast) => {
  try {
    setIsButtonDisabled(true);
    if (idEdit) {
      const response = await updateTouristSpot(idEdit, newTouristSpot);
      if (response === 200) {
        toast.success('Ponto Turístico atualizado com sucesso!');
      } else {
        toast.error('Erro ao atualizar Ponto Turístico.');
      }
    } else {
      const response = await addTouristSpot(newTouristSpot);
      if (response === 200) {
        toast.success('Ponto Turístico cadastrado com sucesso!');
        setNome('');
        setDescricao('');
        setTipoAtracao('');
        setEstadoSelecionado('');
        setCidade('');
      } else {
        toast.error('Erro ao cadastrar Ponto Turístico.');
      }
    }
  } catch (error) {
    toast.error('Algo de errado aconteceu, tente novamente mais tarde.');
  } finally {
    setIsButtonDisabled(false);
  }
}