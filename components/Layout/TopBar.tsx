import {
  Box,
  Container,
  Menu,
  MenuItem,
  Tooltip,
  Link,
  Button,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import axios from "axios";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const menu = [
  { submenu: "Perfil", url: "profile" },
  { submenu: "Productos", url: "products" },
  { submenu: "Cerrar Sesión", url: "logout" },
];

const TopBar = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [user, setUser] = useState({
    email: "",
    username: "",
  });
  const datosUser = async () => {
    try {
      const resp = await axios.post("api/auth/profile");
      setUser({
        ...user,
        email: resp.data.email,
        username: resp.data.user,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const logOut = async () => {
    try {
      const resp = await axios.post("api/auth/logout");
      setUser({
        ...user,
        email: resp.data.email,
        username: resp.data.user,
      });
      resp?.status === 200 ? router.push("/login") : "";
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    datosUser();
    console.log("render");
  }, [setUser]);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  let sessionUser = user.email ? true : false;
  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          sx={{
            p: 0,
            margin: "12px 10px",
            padding: "5px 10px",
            borderRadius: "10px",
            color: "#FFFFFF",
          }}
          onClick={() => {
            sessionUser ? router.push("products") : router.push("/");
          }}
        >
          <Typography
            sx={{
              fontWeight: "900",
              fontSize: "14px",
            }}
          >
            {" "}
            Business Case
          </Typography>
        </Button>
        {sessionUser && (
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="">
                <Button
                  onClick={handleOpenUserMenu}
                  sx={{
                    p: 0,
                    padding: "5px 10px",
                    borderRadius: "10px",
                  }}
                >
                  <Typography sx={{ fontSize: "14px", color: "#FFFFFF" }}>
                    {sessionUser && user.username}
                  </Typography>
                  <AccountCircleIcon
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { xs: "30px", md: "40px" },
                      marginLeft: "10px",
                    }}
                  />
                </Button>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {menu.map((menu) => (
                  <MenuItem
                    key={menu.submenu}
                    onClick={
                      menu.url !== "logout"
                        ? (e) => router.push(menu.url)
                        : () => logOut()
                    }
                  >
                    <Typography textAlign="center">{menu.submenu}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        )}
        {!sessionUser && (
          <Button
            sx={{
              p: 0,
              margin: "12px 10px",
              padding: "5px 10px",
              borderRadius: "10px",
              color: "#FFFFFF",
            }}
            onClick={() => router.push("login")}
          >
            <Typography sx={{ fontSize: "12px", marginRight: "10px" }}>
              Ingresar
            </Typography>{" "}
            <LoginIcon />
          </Button>
        )}
      </Container>
    </AppBar>
  );
};

export default TopBar;
