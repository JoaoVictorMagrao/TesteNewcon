import { createContext, useContext, useEffect, useState } from 'react'
import { api, getPontosService } from '../service/service'

const defaultContext = {
  pontos: undefined,
  setPontos: () => undefined,
  setVisualizar: () => undefined,
  loading: false,
  setLoading: () => false,
  getPontos: () => undefined,
}

const PontosContext = createContext(defaultContext)

export const usePontosContext = () => useContext(PontosContext)

export const PontosProvider = ({ children }) => {
  const [pontos, setPontos] = useState([])
  const [visualizar, setVisualizar] = useState()
  const [loading, setLoading] = useState(false)

  const getPontos = async () => {
    setLoading(true)
    const pontosService = await getPontosService()
    setLoading(false)
    setPontos(pontosService)
  }

  async function ExcluirPonto(id) {
    await api.delete(`excluiPontoTuristico/${id}`)
    getPontos()
  }

  async function visualizarItens(id) {
    const result = await api.get(`obterPontoTuristico/${id}`)
    setVisualizar(result.data)
  }

  async function atualizaDados(id) {
    try {
      const result = await api.get(`obterPontoTuristico/${id}`)
      setVisualizar(result.data)
    } catch (error) {}
  }

  useEffect(() => {
    getPontos()
  }, [])

  return (
    <PontosContext.Provider
      value={{
        pontos,
        setPontos,
        visualizar,
        setVisualizar,
        loading,
        setLoading,
        getPontos,
        ExcluirPonto,
        visualizarItens,
        atualizaDados,
      }}
    >
      {children}
    </PontosContext.Provider>
  )
}
