import * as React from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

export const ItemSearch = ({ onSearch }: any) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event: any) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value);
  };
  return (
    <div className="home">
      <Box
        sx={{
          color: "white",
          flexGrow: 1,
          marginBottom: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <OutlinedInput
          placeholder="Buscar item"
          value={searchTerm}
          onChange={handleSearch}
          type="text"
          sx={{
            color: "white",
            fontFamily: "bold-lol",
            border: "1.5px solid #ffffff",
            width: { md: "50%", xs: "80%" },
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </Box>
    </div>
  );
};
