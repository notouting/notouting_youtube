import { AlarmClock, Flame, Folder, Folders, History, HomeIcon } from "lucide-react"
import VideoItem from "./VideoItem"
import VideoList from "./VideoList"




const Home = () => {
    return (
        <div className="flex px-5">
            <div className="w-[250px] ">
                <ul className="flex flex-col gap-[28px]">
                    <li className="flex items-center gap-[13px] hover:text-red-500 text-black cursor-pointer">
                        <HomeIcon className="w-5 h-5" />
                        <span className="muli text-base">Home</span>
                    </li>
                    <li className="flex items-center gap-[13px] hover:text-red-500 text-black cursor-pointer">
                        <Flame className="w-5 h-5" />
                        <span className="muli text-base">Trending</span>
                    </li>
                    <li className="flex items-center gap-[13px] hover:text-red-500 text-black cursor-pointer">
                        <Folders className="w-5 h-5" />
                        <span className="muli text-base">Subscriptions</span>
                    </li>
                    <li className="flex items-center gap-[13px] hover:text-red-500 text-black cursor-pointer">
                        <Folder className="w-5 h-5" />
                        <span className="muli text-base">Library</span>
                    </li>
                    <li className="flex items-center gap-[13px] hover:text-red-500 text-black cursor-pointer">
                        <History className="w-5 h-5" />
                        <span className="muli text-base">History</span>
                    </li>
                    <li className="flex items-center gap-[13px] hover:text-red-500 text-black cursor-pointer">
                        <AlarmClock className="w-5 h-5" />
                        <span className="muli text-base">Watch later</span>
                    </li>
                </ul>
                <h2 className="muli font-bold text-lg my-6">Subscriptions </h2>
                <ul className="flex flex-col gap-[23px] ">
                    <li className="flex gap-[10px] cursor-pointer">
                        <img className="w-[26px] h-[26px] rounded-full" src="https://picsum.photos/250/150" alt="img" />
                        <span className="muli text-base">Asko's bithday</span>
                    </li>
                </ul>
            </div>
            <main className="">
                <VideoList>
                    <VideoItem author="asko" img="https://picsum.photos/250/150" time="2020" title="Asko's bithday" views="120k" />
                    <VideoItem author="asko" img="https://picsum.photos/250/150" time="2020" title="Asko's bithday" views="120k" />
                    <VideoItem author="asko" img="https://picsum.photos/250/150" time="2020" title="Asko's bithday" views="120k" />
                    <VideoItem author="asko" img="https://picsum.photos/250/150" time="2020" title="Asko's bithday" views="120k" />
                </VideoList>
            </main>
        </div>
    )
}

export default Home