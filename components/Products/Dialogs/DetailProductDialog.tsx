import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";

import { Dispatch, SetStateAction, useState, useEffect } from "react";

interface IDetailProductDialogProps {
  dialogData: {
    open: boolean;
    action: string;
    data: string;
  };
  setDialogData: Dispatch<SetStateAction<any>>;
}
const DetailProductDialog = (props: IDetailProductDialogProps) => {
  const [datosEdit, setDatosEdit] = useState<any>();
  useEffect(() => {
    console.log(props.dialogData);
    let datos = JSON.parse(localStorage.getItem("dataRow") || "");
    datos = datos.filter((dato: any) => {
      return dato.id.includes(props.dialogData.data);
    });
    setDatosEdit(datos[0]);
  }, []);

  console.log(datosEdit);

  return (
    // <Box sx={{}}>
    <Stack sx={{}} spacing={2} direction="column">
      <Typography
        sx={{
          fontSize: "20px",
          textAlign: "left",
        }}
      >
        {datosEdit?.nombre}
      </Typography>
      <TextField
        id="standard-quantity"
        label="Cantidad"
        type="number"
        value={datosEdit?.cantidad}
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
        value={datosEdit?.precioUnitario}
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
        value={datosEdit?.descripcion}
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
