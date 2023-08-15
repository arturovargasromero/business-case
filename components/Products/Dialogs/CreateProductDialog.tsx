import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const CreateProductDialog = () => {
  return (
    <Stack
      sx={{ marginTop: " 30px" }}
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <TextField
        id="standard-name"
        label="Nombre"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />
      <TextField
        id="standard-quantity"
        label="Cantidad"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />
      <TextField
        id="standard-price"
        label="Precio"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />
      <TextField
        id="standard-description"
        label="Descripción"
        multiline
        rows={6}
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />
    </Stack>
  );
};

export default CreateProductDialog;
