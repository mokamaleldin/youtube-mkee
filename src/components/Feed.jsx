import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fechFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
 
  const [videos, setVideos] = useState([]);
   
   useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);
    

  {/*All is right*/}
  return (
    <Stack sx={{flexDirection:{sx:"column" , md:"row"} }}>
      {/* First box*/}
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        {/*sidebar is here ----*/}
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        {/*copyright*/}
      <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 MKEE
        </Typography>
      </Box>

      {/* secound box*/}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>
            Videos
          </span>
        </Typography>

        {/*Videos*/}
        {<Videos videos={videos} />}

      </Box>

    </Stack>
  )
}

export default Feed;


{/*The error is here*/}