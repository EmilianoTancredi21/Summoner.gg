import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#101111",
    },
  },
});

const tags = [
  "All",
  "Boots",
  "ManaRegen",
  "Mana",
  "HealthRegen",
  "Health",
  "CriticalStrike",
  "SpellDamage",
  "SpellBlock",
];

export const ItemFilter = () => {
  return <div>ItemFilter</div>;
};
