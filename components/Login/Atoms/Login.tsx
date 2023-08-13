import { Box } from "@mui/material";
import LoginForm from "../Molecules/LoginForm";

const Login = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "800px",
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "80px 30px",
        boxShadow: "10px 10px 5px 0px rgba(184,184,184,1)",
        textAlign: "center",
        display: "grid",
        gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" },
      }}
    >
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <img
          src="/images/Login/LoginBanner.jpg"
          alt="Login banner"
          style={{ width: "100%" }}
        />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <LoginForm />
      </Box>
    </Box>
  );
};

export default Login;
