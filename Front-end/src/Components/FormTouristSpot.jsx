import { Box, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
function FormTouristSpot(props) {
  return (
      <Box className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={props.handleSubmit} className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{props.pageTitle}</h2>
        <TextField label="Nome" value={props.nome} onChange={(e) => setNome(e.target.value)} fullWidth  cla/>
        <TextField label="Descrição" value={props.descricao} onChange={(e) => setDescricao(e.target.value)} fullWidth multiline  />
        <TextField label="Tipo Atração" value={props.tipoAtracao} onChange={(e) => setTipoAtracao(e.target.value)} fullWidth  />
        <FormControl fullWidth margin="normal">
          <InputLabel>Estado</InputLabel>
          <Select
            value={props.estado}
            onChange={props.handleEstadoChange}
            label="Estado"
          >
            {props.estados.map((estado) => (
              <MenuItem key={estado.nome} value={estado.sigla}>
                {estado.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField label="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} fullWidth className="mb-4" />

        <Button disabled={isButtonDisabled} type="submit" variant="contained" color="primary" className="w-full">
          {isButtonDisabled ? 'Processando...' : buttonText} 
        </Button>
      </form>
      <ToastContainer 
      autoClose={3000}
      position="bottom-right"
      theme="colored"  />
      </Box>
  )
}
export default FormTouristSpot;