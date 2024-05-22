import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const NavBar = () => (
  <>
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        p: 2,
        background: "#000",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>

      <SearchBar />
    </Stack>
    c
  </>
);

export default NavBar;
