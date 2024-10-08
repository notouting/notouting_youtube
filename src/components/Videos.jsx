import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader } from "./";
import VideoItem from "./VideoItem";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack className="max-[547px]:justify-center " direction={direction || "row"} flexWrap="wrap" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoItem video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
