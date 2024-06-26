import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, i) => (
        <Box key={i}>
          {/* video card */}
          {item.id.videoId && <VideoCard video={item} />}

          {/* channel info card */}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
