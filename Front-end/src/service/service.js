import axios from 'axios'


export const api = axios.create({
  baseURL: 'https://localhost:7028/',
})

export const getPontosService = async () => {
  const result = await api.get('listarPontoTuristico')
  return result.data
}

export async function cadastrarPontoTuristico(newTouristSpot) {
  try {
    const response = await api.post('adicionaPontoTuristico', newTouristSpot);
    return response.status; 
  } catch (error) {
    throw error; 
  }
}

export const atualizarPontoTuristico = async (id, data) => {
  try {
  const response = await api.put(`editarPontoTuristico/${id}`, data)
  return response.status; 
} catch (error) {
  throw error;
}

}
