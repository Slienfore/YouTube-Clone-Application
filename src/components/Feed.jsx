import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./";

const Feed = () => (
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
        <SideBar />

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
          New&nbsp;<span style={{ color: "#F31503" }}>videos</span>
        </Typography>

        <Videos videos={[]} />
      </Box>
    </Stack>
  </>
);

export default Feed;
