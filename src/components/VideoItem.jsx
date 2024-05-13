import { Link } from "react-router-dom"
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../services/constants";


const VideoItem = ({ video: { id: { videoId }, snippet } }) => {
    function calculateTimePassed(startDate) {
        // Convert start date string to Date object
        const startTime = new Date(startDate);
        // Get the current time
        const currentTime = new Date();
        // Calculate the time difference in milliseconds
        const timeDifference = currentTime - startTime;

        // Calculate time passed in minutes, hours, and days
        const minutesPassed = Math.floor(timeDifference / (1000 * 60));
        const hoursPassed = Math.floor(timeDifference / (1000 * 60 * 60));
        const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const yearsPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));

        // Output the result based on the time passed
        if (yearsPassed > 0) {
            return `${yearsPassed} years ago`;
        } else if (daysPassed > 0) {
            return `${daysPassed} days ago`;
        } else if (hoursPassed > 0) {
            return `${hoursPassed} hours ago`;
        } else {
            return `${minutesPassed} minutes ago`;
        }
    }


    return (
        <li className="w-[250px] list-none h-[250px] max-[547px]:mx-auto">
            <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY#haeder`}>
                <img className="w-[250px] h-[150px] rounded-[14px]" src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} />
            </Link>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
                <h3 className="muli font-bold text-base">
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </h3>
            </Link>
            <div className="w-full flex justify-between items-center">
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
                    <span className="text-[13px] muli  font-bold">
                        {snippet?.channelTitle || demoChannelTitle}
                    </span>
                </Link>
                <span className="text-[13px] muli">{calculateTimePassed(snippet?.publishedAt)}</span>
            </div>
        </li>
    )
}

export default VideoItem