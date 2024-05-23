import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm) return;

    navigate(`/search/${searchTerm}`);

    setSearchTerm(""); // reset input 
  };

  return (
    <>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          mr: { sm: 5 },
          boxShadow: "none",
        }}
      >
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Searching..."
          className="search-bar"
        />
        <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
          <Search></Search>
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;
