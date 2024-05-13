import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../services/api-client";
import { demoProfilePicture } from "../services/constants";
import { Eye, Heart } from "lucide-react";

const VideoDetail = () => {
  const paragraphRef = useRef(null);
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  const [paragraphs, setParagraphs] = useState('');

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        setVideoDetail(data.items[0])
        console.log(data)
        setParagraphs(data.items[0].snippet.description.slice(0, 200))
      })

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle, thumbnails, description }, statistics: { viewCount, likeCount } } = videoDetail;


  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography className="text-black muli text-4xl font-bold " color="#000" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#000" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <div className="flex items-start gap-2">
                  <img className="w-[80px] h-[80px]  rounded-full" src={thumbnails?.high?.url || demoProfilePicture} alt={channelTitle} />
                  <Typography className="muli text-[26px] font-bold" color="#000" >
                    {channelTitle}
                    <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                  </Typography>
                </div>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <div className="flex items-center gap-1">
                  <Heart className="text-red-500 " />
                  <p className="text-black">
                    {parseInt(likeCount).toLocaleString()} likes
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="text-blue-500 " />
                  <p className="text-black">

                    {parseInt(viewCount).toLocaleString()} views
                  </p>
                </div>
              </Stack>
            </Stack>
            <div className="ml-[88px] max-w-[880px] pb-20">
              <p ref={paragraphRef}>
                {paragraphs}...
              </p>
              <button onClick={() => setParagraphs(description)}>Show More</button>
            </div>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} className="h-[120vh] overflow-y-scroll" justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
