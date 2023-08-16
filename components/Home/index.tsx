import { Box, Typography, Link, Button } from "@mui/material";
import { useRouter } from "next/router";
import Stack from "@mui/material/Stack";

const index = () => {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          minHeight: "70vh",
          padding: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
              interactuar con ellos, como tambien podras ver la información de
              tu perfil.
            </Typography>
          </Box>
        </Box>
        <Stack
          sx={{ marginTop: " 30px" }}
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            sx={{
              marginTop: "60px",
              width: "100%",
              maxWidth: "300px",
              margin: "0 0 60px 0",
            }}
            variant={"contained"}
            onClick={() => router.push("login")}
          >
            Ingresar
          </Button>
          <img
            src="/images/Home/HomeImage.jpg"
            alt="home image"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "50%",
              marginTop: "30px",
            }}
          />
        </Stack>
      </Box>
    </>
  );
};

export default index;
