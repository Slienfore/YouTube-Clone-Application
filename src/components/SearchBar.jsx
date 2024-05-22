import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";

const SearchBar = () => (
  <>
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        mr: { sm: 5 },
        boxShadow: "none",
      }}
    >
      <input
        onChange={() => {}}
        value=""
        placeholder="Searching..."
        className="search-bar"
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search></Search>
      </IconButton>
    </Paper>
  </>
);

export default SearchBar;
