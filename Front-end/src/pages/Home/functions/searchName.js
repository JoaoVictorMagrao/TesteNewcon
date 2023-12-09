import { searchNameFilter } from '../../../service/service';

export const searchName = async (name, toast) => {
  try {
    const { data, status } = await searchNameFilter(name);
    if (status === 200) {
      return data;
    } else {
      toast.error('Erro ao buscar os pontos turisticos.');
    }
  } catch (error) {
    toast.error('Algo de errado aconteceu, tente novamente mais tarde.');
  }
};