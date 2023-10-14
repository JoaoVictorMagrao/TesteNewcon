import axios from 'axios'


export const api = axios.create({
  baseURL: 'https://localhost:7028/',
})

export const getPontosService = async () => {
  const response = await api.get('listarPontoTuristico');
  return response.data;
}

export async function addTouristSpot(newTouristSpot) {
  console.log(newTouristSpot);
  try {
    const response = await api.post('adicionaPontoTuristico', newTouristSpot);
    return response.status; 
  } catch (error) {
    return error.response.status; 
  }
}

export async function deleteTouristSpot(id) {
  try {
    const response = await api.delete(`excluiPontoTuristico/${id}`);
    return response.status;
  } catch (error) {
    return error.response.status; 
  }
}

export const updateTouristSpot = async (id, data) => {
  try {
  const response = await api.put(`editarPontoTuristico/${id}`, data)
  return response.status; 
  } catch (error) {
    return error.response.status;
  }
}

export const uniqueTouristSpotList = async (id, data) => {
  try {
  const response = await api.get(`obterPontoTuristico/${id}`, data)
  return { data: response.data, status: response.status };
  } catch (error) {
    return error.response.status;
  }
}
