import * as React from "react";

import Box from "@mui/material/Box";

import SearchIcon from "@mui/icons-material/Search";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

export const ItemSearch = () => {
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
          inputRef={inputRef}
          onChange={(e) => setInput(e?.target?.value)}
          placeholder="Buscar item"
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
