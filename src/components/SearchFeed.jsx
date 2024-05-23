import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { $fetch } from "../utils/fetchFromAPI";
import { Videos } from "./";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    $fetch(`search?part=snippet&q=${searchTerm}`).then(({ items }) =>
      setVideos(items)
    );
  }, [searchTerm]);

  return (
    <>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          sx={{ color: "white", fontWeight: "bold", mb: 2 }}
        >
          Search Results for:&nbsp;
          <span style={{ color: "#F31503" }}>{searchTerm}</span>&nbsp;videos
        </Typography>

        <Videos videos={videos} />
      </Box>
    </>
  );
};

export default SearchFeed;
