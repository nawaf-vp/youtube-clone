import { Box, Stack } from "@mui/material";
import {VideoCard,ChannelCard} from "./";


const Videos = ({videos}) => {
    console.log(videos);
  return (
    <Stack direction={"row"}
           flexWrap={"wrap"}
           justifyContent={"start"}
           gap={3}
           sx={{backgroundColor:'#242526'}}
           >
        {videos.map((item, idx)=>(
            <Box key={idx} sx={{width: { xs: '100%', sm: '318px'}, boxShadow:'5px 5px 20px #030303'}}>
               {item.id.videoId && <VideoCard video={item}/>}
               {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos