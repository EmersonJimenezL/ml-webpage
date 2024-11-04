import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, Container, Button } from "@mui/material";

export default function HelperTextAligned() {
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
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
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
            variant="submit"
            color="secondary"
            sx={{ marginTop: "10px", marginBottom: "10px" }}
          >
            Enviar
          </Button>
        </FormControl>
      </Container>
    </Box>
  );
}
