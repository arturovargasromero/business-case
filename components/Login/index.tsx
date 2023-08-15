import { Box } from "@mui/material";
import Login from "./Login";
import TopBar from "../Layout/TopBar";
const Index = () => {
  return (
    <>
      <Box
        sx={{
          margin: "20px 30px",
          minHeight: "80vh",
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Login />
      </Box>
    </>
  );
};

export default Index;
