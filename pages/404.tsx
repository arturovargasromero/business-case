import { Box, Typography } from "@mui/material";

export default function notFoud() {
  return (
    <>
      <Box
        sx={{
          minHeight: "70vh",
          padding: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            background: "#FFFFFF",
            padding: "30px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "60px", md: "120px" },
              maxWidth: "400px",
              fontWeight: "900",
              lineHeight: "1",
              marginRight: "30px",
            }}
          >
            404
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "40px" },
            }}
          >
            Página no encontrada
          </Typography>
        </Box>
      </Box>
    </>
  );
}
