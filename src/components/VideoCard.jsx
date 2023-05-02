import { Link } from "react-router-dom";
import { Typography ,Card,CardContent,CardMedia} from "@mui/material";
import { ChangeCircle, Height } from "@mui/icons-material";
import { demoThumbnailUrl ,demoVideoUrl,demoVideoTitle,demoChannelTitle,demoChannelUrl} from "../utils/constants";


const VideoCard = ({video:{id :{videoId} ,snippet}}) => {
    

  return (
    <Card>
        <Link to ={videoId ? `/video/${videoId}`:demoVideoUrl}>
           <CardMedia
           image={snippet?.thumbnails?.high?.url}
           alt={snippet?.title}
           sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }}
           />
        </Link>
    </Card>
  )
}

export default VideoCard