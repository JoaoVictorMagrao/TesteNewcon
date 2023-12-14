import axios from 'axios'


export const api = axios.create({
  baseURL: 'https://localhost:7205/',
})

export const getPontosService = async (setLoading) => {
  setLoading(true);
  const response = await api.get('api/PontosTuristico');
  return response.data;
}

export async function addTouristSpot(newTouristSpot) {

  try {
    const response = await api.post('api/PontosTuristico', newTouristSpot);
    return response.status;
  } catch (error) {
    return error.response.status;
  }
}

export async function deleteTouristSpot(id) {
  try {
    const response = await api.delete(`api/PontosTuristico/${id}`);
    return response.status;
  } catch (error) {
    return error.response.status;
  }
}

export const updateTouristSpot = async (id, data) => {
  try {
    const response = await api.put(`api/PontosTuristico/${id}`, data)
    return response.status;
  } catch (error) {
    return error.response.status;
  }
}

export const uniqueTouristSpotList = async (id, data) => {
  try {
    const response = await api.get(`api/PontosTuristico/${id}`, data)
    return { data: response.data, status: response.status };
  } catch (error) {
    return error.response.status;
  }
}

export const searchNameFilter = async (name) => {
  try {
    const response = await api.get(`api/PontosTuristico/nome?nome=${name}`);
    return { data: response.data, status: response.status };

  } catch (error) {
    return error.response.status;
  }
}

export const searchDescriptionFilter = async (description) => {
  try {
    const response = await api.get(`api/PontosTuristico/descricao?descricao=${description}`);
    return { data: response.data, status: response.status };

  } catch (error) {
    return error.response.status;
  }
}
