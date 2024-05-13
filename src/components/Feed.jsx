import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";

import { fetchFromAPI } from "../services/api-client";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items)
        console.log(data)
      })
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
