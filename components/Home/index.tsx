import { Box, Typography, Link, Button } from "@mui/material";

const index = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <Box sx={{ maxWidth: "600px", textAlign: "center" }}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "30px",
            }}
          >
            {" "}
            ¡Bienvenido!
          </Typography>
          <Typography
            sx={{
              margin: "30px 0",
            }}
          >
            En este pequeño proyecto podras visualizar tus productos e
            interactuar con ellos, como tambien podras ver la información de tu
            perfil,
          </Typography>
          <Link href="/login">
            <Button
              sx={{
                marginTop: "60px",
                width: "100%",
                maxWidth: "300px",
                margin: "0 0 60px 0",
              }}
              variant="contained"
            >
              Ingresar
            </Button>
          </Link>
          <img
            src="/images/Home/HomeImage.jpg"
            alt="home image"
            style={{ width: "100%", borderRadius: "50%" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default index;
