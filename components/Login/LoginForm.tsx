import { Box, TextField, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const LoginForm = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [passwordValidate, setPasswordValidate] = useState(true);
  const [emailValidate, setEmailValidate] = useState(true);
  const handleOnChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

    //Contraseña de 8 a 20 caracteres con minimo una mayuscula, minuscula y numero
    const rePassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,20}$/;
    const reEmail =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (e.target.name === "password") {
      setPasswordValidate(rePassword.test(e.target.value));
    }
    if (e.target.name === "email") {
      setEmailValidate(reEmail.test(e.target.value));
    }
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
          error={!emailValidate}
          autoComplete="current-email"
          variant="standard"
          onChange={handleOnChange}
        />
        {!emailValidate && (
          <Typography
            sx={{
              width: "100%",
              maxWidth: "300px",
              fontSize: "10px",
              textAlign: "left",
              color: "red",
            }}
          >
            La contraseña debe tener al menos una mayúscula, una minúscula y un
            número
          </Typography>
        )}
        <TextField
          sx={{ width: "100%", maxWidth: "300px" }}
          id="standard-password-input"
          name="password"
          label="Contraseña"
          type="password"
          error={!passwordValidate}
          autoComplete="current-password"
          variant="standard"
          onChange={handleOnChange}
        />
        {!passwordValidate && (
          <Typography
            sx={{
              width: "100%",
              maxWidth: "300px",
              fontSize: "10px",
              textAlign: "left",
              color: "red",
            }}
          >
            La contraseña debe tener al menos una mayúscula, una minúscula y un
            número
          </Typography>
        )}
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
