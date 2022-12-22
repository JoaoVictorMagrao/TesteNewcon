import axios from 'axios'
const Swal = require('sweetalert2')

export const api = axios.create({
  baseURL: 'https://localhost:7028/',
})

export const getPontosService = async () => {
  const result = await api.get('listarPontoTuristico')
  return result.data
}

export const updatePonto = async (id, data) => {
  const result = await api.put(`editarPontoTuristico/${id}`, data)

  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Atualizado com sucesso!!',
    showConfirmButton: false,
    timer: 1500,
  })

  return result
}
