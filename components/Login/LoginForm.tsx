import { Box, TextField, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const LoginForm = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleOnChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const resp = await axios.post("/api/auth/login", credentials);
      router.push("/products");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box sx={{ width: "100%" }} component="form" onSubmit={handleSubmit}>
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
          name="email"
          label="Correo eléctronico"
          type="email"
          autoComplete="current-email"
          variant="standard"
          onChange={handleOnChange}
        />
        <TextField
          sx={{ width: "100%", maxWidth: "300px" }}
          id="standard-password-input"
          name="password"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          variant="standard"
          onChange={handleOnChange}
        />
      </Stack>
      <Button
        sx={{
          marginTop: "60px",
          width: "100%",
          maxWidth: "300px",
        }}
        variant="contained"
        type="submit"
      >
        Ingresar
      </Button>
    </Box>
  );
};

export default LoginForm;
