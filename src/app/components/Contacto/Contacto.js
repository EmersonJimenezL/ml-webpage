import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function HelperTextAligned() {
  return (
    <Box
      component="form"
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
      <TextField
        helperText="Ingresa tu nombre"
        id="demo-helper-text-aligned"
        label="Nombre"
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
      />
      <TextField
        helperText="Expresa tu consulta"
        id="outlined-multiline-static"
        label="Necesito ..."
        multiline
        rows={1}
      />
    </Box>
  );
}
