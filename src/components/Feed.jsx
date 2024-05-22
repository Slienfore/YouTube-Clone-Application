import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./";
import { $fetch } from "../utils/fetchFromAPI";
import { useEffect, useState } from "react";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    $fetch(`search?part=snippet&q=${selectedCategory}`).then(({ items }) =>
      setVideos(items)
    );
  }, [selectedCategory]);

  return (
    <>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        {/* SideBar */}
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            CopyRight 2024 Slienfore Media
          </Typography>
        </Box>

        {/* main */}
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            sx={{ color: "white", fontWeight: "bold", mb: 2 }}
          >
            {selectedCategory}&nbsp;
            <span style={{ color: "#F31503" }}>videos</span>
          </Typography>

          <Videos videos={videos} />
        </Box>
      </Stack>
    </>
  );
};

export default Feed;
