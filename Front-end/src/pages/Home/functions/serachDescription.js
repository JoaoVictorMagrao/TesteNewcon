import { searchDescriptionFilter } from '../../../service/service';

export const searchDescription = async (description, toast) => {
  try {
    const { data, status } = await searchDescriptionFilter(description);
    if (status === 200) {
      return data;
    } else {
      toast.error('Erro ao buscar os pontos turisticos.');
    }
  } catch (error) {
    toast.error('Algo de errado aconteceu, tente novamente mais tarde.');
  }
};