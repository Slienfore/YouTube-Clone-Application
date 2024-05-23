import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { $fetch } from "../utils/fetchFromAPI";
import { Videos } from "./";

const VideoDetail = () => {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    $fetch(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    $fetch(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <>
      <Box minHeight="95vh">
        <Stack direction={{ xs: "column", md: "row" }}>
          {/* Video Play */}
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />

              <Typography variant="h5" fontWeight="bold" p={2} color="white">
                {title}
              </Typography>

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: "white" }}
                py={1}
                px={2}
              >
                <Link to={`/channel/${channelId}`}>
                  <Typography
                    variant={{ sm: "subTitle1", md: "h6" }}
                    color="white"
                  >
                    {channelTitle}
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>

                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()}&nbsp;views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(likeCount).toLocaleString()}&nbsp;likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>

          {/* Related Videos Recommendation */}
          <Box justifyContent="center" alignItems="center" px={2} py={1}>
            <Videos videos={videos} direction="column" />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default VideoDetail;
