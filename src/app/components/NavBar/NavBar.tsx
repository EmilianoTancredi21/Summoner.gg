import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import "../../../styles/NavBar.scss";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Inicio", "Items"];

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       <Image src={"/tags/LogoLol.png"} alt="" width={50} height={50} />
  //     </Typography>
  //     <Divider />
  //   </Box>
  // );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className="transparentNavbar">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              gap: 2,
            }}
          >
            <Image src={"/tags/LogoLol.png"} alt="" width={50} height={50} />
            SUMMONERS.GG
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
