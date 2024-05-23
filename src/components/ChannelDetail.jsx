import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { $fetch } from "../utils/fetchFromAPI";
import { useEffect, useState } from "react";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    $fetch(`channels?part=?snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    $fetch(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);

  console.log(videos);

  return (
    <>
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              background: "linear-gradient(to right, #9796f0, #fbc7d4)",
              zIndex: 10,
              height: "300px",
            }}
          />

          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        </Box>

        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }} />

          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
};

export default ChannelDetail;
