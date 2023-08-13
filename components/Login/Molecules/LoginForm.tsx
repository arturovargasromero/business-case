import { Box, TextField, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
const LoginForm = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          fontSize: "23px",
          fontWeight: "600",
        }}
      >
        Inicio de sesión
      </Typography>
      <Stack
        sx={{ marginTop: " 30px" }}
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          sx={{ width: "100%", maxWidth: "300px" }}
          id="standard-email-input"
          label="Correo eléctronico"
          type="email"
          autoComplete="current-email"
          variant="standard"
        />
        <TextField
          sx={{ width: "100%", maxWidth: "300px" }}
          id="standard-password-input"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </Stack>
      <Button
        sx={{
          marginTop: "60px",
          width: "100%",
          maxWidth: "300px",
        }}
        variant="contained"
      >
        Ingresar
      </Button>
    </Box>
  );
};

export default LoginForm;
