import { Box } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ChannelDetail, Feed, SearchFeed, VideoDetail } from "./components"
import Header from "./components/Header"

function App() {

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#fff', color: '#000' }}>
        <Header />
        <Routes>
          <Route exact path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
