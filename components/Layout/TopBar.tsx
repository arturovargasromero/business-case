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
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useRouter } from "next/router";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const menu = [
  { submenu: "Perfil", url: "profile" },
  { submenu: "Productos", url: "products" },
  { submenu: "Cerrar Sesión", url: "logout" },
];

const TopBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

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

  const router = useRouter();
  let sessionUser = true;
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
        <Link sx={{ textDecoration: "none", color: "#000000" }} href="/">
          <Typography> Logo</Typography>
        </Link>
        <Toolbar
          disableGutters
          sx={!sessionUser ? { display: "none" } : { display: "" }}
        >
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon
                  sx={{
                    color: "#FFFFFF",
                    fontSize: { xs: "30px", md: "40px" },
                  }}
                />
              </IconButton>
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
                  onClick={(e) => router.push(menu.url)}
                >
                  <Typography textAlign="center">{menu.submenu}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        <button
          style={{
            margin: "20px 0",
            color: "#1565c0",
            background: "#FFFFFFF",
            padding: "10px 20px",
            border: "none",
            borderRadius: "12px",
            display: sessionUser ? "none" : "",
          }}
          onClick={(e) => router.push("login")}
        >
          Ingresar
        </button>
      </Container>
    </AppBar>
  );
};

export default TopBar;
