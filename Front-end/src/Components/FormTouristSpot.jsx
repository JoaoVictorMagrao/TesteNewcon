import { Box, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function FormTouristSpot(props) {
  return (
    <div>
      <Box className="flex justify-center">
        <form onSubmit={props.handleSubmit} className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{props.data.pageTitle}</h2>
          <TextField label="Nome" value={props.data.nome} onChange={(e) => props.setNome(e.target.value)} fullWidth margin="normal" />
          <TextField label="Descrição" value={props.data.descricao} onChange={(e) => props.setDescricao(e.target.value)} margin="normal" fullWidth multiline />
          <TextField label="Endereço" value={props.data.endereco} onChange={(e) => props.setEndereco(e.target.value)} margin="normal" fullWidth />
          <FormControl fullWidth margin="normal">
            <InputLabel>Estado</InputLabel>
            <Select
              value={props.data.estado}
              onChange={props.handleEstadoChange}
              label="Estado"
            >
              {props.data.estados.map((estado) => (
                <MenuItem key={estado.nome} value={estado.sigla}>
                  {estado.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField label="Cidade" value={props.data.cidade} onChange={(e) => props.setCidade(e.target.value)} margin="normal" fullWidth className="mb-4" />

          <Button disabled={props.isButtonDisabled} type="submit" variant="contained" color="primary" className="w-full">
            {props.isButtonDisabled ? 'Processando...' : props.data.buttonText}
          </Button>
        </form>

      </Box>
    </div>
  )
}
export default FormTouristSpot;