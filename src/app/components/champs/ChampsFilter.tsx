"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { useAppStore } from "@/app/Zustand/store";
import { getChamps } from "../../../service/getAllChamps";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";

const tags = [
  "All",
  "Support",
  "Tank",
  "Fighter",
  "Mage",
  "Assassin",
  "Marksman",
];

const tagTranslations: { [key: string]: string } = {
  All: "Todos",
  Support: "Soporte",
  Tank: "Tanque",
  Fighter: "Luchador",
  Mage: "Mago",
  Assassin: "Asesino",
  Marksman: "Tirador",
};

export function ChampsFilter() {
  const { champs, setChamps } = useAppStore();
  const [champsByFilter, setChampsByFilter] = React.useState([]);
  const [filter, setFilter] = React.useState("All");
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  // React.useEffect(() => {
  //   inputRef.current.focus();
  //   getChamps().then((data) => setChampsByFilter(Object.values(data)));
  // }, []);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    getChamps().then((data) => setChampsByFilter(Object.values(data)));
  }, []);

  React.useEffect(() => {
    const filterByTag = () => {
      if (filter === "All") {
        const newChamps = champsByFilter.filter((champ: any) =>
          champ.id.toLowerCase().startsWith(input.toLowerCase())
        );
        setChamps(newChamps);
      } else {
        const newChamps = champsByFilter.filter(
          (champ: any) =>
            champ.tags.includes(filter) &&
            champ.id.toLowerCase().startsWith(input.toLowerCase())
        );
        setChamps(newChamps);
      }
    };
    filterByTag();
  }, [champsByFilter, filter, input, setChamps]);

  const StyledButtonGroup = styled(ButtonGroup)({
    "& .MuiButtonGroup-grouped:not(:last-of-type)": {
      borderRight: "1.5px solid #0c59a1",
    },
    "& .css-m97oia-MuiButtonBase-root-MuiButton-root:hover": {
      textDecoration: "inherent",
    },
  });

  // const inputRef = React.useRef(null);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#0c59a1",
      },
    },
  });

  return (
    <Box
      sx={{
        marginBottom: "35px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "center",
          marginBottom: "20px",
          width: "100%",
        }}
      >
        <ThemeProvider theme={theme}>
          <OutlinedInput
            color="primary"
            inputRef={inputRef}
            onChange={(e) => setInput(e?.target?.value)}
            placeholder="Buscar campeón"
            type="text"
            sx={{
              color: "white",
              fontFamily: "bold-lol",
              border: "1.5px solid #0c59a1",
              width: { md: "50%", xs: "80%" },
            }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </ThemeProvider>
      </Box>

      <ButtonGroup
        variant="text"
        aria-label="text button group"
        size="large"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {tags.map((tag) => (
          <Button
            onClick={() => setFilter(tag)}
            key={tag}
            sx={{
              color: "#fff",
              fontFamily: "sans-serif",
              textDecoration:
                filter === tag ? "underline solid #0c59a1" : "none",
              textUnderlineOffset: "5px",
              textDecorationThickness: "3px",
            }}
          >
            {tagTranslations[tag]}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}
