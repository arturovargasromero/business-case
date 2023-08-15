import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

import { Dispatch, SetStateAction, useState, useEffect } from "react";

interface IDetailProductDialogProps {
  dialogData: {
    open: boolean;
    action: string;
    data: string;
  };
  setDialogData: Dispatch<SetStateAction<any>>;
  datosEdit: any;
}
const DetailProductDialog = (props: IDetailProductDialogProps) => {
  return (
    // <Box sx={{}}>
    <Stack
      sx={{ marginTop: " 30px" }}
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <TextField
        id="standard-quantity"
        label="Cantidad"
        type="number"
        value={props.datosEdit[0]?.cantidad}
        InputProps={{
          readOnly: true,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />
      <TextField
        id="standard-price"
        label="Precio"
        type="text"
        value={props.datosEdit[0]?.precioUnitario}
        InputProps={{
          readOnly: true,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />
      <TextField
        id="standard-description"
        label="Descripción"
        multiline
        value={props.datosEdit[0]?.descripcion}
        rows={6}
        InputProps={{
          readOnly: true,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />
    </Stack>
    // </Box>
  );
};

export default DetailProductDialog;
