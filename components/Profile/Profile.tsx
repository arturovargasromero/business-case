import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
const Profile = () => {
  const [user, setUser] = useState({ email: "", username: "" });
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "");
    setUser({ ...user, email: userData.email, username: userData.username });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          background: "#FFFFFF",
          margin: "40px 30px",
          padding: "20px",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "60px",
            height: "60px",
            background: "#9F9F9F",
            borderRadius: "12px",
            marginRight: "20px",
          }}
        ></Box>
        <Box>
          <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
            {user.username}
          </Typography>
          <Typography sx={{ fontWeight: "300", fontSize: "16px" }}>
            {user.email}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
