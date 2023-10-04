import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useAppStore } from "@/app/Zustand/store";
import { getChamps } from "../../../service/getAllChamps";
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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const { champs, setChamps } = useAppStore();
  const [champsByFilter, setChampsByFilter] = React.useState([]);
  const [filter, setFilter] = React.useState("All");
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

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

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "40px" }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" sx={{ backgroundColor: "#141515" }}>
          <Toolbar sx={{ flexDirection: { xs: "column", sm: "row" } }}>
            <Search
              sx={{
                marginBottom: { xs: "20px", sm: 0 },
                marginTop: { xs: "20px", sm: 0 },
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ "aria-label": "buscar" }}
                onChange={(e) => setInput(e?.target?.value)}
              />
            </Search>
            <ButtonGroup
              className="custom-button-group"
              aria-label="text button group"
              variant="text"
              size="large"
              color="primary"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: { xs: "20px", sm: 0 },
                marginLeft: { sm: "20px" },
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
                      filter === tag ? "underline solid #C28F2C" : "none",
                    textUnderlineOffset: "10px",
                    textDecorationThickness: "3px",
                    "& hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {tagTranslations[tag]}
                </Button>
              ))}
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
