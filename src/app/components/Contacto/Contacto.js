import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, Container, Button } from "@mui/material";

export default function HelperTextAligned() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar los datos del formulario
    console.log("Formulario enviado");
  };

  return (
    <Box
      noValidate
      autoComplete="off"
      sx={{
        display: "flex",
        background: "white",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        height: "50vh",
        "& > :not(style)": { m: 1 },
      }}
    >
      <Container>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <TextField
              helperText="Ingresa tu nombre"
              id="demo-helper-text-aligned"
              label="Nombre"
              sx={{ marginTop: "10px", marginBottom: "10px" }}
            />
            <TextField
              helperText="Ingresa tu numero de contacto"
              id="outlined-number"
              type="number"
              label="Contacto"
              sx={{ marginTop: "10px", marginBottom: "10px" }}
            />
            <TextField
              helperText="Expresa tu consulta"
              id="outlined-multiline-static"
              label="Necesito ..."
              multiline
              rows={1}
              sx={{ marginTop: "10px", marginBottom: "10px" }}
            />

            <Button
              variant="contained"
              color="secondary"
              type="submit"
              sx={{ marginTop: "10px", marginBottom: "10px" }}
            >
              Enviar
            </Button>
          </FormControl>
        </form>
      </Container>
    </Box>
  );
}
